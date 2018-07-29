<template>
  <div class="card">
    <div class="card-header" :style="theme"><i class="fa fa-calendar pr-2"></i>Select Dates</div>
    <div class="card-body p-0">
      <div class="d-flex justify-content-center">
        <datepicker :disabledDates="disabledDates" 
                    :highlighted="highlighted" 
                    :inline="inline"
                    @selected="onSelected"
                    :clear-button="clearButton" 
                    :bootstrap-styling="bootstrapStyling">
        </datepicker>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex flex-row justify-content-between" :style="theme">
        <span class="font-weight-light">Check In</span>
        <span >{{ checkin | formatDate }}</span>
      </li>
      <li class="list-group-item d-flex flex-row justify-content-between" :style="theme">
        <span class="font-weight-light">Check Out</span>
        <span>{{ checkout | formatDate }}</span>
      </li>
      <li class="list-group-item text-center" :style="searchStyle" @click="onSearch" @mouseover="onMouseover" :disabled="searchDisabled">
        <i class="fa fa-search pr-2"></i>Search
      </li>
    </ul>
  </div>
</template>

<script>
import VueDatepicker from 'vuejs-datepicker'

export default {
  name: "HotelDatePicker",
  components: {
    'datepicker': VueDatepicker
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
    }
  },
  data () {
    return {
      searching: false,
      event: {
        start: null,
        end: null
      },
      selected: {
        start: null,
        end: null
      }
    }
  },
  created () {
    this.event.start = new Date(2018, 6, 10)
    this.event.end = new Date(2018, 6, 20)
  },
  filters: {
    formatDate (value) {
      return (value && value.toLocaleDateString()) || 'N/A'
    }
  },
  computed: {
    cursor () {
      return this.checkin && this.checkout ? 'pointer' : 'not-allowed'
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
        to:this.event.start, 
        from: this.event.end
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
    onSelected (value) {
      const date = !value ? null : new Date(value)

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
      this.toggleSearching()

      setTimeout(() => {
        this.toggleSearching()
      }, 5000)
    },
    toggleSearching () {
      this.searching = !this.searching
      this.$emit('searching', this.searching)
    }
  }
};
</script>
