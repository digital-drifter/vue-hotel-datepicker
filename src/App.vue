<template>
  <div id="app">
    <div class="container d-flex justify-content-center">
      <search-indicator></search-indicator>
      <transition name="fade">
        <hotel-date-picker @searching="searching"></hotel-date-picker>
      </transition>
    </div>
  </div>
</template>

<script>
import HotelDatePicker from './components/HotelDatePicker.vue'
import SearchIndicator from './components/SearchIndicator.vue'

export default {
  name: "App",
  components: {
    HotelDatePicker,
    SearchIndicator
  },
  method: {
    searching () {

    }
  }
}
</script>
