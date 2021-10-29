<template>
  <Navbar v-bind:logoColor="themeColor" />
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
    <div class="bg-light-200 w-full h-auto" id="apa-itu-tahu">
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
      <div class="w-screen"></div>
      <div class="bg-white h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f6f6f6"
            fill-opacity="1"
            d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,197.3C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div class="section-head mb-12">
          <div class="text-6xl">Tema Kartu</div>
        </div>
        <div class="grid grid-cols-12 justify-center items-center pl-24 mb-12">
          <div
            class="col-span-3 flex flex-col items-center gap-y-3 font-noto-sans"
          >
            <div
              class="theme-menu border-tahured-400 hover:bg-tahured-400"
              @click="changeActiveTheme('teman')"
              :class="{ 'bg-tahured-400 text-white': activeTheme === 'teman' }"
            >
              Teman
            </div>
            <div
              class="theme-menu border-tahupink-400 hover:bg-tahupink-400"
              @click="changeActiveTheme('pasangan')"
              :class="{
                'bg-tahupink-400 text-white': activeTheme === 'pasangan',
              }"
            >
              Pasangan
            </div>
            <div
              class="theme-menu border-tahuorange-400 hover:bg-tahuorange-400"
              @click="changeActiveTheme('lucu')"
              :class="{
                'bg-tahuorange-400 text-white': activeTheme === 'lucu',
              }"
            >
              Lucu
            </div>
            <div
              class="theme-menu border-tahuyellow-400 hover:bg-tahuyellow-400"
              @click="changeActiveTheme('tantangan')"
              :class="{
                'bg-tahuyellow-400 text-white': activeTheme === 'tantangan',
              }"
            >
              Tantangan
            </div>
            <div
              class="theme-menu border-tahugreen-400 hover:bg-tahugreen-400"
              @click="changeActiveTheme('keluarga')"
              :class="{
                'bg-tahugreen-400 text-white': activeTheme === 'keluarga',
              }"
            >
              Keluarga
            </div>
            <div
              class="theme-menu border-tahucyan-400 hover:bg-tahucyan-400"
              @click="changeActiveTheme('kolega')"
              :class="{
                'bg-tahucyan-400 text-white': activeTheme === 'kolega',
              }"
            >
              Kolega
            </div>
            <div
              class="theme-menu border-tahupurple-400 hover:bg-tahupurple-400"
              @click="changeActiveTheme('diriku')"
              :class="{
                'bg-tahupurple-400 text-white': activeTheme === 'diriku',
              }"
            >
              Diriku
            </div>
          </div>
          <div class="col-span-9 pr-24">
            <Flicking
              v-if="activeTheme === 'teman'"
              ref="flicking_teman"
              @select="
                (e) => {
                  cardClick(e)
                }
              "
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-taktahu"></div>
              <div class="theme-card bg-card-tahu"></div>
              <div class="theme-card bg-card-sobattahu"></div>
            </Flicking>
            <Flicking
              v-if="activeTheme === 'pasangan'"
              ref="flicking_pasangan"
              @select="
                (e) => {
                  cardClick(e)
                }
              "
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-sukadia"></div>
              <div class="theme-card bg-card-pacardia"></div>
              <div class="theme-card bg-card-yakindia"></div>
            </Flicking>
            <Flicking
              v-if="activeTheme === 'lucu'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-lucu"></div>
            </Flicking>
            <Flicking
              v-if="activeTheme === 'tantangan'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-tantangan"></div>
            </Flicking>
            <Flicking
              v-if="activeTheme === 'keluarga'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-keluarga"></div>
            </Flicking>
            <Flicking
              v-if="activeTheme === 'kolega'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-kolega"></div>
            </Flicking>
            <Flicking
              v-if="activeTheme === 'diriku'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-diriku"></div>
            </Flicking>
          </div>
        </div>
        <div class="font-noto-sans text-2xl text-center px-64">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f6f6f6"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,154.7C480,149,600,203,720,192C840,181,960,107,1080,80C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="bg-light-200 w-full h-auto" id="cara-bermain">
      <div class="my-12 grid grid-cols-12 justify-between px-48">
        <div class="col-span-4">
          <div class="section-head">Cara Bermain</div>
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-6">
          <div class="font-noto-sans text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>
      </div>
      <div class="bg-light-200 h-full">
        <Flicking></Flicking>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f6f6f6"
            fill-opacity="1"
            d="M0,288L40,288C80,288,160,288,240,261.3C320,235,400,181,480,170.7C560,160,640,192,720,202.7C800,213,880,203,960,192C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
//components
import Navbar from '../components/widgets/Navbar.vue'
//logo
import LogoText from '../components/svg/logo/LogoText.vue'
//*svg assets
import AssetsHome from '../components/svg/illustrations/AssetsHome.vue'
import AssetsApaItuTahu from '../components/svg/illustrations/AssetsApaItuTahu.vue'
export default {
  components: {
    Navbar,
    LogoText,
    AssetsHome,
    AssetsApaItuTahu,
  },
  data() {
    return { activeTheme: 'teman', themeColor: '#ff4a3d' }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    cardClick(e) {
      if (this.activeTheme === 'teman') {
        this.$refs.flicking_teman.moveTo(e.index)
      } else if (this.activeTheme === 'pasangan') {
        this.$refs.flicking_pasangan.moveTo(e.index)
      }
    },
    changeActiveTheme(theme) {
      this.activeTheme = theme
    },
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
