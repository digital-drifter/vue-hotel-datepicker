<template>
    <div class="card" style="border: none">
        <img class="card-img-top" :src="image" :alt="imageAlt">
        <div class="card-body">
            <h5 class="card-title" v-text="name"></h5>
            <div class="card-text" v-text="description"></div>
        </div>
        <div class="card-footer d-flex justify-content-between w-100">
            <span>{{ rate | nightly }}</span>
            <span>Book Now</span>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    filters: {
      nightly (value: number) {
        return `$${value} / night`
      }
    }
  })
  export default class Result extends Vue {
    @Prop({required: true})
    public name: string

    @Prop({required: false, default: null})
    public description: string

    @Prop({required: true})
    public rate: number

    @Prop({required: false, default: null})
    public image: string

    @Prop({required: false, default: null})
    public imageAlt: string

    @Prop({required: false, default: null})
    public website: string

    @Prop({required: false, default: null})
    public cancellationPolicy: string

    // get hotel () {
    //   return this.hotels[Math.floor(Math.random() * this.hotels.length)]
    // }
  }
</script>
