<template>
  <div class="card">
    <search-overlay :searching="searching"></search-overlay>
    <div class="card-header d-flex flex-row justify-content-between" :style="theme">
      <span>
        <font-awesome-icon icon="calendar"></font-awesome-icon>
        <span class="pl-2">{{ title }}</span>
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
        <span >{{ checkin | formatDate(format) }}</span>
      </li>
      <li class="list-group-item d-flex flex-row justify-content-between" :style="theme">
        <span class="font-weight-light">Check Out</span>
        <span>{{ checkout | formatDate(format) }}</span>
      </li>
      <li class="list-group-item text-center" :style="searchStyle" @click="onSearch" @mouseover="onMouseover" :disabled="searchDisabled">
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
        color: 'white',
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
    }
  },
  data () {
    return {
      searching: false,
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
        color: this.searchDisabled ? 'grey' : 'black'
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

      if (this.checkin && this.checkout) {
        this.checkout = null
        this.checkin = date
      } else if (this.checkin && (this.checkin >= date)) {
        this.checkout = null
        this.checkin = date
      } else if (!this.checkin) {
        this.checkin = date
      } else {
        this.checkout = date
      }

      this.$emit('datepicker:checkin', this.checkin)
      this.$emit('datepicker:checkout', this.checkout)
    },
    onSearch () {
      if (this.searching || this.searchDisabled) {
        return false
      }

      this.toggleSearching()

      setTimeout(() => {
        this.toggleSearching()
      }, 5000)
    },
    toggleSearching () {
      this.searching = !this.searching
      this.$emit('datepicker:searching', this.searching)
    }
  }
};
</script>
