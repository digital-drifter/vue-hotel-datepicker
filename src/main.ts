import '@babel/polyfill'
import Vue, { CreateElement } from 'vue'
import App from '@/App.vue'
import '@/assets/scss/hotel-datepicker.scss'

Vue.config.productionTip = false

const now = new Date()

const app = new Vue({
  el: '#app',
  render: (h: CreateElement) => h(App, {
    props: {
      startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
      endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
      url: process.env.VUE_APP_API_URL
    }
  })
})
