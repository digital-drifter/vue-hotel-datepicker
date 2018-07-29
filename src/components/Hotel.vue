<template>
    <div class="card">
        <img class="card-img-top" :src="image" :alt="imageAlt">
        <div class="card-body">
            <h5 class="card-title" v-text="name"></h5>
            <div class="card-text" v-text="description"></div>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class Hotel extends Vue {
    hotels: object[] = [
      {
        name: 'Rosen Centre Hotel',
        image: 'https://www.rosencentre.com/wp-content/themes/rosencentre/images/headerImage-rosenCentreHotel_2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rate: '399.99'
      },
      {
        name: 'Warwick Hotel',
        image: 'https://warwickhotels.com/imagegen.ashx?align=center&crop=resize&image=/media/6170092/bahamas-warwick-wpib.jpg&width=1400&height=597&altImage=/images/defaultwarwick.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rate: '249.99'
      },
      {
        name: 'Hotel Barcelo Costa Cancun',
        image: 'https://www.barcelo.com/en-us/images/265-swimming-pool-22-hotel-barcelo-costa-cancun_tcm21-126728.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rate: '319.99'
      }
    ]

    @Prop({required: true})
    name: string

    @Prop({required: false, default: null})
    description: string

    @Prop({required: true})
    rate: number

    @Prop({required: false, default: null})
    image: string

    @Prop({required: false, default: null})
    imageAlt: string

    @Prop({required: false, default: null})
    website: string

    @Prop({required: false, default: null})
    cancellationPolicy: string

    get hotel () {
      return this.hotels[Math.floor(Math.random() * this.hotels.length)]
    }

  }
</script>
