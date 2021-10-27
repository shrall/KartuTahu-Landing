<template>
  <nav class="fixed grid grid-cols-11 justify-center place-items-center items-center gap-x-4 font-noto-sans font-semibold py-4 w-screen">
    <div></div>
    <div></div>
    <div></div>
    <a href="#home" class="nav-active">Home</a>
    <a href="#permainan">Permainan</a>
    <LogoRed class="w-14"></LogoRed>
    <a href="#cara-bermain">Cara Bermain</a>
    <a href="#hubungi-kami">Hubungi Kami</a>
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
