<template>
  <div :style="{ width: barWidth }" class="progress-bar"></div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      barWidth: '0%',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.barHandler, true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.barHandler)
  },
  methods: {
    barHandler() {
      const w = Math.ceil(
        (Math.round(window.pageYOffset) /
          (document.body.scrollHeight - window.innerHeight)) *
          100
      )
      this.barWidth = w + '%'
    },
  },
}
</script>

<style scoped lang="scss">
.progress-bar {
  width: 0;
  height: 8px;
  background-color: black;
  opacity: 0.35;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: fixed;
  top: 0;
  z-index: 3;
  @include pad() {
    height: 4px;
  }
}
</style>
