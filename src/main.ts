import Vue from 'vue'
import HotelDatePickerWrapper from '@/HotelDatePickerWrapper.vue'
import '@/assets/hotel-datepicker.scss'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  components: { HotelDatePickerWrapper },
  template: '<HotelDatePickerWrapper/>'
})
