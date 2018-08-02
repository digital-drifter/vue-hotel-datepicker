<template>
    <div class="card">
        <overlay :searching="searching"></overlay>
        <div class="card-header d-flex flex-row justify-content-between" :style="theme">
            <div>
                <font-awesome-icon icon="calendar"></font-awesome-icon>
                <span class="pl-2 font-weight-bold">{{ title }}</span>
            </div>
            <div v-show="checkin || checkout" v-tooltip="{ content: '' }">
                <font-awesome-icon icon="times" @click="onClear" style="cursor: pointer"></font-awesome-icon>
            </div>
        </div>
        <div class="card-body p-0">
            <div class="d-flex justify-content-center">
                <vue-datepicker :disabledDates="{ to: startDate, from: endDate }"
                                :highlighted="{ to: highlighted.start, from: highlighted.end }"
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
            <li class="list-group-item text-center search--disabled" :style="searchStyle" @click="onSearch"
                @mouseover="onMouseover" ref="search">
                <font-awesome-icon :icon="searchIcon" :spin="searching"></font-awesome-icon>
                <span class="pl-2" v-text="searchText"></span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import Overlay from './search/Overlay.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import VueDatepicker from 'vuejs-datepicker'
  import VTooltip from 'v-tooltip'
  import dayjs from 'dayjs'
  import { Period } from '../../types'

  @Component({
    components: {
      FontAwesomeIcon,
      Overlay,
      VueDatepicker
    },
    directives: {
      tooltip: VTooltip
    },
    filters: {
      formatDate: (value: any, format: string) => {
        const date = dayjs(value)

        return date.isValid() ? date.format(format) : 'N/A'
      }
    }
  })
  export default class DatePicker extends Vue {
    public name: string = 'DatePicker'

    /**
     * The selected checkin and checkout dates.
     */
    public selected: Period = {
      start: undefined,
      end: undefined
    }

    @Prop({type: Boolean, default: true})
    public bootstrapStyling: boolean

    @Prop({type: Boolean, default: false})
    public searching: boolean

    @Prop({type: Boolean, default: false})
    public clearButton: boolean

    @Prop({type: Boolean, default: true})
    public inline: boolean

    @Prop({type: String, default: 'Select Dates'})
    public title: string

    @Prop({type: String, default: 'MMMM D, YYYY'})
    public format: string

    @Prop({type: Date, required: true})
    public startDate: Date

    @Prop({type: Date, required: true})
    public endDate: Date

    @Prop({
      type: Object, default: () => ({
        color: 'rgba(236,239,241,1)',
        backgroundColor: 'rgba(0,150,136,1)'
      })
    })
    public theme: object

    get cursor () {
      return !this.searching && this.checkin && this.checkout ? 'pointer' : 'not-allowed'
    }

    get searchIcon () {
      return this.searching ? 'spinner' : 'search'
    }

    get searchText () {
      return this.searching ? 'Searching...' : 'Search'
    }

    get searchDisabled () {
      return !(this.checkin && this.checkout)
    }

    get searchStyle () {
      return {
        color: this.searchDisabled ? 'grey' : 'rgba(236,239,241,1)',
        backgroundColor: this.searchDisabled ? 'rgba(238,238,238,1)' : 'rgba(61,90,254,1)'
      }
    }

    get highlighted (): Period {
      return {
        start: this.checkout,
        end: this.checkin
      }
    }

    get checkin () {
      return this.selected.start
    }

    set checkin (value) {
      this.selected.start = value
    }

    get checkout () {
      return this.selected.end
    }

    set checkout (value) {
      this.selected.end = value
    }

    get search (): Element {
      return this.$refs.search as Element
    }

    protected onMouseover (event: any) {
      event.target.style.cursor = this.cursor
    }

    protected onClear () {
      this.checkin = undefined
      this.checkout = undefined
    }

    protected onSelected (value: any) {
      const date = !value ? undefined : value

      switch (true) {
        case (!!this.checkin && !!this.checkout) || (this.checkin && this.checkin >= date):
          this.checkout = undefined
          this.checkin = date
          break
        case !this.checkin:
          this.checkin = date
          break
        default:
          this.checkout = date
      }

      this.$emit('checkin', this.checkin)
      this.$emit('checkout', this.checkout)

      this.toggleSearchDisabled()
    }

    protected onSearch () {
      if (this.searching || this.searchDisabled) {
        return false
      }

      this.$emit('search', {checkin: this.checkin, checkout: this.checkout})
    }

    protected toggleSearchDisabled () {
      if (this.searchDisabled) {
        this.search.classList.add('search--disabled')
      } else {
        this.search.classList.remove('search--disabled')
      }
    }
  }
</script>
