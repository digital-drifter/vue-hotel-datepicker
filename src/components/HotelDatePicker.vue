<template>
  <div class="card">
    <search-overlay :searching="searching"></search-overlay>
    <div class="card-header d-flex flex-row justify-content-between" :style="theme">
      <span>
        <font-awesome-icon icon="calendar"></font-awesome-icon>
        <span class="pl-2 font-weight-bold">{{ title }}</span>
      </span>
      <span v-show="checkin || checkout" v-tooltip="{ content: '' }">
      <font-awesome-icon icon="times" @click="onClear" style="cursor: pointer"></font-awesome-icon>
      </span>
    </div>
    <div class="card-body p-0">
      <div class="d-flex justify-content-center">
        <vue-datepicker :disabledDates="disabledDates" 
                    :highlighted="highlighted" 
                    :inline="inline"
                    @selected="onSelected"
                    :clear-button="clearButton" 
                    :bootstrap-styling="bootstrapStyling">
        </vue-datepicker>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex flex-row justify-content-between" :style="theme">
        <span class="font-weight-light">Check In</span>
        <span class="font-weight-bold">{{ checkin | formatDate(format) }}</span>
      </li>
      <li class="list-group-item d-flex flex-row justify-content-between" :style="theme">
        <span class="font-weight-light">Check Out</span>
        <span class="font-weight-bold">{{ checkout | formatDate(format) }}</span>
      </li>
      <li class="list-group-item text-center search--disabled" :style="searchStyle" @click="onSearch" @mouseover="onMouseover" ref="search">
        <font-awesome-icon :icon="searchIcon" :spin="searching"></font-awesome-icon>
        <span class="pl-2" v-text="searchText"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchOverlay from './SearchOverlay.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueDatepicker from 'vuejs-datepicker'
import VTooltip from 'v-tooltip'
import dayjs from 'dayjs'

export default {
  name: "HotelDatePicker",
  components: {
    FontAwesomeIcon,
    SearchOverlay,
    VueDatepicker
  },
  directives: {
    tooltip: VTooltip
  },
  props: {
    bootstrapStyling: {
      type: Boolean,
      default: true
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Object,
      default: () => ({
        color: 'rgba(236,239,241,1)',
        backgroundColor: 'rgba(0,150,136,1)'
      })
    },
    title: {
      type: String,
      default: 'Select Dates'
    },
    format: {
      type: String,
      default: 'MMMM D, YYYY'
    },
    startDate: {
      type: [Date,Object,String],
      default: null
    },
    endDate: {
      type: [Date,Object,String],
      default: null
    },
    searching: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: {
        start: null,
        end: null
      }
    }
  },
  filters: {
    formatDate: (value, format) => {
      const date = dayjs(value)
    
      return date.isValid() ? date.format(format) : 'N/A'
    }
  },
  computed: {
    cursor () {
      return !this.searching && this.checkin && this.checkout ? 'pointer' : 'not-allowed'
    },
    searchIcon () {
      return this.searching ? 'spinner' : 'search'
    },
    searchText () {
      return this.searching ? 'Searching...' : 'Search'
    },
    searchDisabled () {
      return !(this.checkin && this.checkout)
    },
    searchStyle () {
      return {
        color: this.searchDisabled ? 'grey' : 'rgba(236,239,241,1)',
        backgroundColor: this.searchDisabled ? 'rgba(238,238,238,1)' : 'rgba(61,90,254,1)'
      }
    },
    disabledDates () {
      return {
        to: this.startDate.toDate(), 
        from: this.endDate.toDate()
      }
    },
    highlighted () {
      return {
        to: this.checkout,
        from: this.checkin
      }
    },
    checkin: {
      get () {
        return this.selected.start
      },
      set (value) {
        this.selected.start = value
      }
    },
    checkout: {
      get () {
        return this.selected.end
      },
      set (value) {
        this.selected.end = value
      }
    },
  },
  methods: {
    onMouseover (event) {
      event.target.style.cursor = this.cursor
    },
    onClear () {
      this.checkin = null
      this.checkout = null
    },
    onSelected (value) {
      const date = !value ? null : value

      switch (true) {
        case this.checkin && this.checkout:
        case this.checkin && (this.checkin >= date):
          this.checkout = null
          this.checkin = date
          break
        case !this.checkin:
          this.checkin = date
          break
        default:
          this.checkout = date
      }

      this.$emit('datepicker:checkin', this.checkin)
      this.$emit('datepicker:checkout', this.checkout)

      this.toggleSearchDisabled()
    },
    onSearch () {
      if (this.searching || this.searchDisabled) {
        return false
      }

      this.$emit('datepicker:search', { checkin: this.checkin, checkout: this.checkout })
    },
    toggleSearchDisabled () {
      if (this.searchDisabled) {
        this.$refs.search.classList.add('search--disabled')  
      } else {
        this.$refs.search.classList.remove('search--disabled')
      }
    }
  }
}
</script>
