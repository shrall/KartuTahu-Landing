<template>
  <nav
    id="navbar"
    class="fixed grid grid-cols-11 justify-center place-items-center items-center gap-x-4 font-noto-sans font-semibold py-4 w-screen bg-light-200 shadow-lg z-50"
  >
    <div></div>
    <div></div>
    <div></div>
    <a id="nav-home" @click="navJump('home')" class="nav nav-active">
      Home
    </a>
    <a id="nav-apa-itu-tahu" @click="navJump('apa-itu-tahu')" class="nav">Apa itu Tahu?</a>
    <Logo v-bind:logoColor="logoColor" class="w-14"></Logo>
    <a id="nav-cara-bermain" @click="navJump('cara-bermain')" class="nav">Cara Bermain</a>
    <a id="nav-hubungi-kami" @click="navJump('hubungi-kami')" class="nav">Hubungi Kami</a>
  </nav>
</template>

<script>
import Logo from '../svg/logo/Logo.vue'
export default {
  props: ['logoColor'],
  components: {
    Logo,
  },
  methods: {
    navJump(id) {
      window.scrollTo(0, 0)
      window.scrollTo(0, document.getElementById(id).getBoundingClientRect().y - 120)
    },
  },
}
</script>
