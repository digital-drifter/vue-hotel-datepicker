<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <transition-group name="fade">
        <hotel-date-picker 
          v-if="!results.length"
          key="date-picker"
          :searching="searching"
          :start-date="range.start" 
          :end-date="range.end" 
          @datepicker:search="onSearch">
        </hotel-date-picker>
        <results-list 
          v-else 
          @resultslist:close="onClose"
          key="results-list" 
          :items="results">
        </results-list>
      </transition-group>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faCalendar, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import HotelDatePicker from './components/HotelDatePicker.vue'
import SearchOverlay from './components/SearchOverlay.vue'
import ResultsList from './components/ResultsList.vue'
import http from './http'

library.add(faArrowLeft)
library.add(faCalendar)
library.add(faSearch)
library.add(faSpinner)
library.add(faTimes)

export default {
  name: "HotelDatePickerWrapper",
  components: {
    HotelDatePicker,
    SearchOverlay,
    FontAwesomeIcon,
    ResultsList
  },
  data () {
    return {
      http: null,
      searching: false,
      results: [],
      range: {
        start: null,
        end: null
      }
    }
  },
  created() {
    this.range.start = dayjs().subtract(5, 'day')
    this.range.end = dayjs().add(5, 'day')
    this.http = http.create({
      baseURL: 'http://json-server.localhost:3001/api'
    })
  },
  computed: {
    
  },
  methods: {
    onSearch ({checkin, checkout}) {
      this.searching = !this.searching

      this.http.get('/hotels')
        .then(response => {
          console.log(response)
          this.results = response.data
        })
        .catch(error => {
          console.log(Object.keys(error))
          console.log(error.response)
          console.log(error.config)
          console.log(error.request)
        })
        .then(() => {
          this.searching = !this.searching
        })
    },
    onClose () {
      this.results.splice(0, this.results.length)
    }
  }
}
</script>

<style>
  * {
    border-radius: 0 !important;
  }
</style>
