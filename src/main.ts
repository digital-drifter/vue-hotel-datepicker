import '@babel/polyfill'
import Vue, { CreateElement } from 'vue'
import App from '@/App.vue'
import { create } from '@/utils/dates'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const app = new Vue({
  render: (h: CreateElement) => h(App, {
    props: {
      startDate: create(-7, 'days'),
      endDate: create(7, 'days'),
      url: process.env.VUE_APP_API_URL
    }
  })
})

app.$mount('#app')
