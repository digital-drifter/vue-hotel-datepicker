<template>
    <div class="d-flex justify-content-center">
        <transition-group name="fade" mode="out-in">
            <hotel-date-picker
                    v-if="!results.length"
                    key="date-picker"
                    :searching="searching"
                    :start-date="range.start"
                    :end-date="range.end"
                    @search="onSearch">
            </hotel-date-picker>
            <slot name="results" v-else>
                <results-modal
                        @close="onClose"
                        key="results-list"
                        :items="results">
                </results-modal>
            </slot>
        </transition-group>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import dayjs, { Dayjs } from 'dayjs'
  import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowLeft, faCalendar, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import HotelDatePicker from '@/components/HotelDatePicker.vue'
  import SearchOverlay from '@/components/SearchOverlay.vue'
  import ResultsModal from '@/components/ResultsModal.vue'

  const icons: { [key: string]: IconDefinition } = {
    ArrowLeft: faArrowLeft,
    Calendar: faCalendar,
    Search: faSearch,
    Spinner: faSpinner,
    Times: faTimes
  }

  library.add(icons.ArrowLeft)
  library.add(icons.Calendar)
  library.add(icons.Search)
  library.add(icons.Spinner)
  library.add(icons.Times)

  @Component({
    components: {
      HotelDatePicker,
      SearchOverlay,
      FontAwesomeIcon,
      ResultsModal
    }
  })
  export default class VueHotelDatePicker extends Vue {
    public name: string = 'VueHotelDatePicker'
    public results: any[] = []
    protected searching: boolean = false

    @Prop({type: Request, required: true})
    request: Request

    @Prop({type: Date, required: true})
    startDate: Date

    @Prop({type: Date, required: true})
    endDate: Date

    get range (): { [key: string]: Dayjs } {
      return {
        start: dayjs(this.startDate),
        end: dayjs(this.endDate)
      }
    }

    protected async onSearch (dates: { [key: string]: Date }) {
      this.searching = !this.searching

      await fetch(this.request)
        .then((response: Response) => {
          return response.json()
        })
        .catch((error: any) => {
          console.log(Object.keys(error))
          console.log(error.response)
          console.log(error.config)
          console.log(error.request)
          return error
        })
        .then((data: any) => {
          this.searching = !this.searching

          if (Array.isArray(data)) {
            this.results = data
          }
        })
    }

    protected onClose () {
      this.results.splice(0, this.results.length)
    }
  }
</script>

<style>
    * {
        border-radius: 0 !important;
    }
</style>
