<template>
  <client-only>
    <transition>
      <div
        :class="{ show: isVisible }"
        class="scrollup-button"
        @click="scrollToTop"
      >
        ▲
      </div>
    </transition>
  </client-only>
</template>
<script>
import { debounce } from 'vue-debounce'
export default {
  name: 'TheGotop',
  data() {
    return {
      scrollTop: null,
      isVisible: false,
      visibleDistance: 200,
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.scrollListener, 100), true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      this.scrollTop = window.pageYOffset ? window.pageYOffset : 0
      this.isVisible = this.scrollTop > this.visibleDistance
    },
    scrollToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 100) // 最後數字控制向上的速度
      }, 10)
    },
  },
}
</script>
<style scoped lang="scss">
.scrollup-button {
  position: fixed;
  cursor: pointer;
  background-color: var(--goTop-bg);
  z-index: 1;
  font-size: 20px;
  color: white;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  right: 40px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, -100%, 0);
  transition: all 0.2s linear;
  &:hover {
    background-color: var(--goTop-hover-bg);
    @include pad() {
      background-color: var(--goTop-bg);
    }
  }
  i {
    display: flex;
  }
  &.show {
    transform: translateZ(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
