<template>
  <Navbar />
  <div class="bg-light-200 text-dark-400">
    <div
      id="home"
      class="bg-light-200 w-full h-screen grid grid-cols-12 justify-center items-center px-24"
    >
      <div class="col-span-5 2xl:pr-24">
        <div class="text-5xl 2xl:text-6xl font-montserrat font-bold mb-8">
          Yuk main bareng, biar makin tahu
        </div>
        <div class="flex gap-x-4 text-white">
          <div
            class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
          >
            <div class="fab fa-apple text-6xl"></div>
            <div class="font-noto-sans">
              <div>Download on the</div>
              <div class="text-2xl 2xl:text-3xl font-bold">App Store</div>
            </div>
          </div>
          <div
            class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
          >
            <div class="fab fa-google-play text-5xl"></div>
            <div class="font-noto-sans">
              <div>GET IT ON</div>
              <div class="text-2xl 2xl:text-3xl font-bold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
      <AssetsHome class="col-span-7 w-full" />
    </div>
    <div class="bg-light-200 w-full" id="apa-itu-tahu">
      <div class="section-head">
        <div class="text-6xl">Apa itu</div>
        <LogoText class="w-40 mx-3" />
        <div class="text-7xl">?</div>
      </div>
      <AssetsApaItuTahu class="h-96 mx-auto my-4" />
      <div class="w-148 text-2xl font-noto-sans mx-auto text-center mb-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>
      <div class="bg-loginbg bg-cover pt-48">
        <div class="section-head mb-12">
          <div class="text-6xl">Tema Kartu</div>
        </div>
        <div class="grid grid-cols-12 justify-center items-center pl-24">
          <div
            class="col-span-3 flex flex-col items-center gap-y-3 font-noto-sans"
          >
            <div
              class="theme-menu border-tahured-400 hover:bg-tahured-400"
              @click="apaItuActive = 'teman'"
              :class="{ 'bg-tahured-400 text-white': apaItuActive === 'teman' }"
            >
              Teman
            </div>
            <div
              class="theme-menu border-tahupink-400 hover:bg-tahupink-400"
              @click="apaItuActive = 'pasangan'"
              :class="{ 'bg-tahupink-400 text-white': apaItuActive === 'pasangan' }"
            >
              Pasangan
            </div>
            <div
              class="theme-menu border-tahuorange-400 hover:bg-tahuorange-400"
              @click="apaItuActive = 'lucu'"
              :class="{ 'bg-tahuorange-400 text-white': apaItuActive === 'lucu' }"
            >
              Lucu
            </div>
            <div
              class="theme-menu border-tahuyellow-400 hover:bg-tahuyellow-400"
              @click="apaItuActive = 'tantangan'"
              :class="{ 'bg-tahuyellow-400 text-white': apaItuActive === 'tantangan' }"
            >
              Tantangan
            </div>
            <div
              class="theme-menu border-tahugreen-400 hover:bg-tahugreen-400"
              @click="apaItuActive = 'keluarga'"
              :class="{ 'bg-tahugreen-400 text-white': apaItuActive === 'keluarga' }"
            >
              Keluarga
            </div>
            <div
              class="theme-menu border-tahucyan-400 hover:bg-tahucyan-400"
              @click="apaItuActive = 'kolega'"
              :class="{ 'bg-tahucyan-400 text-white': apaItuActive === 'kolega' }"
            >
              Kolega
            </div>
            <div
              class="theme-menu border-tahupurple-400 hover:bg-tahupurple-400"
              @click="apaItuActive = 'diriku'"
              :class="{ 'bg-tahupurple-400 text-white': apaItuActive === 'diriku' }"
            >
              Diriku
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-tahured-400 w-full h-screen" id="cara-bermain"></div>
    <div class="bg-tahured-500 w-full h-screen" id="hubungi-kami"></div>
  </div>
</template>

<script>
import Navbar from '../components/widgets/Navbar.vue'
import LogoText from '../components/svg/LogoText.vue'
import AssetsHome from '../components/svg/AssetsHome.vue'
import AssetsApaItuTahu from '../components/svg/AssetsApaItuTahu.vue'
export default {
  components: {
    Navbar,
    LogoText,
    AssetsHome,
    AssetsApaItuTahu,
  },
  data() {
    return { apaItuActive: 'teman' }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // console.log(window.scrollY);
      // console.log(document.getElementById('apa-itu-tahu').getBoundingClientRect());
      if (window.scrollY >= window.innerHeight * 3) {
        this.changeActiveMenu('#nav-hubungi-kami')
      } else if (window.scrollY >= window.innerHeight * 2) {
        this.changeActiveMenu('#nav-cara-bermain')
      } else if (
        160 >= document.getElementById('apa-itu-tahu').getBoundingClientRect().y
      ) {
        this.changeActiveMenu('#nav-apa-itu-tahu')
      } else {
        this.changeActiveMenu('#nav-home')
      }
    },
    changeActiveMenu(id) {
      document.querySelectorAll('.nav').forEach((element) => {
        element.classList.remove('nav-active')
      })
      document.querySelector(id).classList.add('nav-active')
    },
  },
}
</script>
