<template>
  <nav id="navbar" class="fixed grid grid-cols-11 justify-center place-items-center items-center gap-x-4 font-noto-sans font-semibold py-4 w-screen bg-light-200">
    <div></div>
    <div></div>
    <div></div>
    <a id="nav-home" href="#home" class="nav nav-active">Home</a>
    <a id="nav-apa-itu-tahu" href="#apa-itu-tahu" class="nav">Apa itu Tahu?</a>
    <LogoRed class="w-14"></LogoRed>
    <a id="nav-cara-bermain" href="#cara-bermain" class="nav">Cara Bermain</a>
    <a id="nav-hubungi-kami" href="#hubungi-kami" class="nav">Hubungi Kami</a>
  </nav>
</template>

<script>
import LogoRed from '../svg/LogoRed.vue'
export default {
  components: {
    LogoRed,
  },
}
</script>
