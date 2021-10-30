<template>
  <router-view></router-view>
</template>

<script>
export default {
  watch: {
    $route(to) {
      document.title = `Tahu - ${to.meta.title}`
      const link = document.querySelector("[rel='icon']")
      link.setAttribute('href', to.meta.icon)
    },
  },
}
</script>
