# nuxt3-template

# Development with technology `Nuxt 3`

This is boilerplate, based [vue3](https://vuejs.org/) with framework [Nuxt 3](https://nuxt.com/docs/getting-started/introduction).

- CSS preprocessor - [Stylus](https://stylus-lang.com)
- Storage - [Pinia](https://pinia.vuejs.org)
- Collection of Vue Composition Utilities - [VueUse](https://vueuse.org)
- JavaScript utility library - [Lodash](https://lodash.com/)
- Dates - [DayJS](https://day.js.org)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```
---

## Production

Build the application for production:

```bash
yarn build
```

Start the application for production:

```bash
yarn start
```

---

Locally preview production build:

```bash
yarn preview
```

Generate static files:

```bash
yarn generate
```

---

## Environment

> Environment variables are stored in the directory ./config/.env.{env}

> To define the deployment environment, you need to initialize the variable `APP_ENV` = `dev` | `staging` | `prod` in .env file on root directory

```dotenv
APP_ENV=dev
```
