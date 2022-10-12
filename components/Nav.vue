<template>
  <nav class="nav">
    <input
      v-if="$route.path == '/index'"
      id="menu__btn"
      v-model="navMenuOpen"
      type="checkbox"
      class="menu__btn"
    />
    <nuxt-link to="/index"> Logo </nuxt-link>
    <ul v-if="$route.path == '/index'" class="nav__list">
      <li
        v-scroll-to="'#about-section'"
        class="nav__item"
        @click="navMenuOpen = false"
      >
        About
      </li>
      <li
        v-scroll-to="'#authors-section'"
        class="nav__item"
        @click="navMenuOpen = false"
      >
        Authors
      </li>
      <li
        v-scroll-to="'#articles-section'"
        class="nav__item"
        @click="navMenuOpen = false"
      >
        Articles
      </li>
    </ul>
    <nuxt-link
      v-else
      to="/index?from=topic_newenergy50_story"
      class="nav__return-btn"
    >
      <i class="i-left"></i>
    </nuxt-link>

    <label v-if="$route.path == '/index'" class="menu__icon" for="menu__btn">
      <span class="ham-icon"></span>
    </label>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navMenuOpen: false,
    }
  },
}
</script>
<style lang="scss" scoped>
body {
  .nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    width: 100%;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 23px;
    justify-content: space-between;
    height: 58px;
    @include pad() {
      padding-left: 22px;
      padding-right: 22px;
      height: 48px;
    }
    .menu {
      &__btn {
        display: none;
        &:checked {
          ~ .nav__list {
            padding-bottom: 14px;
            max-height: unset;
            height: auto;
            border-bottom: 2px solid #dddddd;
          }
          ~ .menu__icon .ham-icon {
            background: transparent;
            &::before {
              top: 0;
              transform: rotate(45deg);
            }
            &::after {
              top: 0;
              transform: rotate(-45deg);
            }
          }
        }
      }
      &__icon {
        display: none;
        @include pad() {
          display: block;
          cursor: pointer;
          padding: 6px 0;
        }
        .ham-icon {
          display: block;
          width: 25px;
          height: 2px;
          background: var(--nav-ham);
          position: relative;
          border-radius: 2px;
          &::before,
          &::after {
            background-color: var(--nav-ham);
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            transition: 0.2s;
            border-radius: 2px;
          }
          &::before {
            top: 7px;
          }
          &::after {
            top: -7px;
          }
        }
      }
      &__mask {
        display: none;
        @include pad() {
          top: 74px;
          left: 0;
        }
      }
    }
    &__logo {
      width: 120px;
      height: 26px;
      margin-right: 40px;
      display: block;
      @include pad() {
        margin-right: 0;
        width: 78px;
        height: 19px;
      }
    }
    &__list {
      display: flex;
      @include pad() {
        position: absolute;
        flex-direction: column;
        align-items: center;
        left: 0;
        top: 47px;
        position: absolute;
        width: 100%;
        overflow: hidden;
        max-height: 0;
        background-color: white;
        li + li {
          margin-top: 20px;
          @include pad() {
            margin-top: 0;
          }
        }
      }
    }
    &__item {
      cursor: pointer;
      font-weight: var(--regular);
      padding: 17px 9px;
      transition: background-color 200ms linear;
      &.active,
      &:hover {
        background-color: var(--nav-hover);
        color: white;
      }
      @include pad() {
        width: 100%;
        font-size: 19px;
        padding: 12px 22px;
      }
    }
    &__return-btn {
      font-weight: var(--regular);
      display: flex;
      align-items: center;
      i {
        font-size: 10px;
        &::before {
          margin-right: 0;
          position: relative;
          top: -1px;
        }
        &::after {
          content: '◄ return to index';
          display: inline-block;
          font-size: 16px;
          font-weight: var(--regular);
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
