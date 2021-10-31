<template>
  <router-view></router-view>
</template>

<script>
export default {
  watch: {
    $route(to) {
      document.title = `Tahu - ${to.meta.title}`
    },
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
  },
  created() {
    if (this.isMobile()) {
      this.$router.push('/mobile')
    } else {
      this.$router.push('/')
    }
  },
}
</script>
