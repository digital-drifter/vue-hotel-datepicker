# Vue Hotel Datepicker

Datepicker for selecting check in and check out dates.

Built on [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker)

<p align="center">
  <img src="https://github.com/digital-drifter/vue-hotel-datepicker/raw/master/docs/screenshot.png">
</p>

# Installation

```bash
npm i @digital-drifter/vue-hotel-datepicker
```

```bash
yarn add @digital-drifter/vue-hotel-datepicker
```

The component relies on Bootstrap 4.

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
import VueHotelDatepicker from '@digital-drifter/vue-hotel-datepicker.vue'

Vue.component('vue-hotel-datepicker', VueHotelDatepicker)
```

Local registration:

```js
import VueHotelDatepicker from '@digital-drifter/vue-hotel-datepicker.vue'

export default {
  components: {
    VueHotelDatepicker
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
  <vue-hotel-datepicker :start-date="startDate" :end-date="endDate" :request="request"></vue-hotel-datepicker>
</template>
```


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
