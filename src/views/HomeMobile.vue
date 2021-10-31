<template>
  <NavbarMobile v-bind:logoColor="themeColor" />
  <div class="bg-light-200 text-dark-400">
    <div id="home" class="bg-light-200 w-full h-screen px-12 py-12">
      <div class="text-3xl font-montserrat font-black text-center mb-6">
        Yuk main bareng, biar makin tahu
      </div>
      <AssetsHomeMobile class="w-full mb-6" />
      <div class="flex flex-col gap-y-4 text-white px-8">
        <div
          @click="navJump('hubungi-kami')"
          class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
        >
          <div class="fab fa-apple text-6xl"></div>
          <div class="font-noto-sans">
            <div>Download di</div>
            <div class="text-2xl 2xl:text-3xl font-bold">App Store</div>
          </div>
        </div>
        <div
          @click="navJump('hubungi-kami')"
          class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
        >
          <div class="fab fa-google-play text-5xl"></div>
          <div class="font-noto-sans">
            <div>TEMUKAN DI</div>
            <div class="text-2xl 2xl:text-3xl font-bold">Google Play</div>
          </div>
        </div>
      </div>
    </div>
    <div id="apa-itu-tahu" class="bg-light-200 w-full">
      <div class="section-head-mobile">
        <div class="text-4xl mt-2">Apa itu</div>
        <LogoText class="w-28 mx-2" />
        <div class="text-5xl">?</div>
      </div>
      <AssetsApaItuTahu class="w-72 h-72 mx-auto my-4" />
      <div class="w-80 text-lg font-noto-sans mx-auto text-center">
        Kartu Tahu adalah sebuah permainan kartu yang berisikan
        pertanyaan-pertanyaan yang dapat dimainkan bersama teman-temanmu dengan
        berbagai pilihan tema menarik yang dapat kamu pilih dan mainkan dimana
        pun dan kapan pun.
      </div>
    </div>
    <div class="bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f4f4f4"
          fill-opacity="1"
          d="M0,128L120,149.3C240,171,480,213,720,197.3C960,181,1200,107,1320,69.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <div class="section-head-mobile">
        <div class="text-4xl">Tema Kartu</div>
      </div>
      <Flicking
        :plugins="themePlugins"
        v-if="activeTheme === 'teman'"
        ref="flicking_teman"
        @select="
          (e) => {
            cardClick(e)
          }
        "
      >
        <div class="theme-card-mobile bg-card-taktahu"></div>
        <div class="theme-card-mobile bg-card-tahu"></div>
        <div class="theme-card-mobile bg-card-sobattahu"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <Flicking
        :plugins="themePlugins"
        v-if="activeTheme === 'pasangan'"
        ref="flicking_pasangan"
        @select="
          (e) => {
            cardClick(e)
          }
        "
      >
        <div class="theme-card-mobile bg-card-sukadia"></div>
        <div class="theme-card-mobile bg-card-pacardia"></div>
        <div class="theme-card-mobile bg-card-yakindia"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <Flicking :plugins="themePlugins" v-if="activeTheme === 'lucu'">
        <div class="theme-card-mobile bg-card-lucu"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <Flicking :plugins="themePlugins" v-if="activeTheme === 'tantangan'">
        <div class="theme-card-mobile bg-card-tantangan"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <Flicking :plugins="themePlugins" v-if="activeTheme === 'keluarga'">
        <div class="theme-card-mobile bg-card-keluarga"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <Flicking :plugins="themePlugins" v-if="activeTheme === 'kolega'">
        <div class="theme-card-mobile bg-card-kolega"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <Flicking :plugins="themePlugins" v-if="activeTheme === 'diriku'">
        <div class="theme-card-mobile bg-card-diriku"></div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
      <div
        class="font-noto-sans text-lg text-center px-4 mb-6 whitespace-pre-wrap"
      >
        {{ themeDescription }}
      </div>
      <div class="font-noto-sans font-bold text-lg text-center px-4">
        Jumlah Pemain
      </div>
      <div
        class="font-noto-sans text-lg text-center px-4 mb-4 whitespace-pre-wrap"
      >
        {{ themePlayerCount }}
      </div>
      <div
        class="grid grid-cols-2 gap-y-4 items-center justify-items-center mx-12"
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
          class="theme-menu border-tahupurple-400 hover:bg-tahupurple-400 col-span-2"
          @click="changeActiveTheme('diriku')"
          :class="{
            'bg-tahupurple-400 text-white': activeTheme === 'diriku',
          }"
        >
          Diriku
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f4f4f4"
          fill-opacity="1"
          d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="bg-light-200 w-full h-auto" id="cara-bermain">
      <div class="section-head-mobile mb-8">
        <div class="text-4xl">Cara Bermain</div>
      </div>
      <Flicking
        :plugins="howToPlugins"
        :options="{
          circular: true,
          align: 'center',
          adaptive: true,
        }"
      >
        <div class="mx-8">
          <img src="../assets/svg/1stStepMobile.svg" class="h-vh-40 mx-auto" />
          <div
            class="w-full bg-chat-up bg-contain bg-center bg-no-repeat mx-auto p-8 mb-12"
          >
            <div class="font-montserrat font-black text-2xl mt-2 mb-2">
              Langkah 1
            </div>
            <div class="font-noto-sans text-md">
              Buat game room di app lalu sebarkan kode room yang telah didapat
              agar pemain lain dapat masuk ke dalam room.
            </div>
          </div>
        </div>
        <div class="mx-8">
          <img src="../assets/svg/2ndStep.svg" class="h-vh-40 mx-auto" />
          <div
            class="w-full bg-chat-up bg-contain bg-center bg-no-repeat mx-auto p-8 mb-12"
          >
            <div class="font-montserrat font-black text-2xl mt-2 mb-2">
              Langkah 2
            </div>
            <div class="font-noto-sans text-md">
              Pemain lain selain host dapat memasukkan kode room untuk bergabung
              ke dalam permainan.
            </div>
          </div>
        </div>
        <div class="mx-8">
          <img src="../assets/svg/3rdStep.svg" class="h-vh-40 mx-auto" />
          <div
            class="w-full bg-chat-up bg-contain bg-center bg-no-repeat mx-auto p-8 mb-12"
          >
            <div class="font-montserrat font-black text-2xl mt-2 mb-2">
              Langkah 3
            </div>
            <div class="font-noto-sans text-md">
              Setiap pemain akan mendapatkan giliran untuk mengambil kartu.
              Pertanyaan yang ditulis di kartu dapat dijawab oleh pemain.
            </div>
          </div>
        </div>
        <div class="mx-8">
          <img src="../assets/svg/4thStep.svg" class="h-vh-40 mx-auto" />
          <div
            class="w-full bg-chat-up bg-contain bg-center bg-no-repeat mx-auto p-8 mb-12"
          >
            <div class="font-montserrat font-black text-2xl mt-2 mb-2">
              Langkah 4
            </div>
            <div class="font-noto-sans text-md">
              Untuk penonton bisa menyaksikan permainan secara langsung melalui
              website dengan memasukkan kode room.
            </div>
          </div>
        </div>
        <template #viewport>
          <div class="flicking-pagination mt-12"></div>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
    </div>
    <div class="bg-white w-full h-auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f6f6f6"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,112C672,96,768,96,864,90.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div
        class="section-head-mobile h-48 mb-12 bg-hubungi-kami-mobile bg-contain bg-no-repeat bg-bottom"
        id="hubungi-kami"
      >
        <div class="text-4xl ml-16 mt-2">Mau</div>
        <LogoText class="w-28 mx-2" />
        <div class="text-5xl">?</div>
      </div>
      <div class="font-noto-sans text-lg text-center px-8 mb-8">
        Wah, kita keduluan nih sama kamu 🥺
        <br />
        Game kita masih diracik adonannya, kamu mau ga buat jadi testernya kalau
        tahunya sudah siap saji?
        <br />
        Kalau mau, bisa tulis username Instagram kamu di bawah ini ya biar kita
        DM kalau tahunya udah siap!
        <br />
        Coba selagi hangat ya 😏
      </div>
      <div class="relative w-vw-80 mx-auto">
        <div
          v-if="!contactBool"
          class="bg-light-200 border-2 border-light-400 w-full rounded-xl px-8"
        >
          <img
            src="../assets/svg/bulet/bulet1.svg"
            class="absolute bottom-0 left-0 transform -translate-x-8 translate-y-4 w-20"
          />
          <form
            class="font-noto-sans flex flex-col mt-14"
            v-on:submit.prevent="sendMessage"
          >
            <label for="name">
              Nama Lengkap
              <span class="text-tahured-400">*</span>
            </label>
            <input
              type="text"
              v-model="name"
              class="bg-light-200 border-b-2 border-dark-200 h-8 focus:outline-none mb-4"
            />
            <label for="ig">
              Username IG
              <span class="text-tahured-400">*</span>
            </label>
            <input
              type="text"
              v-model="instagram"
              class="bg-light-200 border-b-2 border-dark-200 h-8 focus:outline-none mb-4"
            />
            <button
              :disabled="!name || !instagram"
              type="submit"
              class="bg-tahured-400 text-white rounded-lg w-32 ml-auto my-10 px-8 py-2 hover:bg-tahured-500 disabled:opacity-50 disabled:cursor-default"
            >
              Submit
            </button>
          </form>
        </div>
        <div
          v-else
          class="bg-light-200 border-2 border-light-400 w-full rounded-xl px-8 py-4"
        >
          <img
            src="../assets/svg/bulet/bulet1.svg"
            class="absolute bottom-0 left-0 transform -translate-x-8 translate-y-4 w-16"
          />
          <div class="font-montserrat font-black text-4xl text-center mb-4">
            Terima Kasih!
          </div>
          <div class="font-noto-sans text-lg text-center">
            Tunggu ajakan kami melalui DM untuk menjadi yang pertama mencoba
            permainan kami ya!
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          :fill="themeColor"
          fill-opacity="1"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="bg-dark-300 text-white w-full h-auto pt-12 px-8">
      <div class="flex justify-center items-center gap-x-4 mb-4">
        <Logo v-bind:logoColor="'#ffffff'" class="w-16"></Logo>
        <div class="flex flex-col gap-y-2 items-start">
          <a href="#" class="flex items-center gap-x-2 hover:text-light-400">
            <span class="fab fa-fw fa-instagram text-4xl"></span>
            <span class="text-xl">kartutahu</span>
          </a>
          <a href="#" class="flex items-center gap-x-2 hover:text-light-400">
            <span class="far fa-fw fa-envelope text-4xl"></span>
            <span class="text-xl">kontak@kartutahu.com</span>
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-y-4 text-white px-12 mb-4">
        <div
          @click="navJump('hubungi-kami')"
          class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
        >
          <div class="fab fa-apple text-6xl"></div>
          <div class="font-noto-sans">
            <div>Download di</div>
            <div class="text-2xl 2xl:text-3xl font-bold">App Store</div>
          </div>
        </div>
        <div
          @click="navJump('hubungi-kami')"
          class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
        >
          <div class="fab fa-google-play text-5xl"></div>
          <div class="font-noto-sans">
            <div>TEMUKAN DI</div>
            <div class="text-2xl 2xl:text-3xl font-bold">Google Play</div>
          </div>
        </div>
      </div>
      <div class="text-center pb-8">
        ©2021 Tahu. Surabaya, Indonesia
      </div>
    </div>
  </div>
