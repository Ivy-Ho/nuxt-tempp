<template>
  <footer class="footer">
    template made by Ivy Ho &copy; All Rights Reserved.
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="scss">
body {
  .footer {
    font-size: 14px;
    line-height: 1.35;
    font-weight: var(--regular);
    color: white;
    background-color: black;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    @include pad() {
      font-size: 12px;
    }
  }
}
</style>
