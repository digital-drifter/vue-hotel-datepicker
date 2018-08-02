<template>
    <div id="app">
        <vue-block-dates
                :start-date="startDate"
                :end-date="endDate"
                :request="request">
        </vue-block-dates>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import VueHotelDatepicker from '@/components/VueHotelDatepicker.vue'

  @Component({
    components: {
      VueHotelDatepicker
    }
  })
  export default class App extends Vue {
    public name: string = 'App'

    @Prop({type: Date, required: true})
    protected startDate: Date

    @Prop({type: Date, required: true})
    protected endDate: Date

    @Prop({type: String, required: true})
    protected url: string

    get request (): Request {
      return new Request(this.url, {
        method: 'get'
      })
    }
  }
</script>
