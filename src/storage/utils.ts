/**
 * Persists tags to localStorage
 * @param {string} tags to save
 */
export function persistTags(tags: string) {
  return localStorage.setItem('tags', tags)
}

/**
 * Retrieve tags from localStorage
 * @returns {string}
 */
export function loadTags() {
  return localStorage.getItem('tags') || ''
}

export default {
  persistTags,
  loadTags,
}
