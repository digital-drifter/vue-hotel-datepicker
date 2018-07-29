<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header d-flex flex-row justify-content-between w-100"
                         style="background-color: rgba(0,150,136,1); color: white">
                        <div>Found {{ items.length }} results</div>
                        <div @click="onClose" @mouseover="onMouseover">
                            <font-awesome-icon icon="times"></font-awesome-icon>
                            Close
                        </div>
                    </div>
                    <div class="modal-body">
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
            </div>
        </div>
    </transition>
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
  export default class ResultsModal extends Vue {
    public name: string = 'ResultsModal'

    @Prop({type: Array, required: true})
    public items: any[]

    protected onMouseover (event: any) {
      event.target.style.cursor = 'pointer'
    }

    protected onSearchAgain () {
      this.$emit('search')
    }

    protected onClose () {
      this.$emit('close')
    }
  }
</script>
