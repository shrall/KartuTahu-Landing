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
}
</script>
