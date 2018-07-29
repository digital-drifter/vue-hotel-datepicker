<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <transition name="fade">
        <hotel-date-picker 
          :start-date="range.start" 
          :end-date="range.end" 
          @datepicker:searching="onSearchChanged">
        </hotel-date-picker>
      </transition>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import HotelDatePicker from './components/HotelDatePicker.vue'
import SearchOverlay from './components/SearchOverlay.vue'

library.add(faCalendar)
library.add(faSearch)
library.add(faSpinner)
library.add(faTimes)

export default {
  name: "HotelDatePickerWrapper",
  components: {
    HotelDatePicker,
    SearchOverlay,
    FontAwesomeIcon
  },
  data () {
    return {
      searching: false,
      range: {
        start: null,
        end: null
      }
    }
  },
  created() {
    this.range.start = dayjs().subtract(5, 'day')
    this.range.end = dayjs().add(5, 'day')
  },
  methods: {
    onSearchChanged (searching) {
      this.searching = searching
    }
  }
}
</script>

<style>
  * {
    border-radius: 0 !important;
  }
</style>
