<template>
  <router-view></router-view>
</template>

<script>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
export default {
  setup() {
    useHead({
      script: [
        {
          children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js%27);fbq('init', '1026971191196625');fbq('track', 'PageView');`,
        },
      ],
      meta: [
        {
          name: `description`,
          content: computed(
            () =>
              'Kartu Tahu adalah sebuah permainan kartu yang berisikan pertanyaan-pertanyaan yang dapat dimainkan bersama teman-temanmu dengan berbagai pilihan tema menarik yang dapat kamu pilih dan mainkan dimana pun dan kapan pun.',
          ),
        },
        {
          name: `facebook-domain-verification`,
          content: computed(
            () =>
              'iexrthvngmf1xij20ysqr4bs5mfi5b',
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
          content:
            'Kartu Tahu adalah sebuah permainan kartu yang berisikan pertanyaan-pertanyaan yang dapat dimainkan bersama teman-temanmu dengan berbagai pilihan tema menarik yang dapat kamu pilih dan mainkan dimana pun dan kapan pun.',
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