</template>

<script>
//firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
//flicking src:https://naver.github.io/egjs-flicking/
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking-inline.css'
import { Pagination, Fade, Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/pagination.css'
import '@egjs/flicking-plugins/dist/arrow.css'
//components
import NavbarMobile from '../components/widgets/NavbarMobile.vue'
//logo
import Logo from '../components/svg/logo/Logo.vue'
import LogoText from '../components/svg/logo/LogoText.vue'
//*svg assets
import AssetsHomeMobile from '../components/svg/illustrations/AssetsHomeMobile.vue'
import AssetsApaItuTahu from '../components/svg/illustrations/AssetsApaItuTahu.vue'
export default {
  components: {
    Flicking: Flicking,
    NavbarMobile,
    Logo,
    LogoText,
    AssetsHomeMobile,
    AssetsApaItuTahu,
  },
  data() {
    return {
      activeTheme: 'teman',
      themeColor: '#ff4a3d',
      themeDescription:
        'Katanya sih ga ada rahasia di antara kita, tapi kok masih jaim?' +
        '\n' +
        "Nah sekarang saatnya buat 'buka kartu'",
      themePlayerCount: 'Tak terbatas seperti jumlah sambatan kalian.',
      name: null,
      instagram: null,
      contactBool: false,
      themePlugins: [new Arrow()],
      howToPlugins: [
        new Pagination({ type: 'bullet' }),
        new Fade(),
        new Arrow(),
      ],
      db: firebase.firestore(),
    }
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
      if (theme == 'teman') {
        this.themeDescription =
          'Katanya sih ga ada rahasia di antara kita, tapi kok masih jaim?' +
          '\n' +
          "Nah sekarang saatnya buat 'buka kartu'"
        this.themePlayerCount = 'Tak terbatas seperti jumlah sambatan kalian.'
      } else if (theme == 'pasangan') {
        this.themeDescription =
          'Masalah terbesar dalam memulai maupun menjalani hubungan adalah miskomunikasi dan perbedaan visi misi. ' +
          '\n' +
          'Yuk samain dulu persepsi masing-masing biar bisa jadi couple goals yang kayak di akun itu tu.'
        this.themePlayerCount =
          'Harusnya sih 2. Tapi kalau bawa selingkuhan atau mantan, resiko ditanggung pemain.'
      } else if (theme == 'lucu') {
        this.themeDescription =
          'Pas buat kamu dan teman-temanmu yang urat malunya udah putus to the bone.'
        this.themePlayerCount = 'Bawa sekampung dah. Bebas.'
      } else if (theme == 'tantangan') {
        this.themeDescription =
          'Pengikut Mad Dog jalur Tidak Tahu Malu bisa cobain nih buat nantang RT sebelah yang biasa ngajak tanding kelereng dari Film Game Cumi.'
        this.themePlayerCount =
          'Ikut Game Cumi deh, yang penting sistem eliminasinya jangan ada pertumpahan darah ya 😦'
      } else if (theme == 'keluarga') {
        this.themeDescription =
          'Apakah rumahmu bisa disebut rumah kalau tidak bisa jadi tempat untuk ngobrol?' +
          '\n' +
          'Karena quality time tidak hanya dengan teman dan pasangan. Perbanyak memori selagi masih bersama.'
        this.themePlayerCount = 'Bisa sampai sekeluarga Gen Halilintar ⚡'
      } else if (theme == 'kolega') {
        this.themeDescription =
          'Hai, PIC bonding divisi ya?' +
          '\n' +
          'Nah, cobain gih biar makin kenal gaya kerja masing-masing.' +
          '\n' +
          'Psst, bisa buat jadi bahan evaluasi sama rekan kerja dan bos kamu lho 😉'
        this.themePlayerCount = 'Ajak semua sebelum dipecat bos.'
      } else if (theme == 'diriku') {
        this.themeDescription =
          'Karena mandiri tidak selalu mandi sendiri.' +
          '\n' +
          'Namun juga refleksi mandiri untuk menjadi pribadi yang lebih baik.'
        this.themePlayerCount =
          "Kyk lagunya Mbak Jeni Blekping, I'm going Solo-lo-lo-lo-lo-lo-lo 💃🕺." +
          '\n' +
          'Bukan Surakarta ya.'
      }
    },
    onScroll() {
      if (
        160 >= document.getElementById('hubungi-kami').getBoundingClientRect().y
      ) {
        this.changeActiveMenu('#nav-hubungi-kami')
      } else if (
        160 >= document.getElementById('cara-bermain').getBoundingClientRect().y
      ) {
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
    async sendMessage() {
      const messageInfo = {
        name: this.name,
        instagram: this.instagram,
        createdAt: new Date(),
      }
      await this.db.collection('messages').add(messageInfo)
      this.contactBool = true
    },
  },
}
</script>
