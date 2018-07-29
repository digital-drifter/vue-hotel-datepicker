<template>
    <div class="card">
        <div class="card-body">
            <div class="card-header d-flex flex-row justify-content-between w-100"
                 style="background-color: rgba(0,150,136,1); color: white">
                <div>
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>
                    Search Again
                </div>
                <div>
                    <font-awesome-icon icon="times" @click="onClose"></font-awesome-icon>
                    Close
                </div>
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

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import Hotel from '@/components/Hotel.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  @Component({
    components: {
      Hotel,
      FontAwesomeIcon
    }
  })
  export default class ResultsList extends Vue {
    public name: string = 'ResultsList'

    @Prop({type: Array, required: true})
    public items: any[]

    protected onClose () {
      this.$emit('resultslist:close')
    }
  }
</script>
