<template>
  <nav id="navbar" class="fixed grid grid-cols-11 justify-center place-items-center items-center gap-x-4 font-noto-sans font-semibold py-4 w-screen bg-light-200 z-50">
    <div></div>
    <div></div>
    <div></div>
    <a id="nav-home" href="#home" class="nav nav-active">Home</a>
    <a id="nav-apa-itu-tahu" href="#apa-itu-tahu" class="nav">Apa itu Tahu?</a>
    <Logo v-bind:logoColor="logoColor" class="w-14"></Logo>
    <a id="nav-cara-bermain" href="#cara-bermain" class="nav">Cara Bermain</a>
    <a id="nav-hubungi-kami" href="#hubungi-kami" class="nav">Hubungi Kami</a>
  </nav>
</template>

<script>
import Logo from '../svg/logo/Logo.vue'
export default {
  props: ['logoColor'],
  components: {
    Logo,
  },
}
</script>
