<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header d-flex flex-row justify-content-between w-100"
                         style="background-color: rgba(0,150,136,1); color: white">
                        <div @click="onClose" @mouseover="onMouseover">
                            <font-awesome-icon icon="arrow-left"></font-awesome-icon>
                            Back
                        </div>
                        <div>{{ items | results }}</div>
                    </div>
                    <div class="modal-body">
                        <result v-for="(item, index) in items"
                               :key="index"
                               :name="item.name"
                               :rate="item.rate"
                               :image="item.image"
                               :description="item.description">
                        </result>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import Result from './Result.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  @Component({
    components: {
      Result,
      FontAwesomeIcon
    },
    filters: {
      results (items: any[]) {
        const count: number = items.length
        return count > 1 ? `Found ${count} results` : `Found ${count} result`
      }
    }
  })
  export default class Modal extends Vue {
    public name: string = 'Modal'

    @Prop({type: Array, required: true})
    public items: any[]

    protected onMouseover (event: any) {
      event.target.style.cursor = 'pointer'
    }

    protected onClose () {
      this.$emit('close')
    }
  }
</script>
