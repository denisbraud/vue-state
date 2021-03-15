# Vue State
<!--https://en.support.wordpress.com/markdown-quick-reference/-->

## Project setup
```
npm install
npm run serve # Compiles and hot-reloads for development
npm run build # Compiles and minifies for production
npm run lint # Lints and fixes files
npm run test # Run your tests
npm run test:e2e # Run your end-to-end tests
npm run test:unit # Run your unit tests
```

## Pages

### Counter.NoState

### Counter.Store
[VueX](https://next.vuex.vuejs.org/)

### Counter.Overmind
[Overmind](https://overmindjs.org/views/vue#plugin)

[Replacing Vuex with Overmind](https://overmindjs.org/videos-1#replacing-vuex-with-overmind)

## Dev env setup

### Install Basic tools
[VsCode](https://code.visualstudio.com/) : VSCodeUserSetup-x64-1.54.2.exe

[Node Version Manager](https://github.com/coreybutler/nvm-windows)

[NodeJs](https://nodejs.org/en/) : lastest stable
```
nvm install 14.16.0
nvm use 14.16.0
```

### Install Vue CLI
[Vue JS](https://v3.vuejs.org/guide/installation.html#npm)
```
```

### Install Vue CLI
[Vue CLI](https://cli.vuejs.org/) | [Configuration Reference](https://cli.vuejs.org/config/)
```
npm install -g @vue/cli                # https://cli.vuejs.org/guide/installation.html (-g global install required)
npm install -g @vue/cli-service-global # https://cli.vuejs.org/guide/prototyping.html

npm list -g --depth 0
+-- @vue/cli@4.5.11
+-- @vue/cli-service-global@4.5.11

!? npm ERR! peer dep missing: vue@3.0.7, required by @vue/compiler-sfc@3.0.7
```

### Creating a Project
[Create Vue project](https://cli.vuejs.org/guide/creating-a-project.html)

*** It is recommended to commit your project's current state before running vue add, since the command will invoke the plugin's file generator and potentially make changes to your existing files. ***

```
cd ...vue-state
vue create .

> Manually select features
selected features (all except Typescript)
- Babel
- Progressive Web App (PWA) Support
- Router [history mode: no]
- Vuex
- CSS Pre-processor [Sass/SCSS (with node-sass)]
- Linter / Formatter [ESLint with error prevention only] + [Lint on save]
- Unit Testing [Jest]
- E2E Testing [Cypress]
- config [In dedicated config files]
> version of Vue.js : 3.x
```
