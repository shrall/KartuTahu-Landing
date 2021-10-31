<template>
  <router-view></router-view>
</template>

<script>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
export default {
  setup() {
    useHead({
      meta: [
        {
          name: `description`,
          content: computed(
            () =>
              'Kartu Tahu adalah sebuah permainan kartu yang berisikan pertanyaan-pertanyaan yang dapat dimainkan bersama teman-temanmu dengan berbagai pilihan tema menarik yang dapat kamu pilih dan mainkan dimana pun dan kapan pun.',
          ),
        },
        {
          property: 'og:type',
          content: 'Website',
        },
        {
          property: 'og:title',
          content: 'Tahu - Permainan Kartu',
        },
        {
          property: 'og:description',
          content: 'Kartu Tahu adalah sebuah permainan kartu yang berisikan pertanyaan-pertanyaan yang dapat dimainkan bersama teman-temanmu dengan berbagai pilihan tema menarik yang dapat kamu pilih dan mainkan dimana pun dan kapan pun.',
        },
        {
          property: 'og:site_name',
          content: 'Tahu',
        },
        //! ini nanti kasi banner
        // {
        //   property: 'og:image',
        //   content: 'Tahu',
        // },
      ],
    })
  },
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
