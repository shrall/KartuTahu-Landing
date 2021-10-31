<template>
  <nav
    id="navbar"
    :class="navbarBool ? 'bg-white' : 'bg-light-200'"
    class="sticky top-0 flex flex-col font-noto-sans font-semibold px-4 py-2 w-screen rounded-b-2xl shadow-lg z-50"
  >
    <div class="flex justify-between place-items-center items-center">
      <Logo v-bind:logoColor="logoColor" class="w-10"></Logo>
      <div
        @click="navbarBool = !navbarBool"
        class="bg-white rounded-2xl shadow-2xl text-2xl p-3"
      >
        <span v-if="!navbarBool"><i class="fa fa-fw fa-bars" /></span>
        <span v-else><i class="fa fa-fw fa-times text-tahured-400" /></span>
      </div>
    </div>
    <div
      v-if="navbarBool"
      class="flex flex-col self-center text-xl text-center gap-y-4 my-8"
    >
      <a id="nav-home" @click="navJump('home')" class="nav nav-active">
        Home
      </a>
      <a id="nav-apa-itu-tahu" @click="navJump('apa-itu-tahu')" class="nav">
        Apa itu Tahu?
      </a>
      <a id="nav-cara-bermain" @click="navJump('cara-bermain')" class="nav">
        Cara Bermain
      </a>
      <a id="nav-hubungi-kami" @click="navJump('hubungi-kami')" class="nav">
        Hubungi Kami
      </a>
    </div>
  </nav>
</template>

<script>
import Logo from '../svg/logo/Logo.vue'
export default {
  props: ['logoColor'],
  components: {
    Logo,
  },
  data() {
    return {
      navbarBool: false,
    }
  },
  methods: {
    navJump(id) {
      window.scrollTo(0, 0)
      if (id != 'hubungi-kami') {
        window.scrollTo(
          0,
          document.getElementById(id).getBoundingClientRect().y - 120,
        )
      } else {
        window.scrollTo(
          0,
          document.getElementById(id).getBoundingClientRect().y,
        )
      }
      this.navbarBool = !this.navbarBool
    },
  },
}
</script>
