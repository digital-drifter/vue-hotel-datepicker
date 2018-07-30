<template>
    <div id="app">
        <vue-hotel-date-picker
                :start-date="startDate"
                :end-date="endDate"
                :request="request">
        </vue-hotel-date-picker>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import VueHotelDatePicker from '@/components/VueHotelDatePicker.vue'

  @Component({
    components: {
      VueHotelDatePicker
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
