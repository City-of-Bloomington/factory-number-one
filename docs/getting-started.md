## Overview

There’re a few ways to use the City of Bloomington's Design System with your applications:

- The recommended way is to keep the City of Bloomington's Design System separate from your applications and use the system library via NPM (as a private dependency).

- If you have _only_ one application, you can also have everything inside the same project, since the docs and app logic are separated. This isn’t the recommended way though as it doesn’t scale as easily.

- For system prototyping and getting started I’m still recommending the above approach as it’s the fastest way to get started and doesn’t require much/any configuration. Once the system has matured enough, you can move onto using it as NPM dependency.

- Organizations that have more than just Vue.js based applications can benefit from the City of Bloomington's Design System as well. Tokens which store visual design attributes are universal and can be used on any platform.

## Getting Started

Get started by cloning the repo and installing dependencies:

```bash
git clone https://github.com/City-of-Bloomington/factory-number-one.git
cd factory-number-one
git checkout vue
npm install
```

Make sure that you also have the latest [Node.js](https://nodejs.org/en/) _(at least 8.2.1)_ installed.

After installing dependencies, you can start up and serve the Vue App at [http://localhost:8080](http://localhost:8080), by running the below command. This will also start up and serve the living documentation at [http://localhost:6060](http://localhost:6060). These same instructions should work on both macOS and Windows.

```bash
npm start
```

## Using the City of Bloomington's Design System in an existing project

The recommended way is to keep the City of Bloomington's Design System separate from your existing applications and use the design system library as a private NPM dependency. What this basically means, is that your system’s base tokens, elements and patterns live in the system project and are only imported into your existing applications.

The benefit of this is that all your applications will have one centralized source of truth which is easier to scale and maintain. See instructions below on how to use the City of Bloomington's Design System through NPM.

## Using Design System as an NPM Module

There are a few things that you need to do to accomplish this. While the package.json has been prepared for this kind of usage, you will have to rename the project before running the build script. Find the below line from `package.json` to name your design system:

```json
"name": "cob-design-system",
```

After you’ve renamed the project, you should be able to build your Design System for production in a way that allows the system to be published and used as an NPM module by running the following command:

```bash
npm run build:system
```

This command will first re-create your tokens in json and scss formats and then build the design system library. Once done, you should see a list of assets created and their file sizes. With the default configuration this creates `system.js`, `system.css` and `system.utils.scss` under `dist/system`.

Once finished, you should be able to test locally that everything works by installing the system to another Vue project (you’ll need to change the path to match your own file system):

```bash
npm install --save git+https://github.com/City-of-Bloomington/factory-number-one.git#vue
```

Once the design system module is installed successfully, you can import the system like this for example in your `main.js` file _(remember to replace “cob-design-system” with whatever name you used in your package.json):_

```js
import DesignSystem from "cob-design-system"
import "cob-design-system/dist/system/system.css"

Vue.use(DesignSystem)
```

All your components, patterns, and templates should now be automatically imported and available for usage the same way as they work inside the Design System.

To see a simplified demo project that does all this, [see a repository I’ve created](https://github.com/viljamis/cob-design-system-example).

For more advanced needs, you can configure the way Webpack builds the library by editing [build-system.js](https://github.com/viljamis/cob-design-system/blob/master/build/build-system.js), [webpack.system.conf.js](https://github.com/viljamis/cob-design-system/blob/master/build/webpack.system.conf.js) and system config in [config/index.js](https://github.com/viljamis/cob-design-system/blob/master/config/index.js).

## Build Design System’s playground for production

Build Vue.js app (playground) for production with minification:

```bash
npm run build:app
```

Build Vue.js app (playground) for production and view the bundle analyzer report:

```bash
npm run build:app --report
```

## Build Design System’s docs for production

Build docs for production:

```bash
npm run build:docs
```

## Running tests

Lint the code with ESLint:

```bash
npm run lint
```

Run unit tests with Jest:

```bash
npm run test
```

## All available build commands

- `npm run build:system` builds the design system for NPM
- `npm run build:system --report` builds the design system for NPM and gives you bundle analyzer report.
- `npm run build:docs` builds the design system docs
- `npm run build:app` builds the Vue app
- `npm run build:app --report` builds the Vue app and gives you bundle analyzer report.

## About Webpack

For more details on how Webpack works, check out the [Webpack guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
