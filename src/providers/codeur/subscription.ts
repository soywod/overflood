import axios from 'axios'
import _ from 'lodash/fp'

import {notify} from '../../notification'
import {ProviderFormData} from '..'

type Project = {
  id: number
  title: string
  link: string
}

type State = {
  lastId: number
  timeout: NodeJS.Timeout | null
  url: string
}

const state: State = {
  lastId: -1,
  timeout: null,
  url: '',
}

const PROXY_URL = 'https://cors-anywhere.herokuapp.com'
const SITE_URL = 'https://www.codeur.com'

function getId($project: Element) {
  const matchId = $project.id.match(/^project-(\d+)$/)
  return matchId ? Number(matchId[1]) : -1
}

function toProject($project: Element): Project | null {
  const $title = $project.getElementsByTagName('h5').item(0)
  if (!$title) return null

  const $link = $title.firstElementChild
  if (!$link) return null

  return {
    id: getId($project),
    title: $link.textContent || '',
    link: $link.getAttribute('href') || '',
  }
}

function newId($project: Element) {
  return getId($project) > state.lastId
}

async function fetchProjects() {
  const $html = document.createElement('html')
  const res = await axios.get(state.url)
  $html.innerHTML = res.data

  const $projects = $html.querySelectorAll('[id^="project-"]')
  if (!$projects) return

  const $newProjects = _.pipe([_.toArray, _.takeWhile(newId)])($projects)
  const newProjects: Project[] = _.pipe([_.map(toProject), _.compact])(
    $newProjects,
  )

  if (_.isEmpty(newProjects)) {
    return
  }

  newProjects.forEach(project =>
    notify(project.title, `${SITE_URL}${project.link}`),
  )

  state.lastId = _.first(newProjects)!.id
}

export async function subscribe({category, subcategory}: ProviderFormData) {
  state.url = `${PROXY_URL}/${SITE_URL}/projects/c/${category}/sc/${subcategory}`

  const res = await axios.get(state.url)
  const $html = document.createElement('html')
  $html.innerHTML = res.data

  const $lastProject = $html.querySelector('[id^="project-"]')
  if (!$lastProject) return

  state.lastId = getId($lastProject)
  state.timeout = setInterval(fetchProjects, 60000)
}

export function unsubscribe() {
  if (state.timeout) {
    clearInterval(state.timeout)
    state.timeout = null
  }
}
