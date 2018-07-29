<template>
  <div class="card">
    <div class="card-body">
      <div class="card-header d-flex flex-row justify-content-between w-100" style="background-color: rgba(0,150,136,1); color: white">
        <span>
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>
          Search Again
        </span>
        <span>
          <font-awesome-icon icon="times" @click="onClose"></font-awesome-icon>
          Close
        </span>
      </div>
      <hotel 
        v-for="(item, index) in items" 
        :key="index"
        :name="item.name" 
        :rate="item.rate" 
        :image="item.image" 
        :description="item.description">
      </hotel>
    </div>
  </div>
</template>

<script>
import Hotel from './Hotel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'ResultsList',
  components: {
    Hotel,
    FontAwesomeIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onClose () {
      this.$emit('resultslist:close')
    }
  }
}
</script>
