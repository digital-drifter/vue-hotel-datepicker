# Vue Block Dates

[![Build Status](https://travis-ci.com/digital-drifter/vue-block-dates.svg?branch=master)](https://travis-ci.com/digital-drifter/vue-block-dates)

Display blocks of date ranges with selectable periods. Hotel checkin/checkout, flight arrival/departure, vacation start/end, etc.

### Built on 

- [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker)
- [Bootstrap 4](https://github.com/twbs/bootstrap) (styles only)

<p align="center">
  <img src="https://github.com/digital-drifter/vue-block-dates/raw/master/docs/screenshot.png">
</p>

# Installation

Via NPM

```bash
npm i @digital-drifter/vue-block-dates
```

Via Yarn

```bash
yarn add @digital-drifter/vue-block-dates
```

# Usage

Import the Bootstrap 4 styles in your `index.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
// or
import 'bootstrap/scss/bootstrap.scss'
```

Global registration:

```js
import Vue from 'vue'
import VueBlockDates from '@digital-drifter/vue-block-dates'

Vue.component('vue-block-dates', VueBlockDates)
```

Local registration:

```js
import VueBlockDates from '@digital-drifter/vue-block-dates'

export default {
  components: {
    VueBlockDates
  },
  data () {
    return {
      startDate: new Date(2018, 6, 10),
      endDate: new Date(2018, 6, 20),
      request: new Request('http://example.com', {
        method: 'get'
      })
    }
  }
  ...
}
```

Add it to the template:

```html
<template>
  <vue-block-dates :start-date="startDate" :end-date="endDate" :request="request"></vue-block-dates>
</template>
```

# Development

This project was created using [Vue CLI 3](https://cli.vuejs.org/)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```
