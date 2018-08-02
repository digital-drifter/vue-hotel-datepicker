<template>
    <div class="d-flex justify-content-center">
        <transition-group name="fade" mode="out-in">
            <date-picker
                    v-if="!open"
                    key="date-picker"
                    :searching="searching"
                    :start-date="startDate"
                    :end-date="endDate"
                    @search="onSearch">
            </date-picker>
            <slot name="results" v-else>
                <modal @close="onClose" key="results-list" :items="results"></modal>
            </slot>
        </transition-group>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowLeft, faCalendar, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import DatePicker from './DatePicker.vue'
  import Overlay from './search/Overlay.vue'
  import Modal from './search/Modal.vue'
  import { Period } from '../../types'

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
      DatePicker,
      Overlay,
      FontAwesomeIcon,
      Modal
    }
  })
  export default class VueHotelDatepicker extends Vue {
    public name: string = 'VueHotelDatepicker'
    public results: any[] = []

    /**
     * Control search overlay, disabling of button.
     */
    protected searching: boolean = false

    @Prop({type: Request, required: true})
    protected request: Request

    @Prop({type: Date, required: true})
    protected startDate: Date

    @Prop({type: Date, required: true})
    protected endDate: Date

    get open (): boolean {
      return !!this.results.length
    }

    /**
     * Send a fetch request using the provided Request object.
     */
    protected async onSearch (period: Period) {
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

          this.results.splice(0, Array.isArray(data) ? data.length : 0, Array.isArray(data) ? data : [])
        })
    }

    /**
     * Clear the results array, in turn closing the modal.
     */
    protected onClose () {
      this.results.splice(0, this.results.length)
    }
  }
</script>

<style type="text/scss" lang="sass">
    @import "../assets/scss/vue-block-dates.scss"
</style>
