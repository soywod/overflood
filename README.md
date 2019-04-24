# Overflood

A notifier platform.

## Introduction

Overflood is an aggregation of providers. You can choose which provider you
want to subscribe to, and you will receive notifications on new content.

## Providers available

- [Stack Overflow](https://stackoverflow.com/): get notified when a new question is posted
- [Codeur.com](https://www.codeur.com/): get notified when a new project is posted

Want to add a new provider? Any
[suggestion](https://github.com/soywod/overflood/issues/new) or
[pull-request](https://github.com/soywod/overflood/compare) is welcomed!

## Development

Install:

```bash
git clone https://github.com/soywod/overflood.git
cd overflood
yarn install
```

Then start the web server:

```bash
yarn start
```

The web app is be available at http://localhost:3000.

## Propose a new provider

You can either suggest one in the [issues
section](https://github.com/soywod/overflood/issues/new), or propose a
pull-request.

Any new provider should be placed in `/src/providers`, and should follow this
type:

```typescript
type Provider = {
  name: string
  description: string
  form: ComponentType
  subscribe: (data: Map<string, string>) => void
  unsubscribe: () => void
}
```
