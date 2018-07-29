<template>
  <div :style="style">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchOverlay',
  props: {
    searching: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      return {
        position: 'absolute',
        display: this.searching ? 'block' : 'none',
        backgroundColor: 'rgba(0,0,0,0.25)',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 10
      }
    }
  }
}
</script>
