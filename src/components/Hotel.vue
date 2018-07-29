<template>
  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  </div>
</template>

<script>
export default {
  name: "Hotel",
  data () {
    return {
      hotels: [
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
    }
  },
  computed: {
    hotel () {
      return this.hotels[Math.floor(Math.random()*this.hotels.length)]
    }
  }
};
</script>
