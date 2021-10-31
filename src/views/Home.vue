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
      <AssetsHome class="col-span-7 w-full" />
    </div>
    <div class="bg-light-200 w-full h-auto" id="apa-itu-tahu">
      <div class="section-head">
        <div class="text-6xl">Apa itu</div>
        <LogoText class="w-36 mx-3" />
        <div class="text-7xl">?</div>
      </div>
      <AssetsApaItuTahu class="h-96 mx-auto my-4" />
      <div class="w-148 text-2xl font-noto-sans mx-auto text-center mb-24">
        Kartu Tahu adalah sebuah permainan kartu yang berisikan
        pertanyaan-pertanyaan yang dapat dimainkan bersama teman-temanmu dengan
        berbagai pilihan tema menarik yang dapat kamu pilih dan mainkan dimana
        pun dan kapan pun.
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
              :plugins="themePlugins"
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
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-sukadia"></div>
              <div class="theme-card bg-card-pacardia"></div>
              <div class="theme-card bg-card-yakindia"></div>
              <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
              </template>
            </Flicking>
            <Flicking
              :plugins="themePlugins"
              v-if="activeTheme === 'lucu'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-lucu"></div>
              <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
              </template>
            </Flicking>
            <Flicking
              :plugins="themePlugins"
              v-if="activeTheme === 'tantangan'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-tantangan"></div>
              <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
              </template>
            </Flicking>
            <Flicking
              :plugins="themePlugins"
              v-if="activeTheme === 'keluarga'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-keluarga"></div>
              <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
              </template>
            </Flicking>
            <Flicking
              :plugins="themePlugins"
              v-if="activeTheme === 'kolega'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-kolega"></div>
              <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
              </template>
            </Flicking>
            <Flicking
              :plugins="themePlugins"
              v-if="activeTheme === 'diriku'"
              :options="{ align: { camera: '10%', panel: '36rem' } }"
            >
              <div class="theme-card bg-card-diriku"></div>
              <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
              </template>
            </Flicking>
          </div>
        </div>
        <div
          class="font-noto-sans text-2xl text-center px-64 mb-6 whitespace-pre-wrap"
        >
          {{ themeDescription }}
        </div>
        <div class="font-noto-sans font-bold text-2xl text-center px-64">
          Jumlah Pemain
        </div>
        <div
          class="font-noto-sans text-2xl text-center px-64 mb-4 whitespace-pre-wrap"
        >
          {{ themePlayerCount }}
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
            Sudah tau cara mainnya?
            <br />
            Kalau belum, Yuk cek 4 Langkah
            <span class="font-bold">#MainTahu</span>
            !
          </div>
        </div>
      </div>
      <div class="bg-light-200 h-full">
        <Flicking
          :plugins="howToPlugins"
          :options="{ noPanelStyleOverride: true, circular: true }"
        >
          <div class="w-vw-70 mr-12">
            <div class="grid grid-cols-12 justify-center items-center">
              <div
                class="col-span-8 w-full h-full bg-chat-right bg-contain bg-center bg-no-repeat pl-8 pr-24"
              >
                <div class="font-montserrat font-black text-6xl mt-1.5/10 mb-8">
                  Langkah 1
                </div>
                <div class="font-noto-sans text-2xl">
                  Buat game room di app lalu sebarkan kode room yang telah
                  didapat agar pemain lain dapat masuk ke dalam room.
                </div>
              </div>
              <div class="col-span-4">
                <img src="../assets/svg/1stStep.svg" class="h-vh-55" />
              </div>
            </div>
          </div>
          <div class="w-vw-70 mr-12">
            <div class="grid grid-cols-12 justify-center items-center">
              <div
                class="col-span-8 w-full h-full bg-chat-right bg-contain bg-center bg-no-repeat pl-8 pr-24"
              >
                <div class="font-montserrat font-black text-6xl mt-1.5/10 mb-8">
                  Langkah 2
                </div>
                <div class="font-noto-sans text-2xl">
                  Pemain lain selain host dapat memasukkan kode room untuk
                  bergabung ke dalam permainan.
                </div>
              </div>
              <div class="col-span-4">
                <img src="../assets/svg/2ndStep.svg" class="h-vh-55" />
              </div>
            </div>
          </div>
          <div class="w-vw-70 mr-12">
            <div class="grid grid-cols-12 justify-center items-center">
              <div
                class="col-span-8 w-full h-full bg-chat-right bg-contain bg-center bg-no-repeat pl-8 pr-24"
              >
                <div class="font-montserrat font-black text-6xl mt-1.5/10 mb-8">
                  Langkah 3
                </div>
                <div class="font-noto-sans text-2xl">
                  Setiap pemain akan mendapatkan giliran untuk mengambil kartu.
                  Pertanyaan yang ditulis di kartu dapat dijawab oleh pemain.
                </div>
              </div>
              <div class="col-span-4">
                <img src="../assets/svg/3rdStep.svg" class="h-vh-55" />
              </div>
            </div>
          </div>
          <div class="w-vw-70 mr-12">
            <div class="grid grid-cols-12 justify-center items-center">
              <div
                class="col-span-8 w-full h-full bg-chat-right bg-contain bg-center bg-no-repeat pl-8 pr-24"
              >
                <div class="font-montserrat font-black text-6xl mt-1.5/10 mb-8">
                  Langkah 4
                </div>
                <div class="font-noto-sans text-2xl">
                  Untuk penonton bisa menyaksikan permainan secara langsung
                  melalui website dengan memasukkan kode room.
                </div>
              </div>
              <div class="col-span-4">
                <img src="../assets/svg/4thStep.svg" class="h-vh-55" />
              </div>
            </div>
          </div>
          <template #viewport>
            <div class="flicking-pagination"></div>
            <span class="flicking-arrow-prev"></span>
            <span class="flicking-arrow-next"></span>
          </template>
        </Flicking>
      </div>
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
        class="section-head h-96 mb-12 bg-hubungi-kami bg-contain bg-no-repeat bg-bottom"
        id="hubungi-kami"
      >
        <div class="text-6xl">Mau</div>
        <LogoText class="w-36 mx-3" />
        <div class="text-7xl">?</div>
      </div>
      <div class="font-noto-sans text-2xl text-center px-64 mb-28">
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
      <div class="relative w-vw-60 mx-auto">
        <div
          v-if="!contactBool"
          class="bg-light-200 border-2 border-light-400 w-full rounded-xl px-24 pt-8"
        >
          <img
            src="../assets/svg/bulet/bulet1.svg"
            class="absolute bottom-0 left-0 transform -translate-x-12 translate-y-12 w-24"
          />
          <img
            src="../assets/svg/bulet/bulet2.svg"
            class="absolute top-0 right-4 transform -translate-y-24 w-24"
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
          class="bg-light-200 border-2 border-light-400 w-full rounded-xl px-24 py-8"
        >
          <img
            src="../assets/svg/bulet/bulet1.svg"
            class="absolute bottom-0 left-0 transform -translate-x-12 translate-y-12 w-24"
          />
          <img
            src="../assets/svg/bulet/bulet2.svg"
            class="absolute top-0 right-4 transform -translate-y-24 w-24"
          />
          <div class="font-montserrat font-black text-6xl text-center mb-4">
            Terima Kasih!
          </div>
          <div class="font-noto-sans text-2xl text-center">
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
    <div class="bg-dark-300 text-white w-full h-auto pt-32 px-64">
      <div class="grid grid-cols-12 gap-x-12 justify-center items-center pb-16">
        <div class="col-span-5">
          <Logo :logoColor="'#ffffff'" class="w-36 mx-auto" />
        </div>
        <div class="col-span-7 2xl:col-span-5 flex flex-col gap-y-4">
          <div class="flex items-center gap-x-4 font-noto-sans">
            <a href="#" class="flex items-center gap-x-4 hover:text-light-400">
              <span class="fab fa-fw fa-instagram text-5xl"></span>
              <span class="text-2xl">kartutahu</span>
            </a>
            <a href="#" class="flex items-center gap-x-4 hover:text-light-400">
              <span class="far fa-fw fa-envelope text-5xl"></span>
              <span class="text-2xl">kontak@kartutahu.com</span>
            </a>
          </div>
          <div class="flex gap-x-4 text-white">
            <div
              @click="navJump('hubungi-kami')"
              class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-400"
            >
              <div class="fab fa-apple text-6xl"></div>
              <div class="font-noto-sans">
                <div>Download di</div>
                <div class="text-2xl font-bold">App Store</div>
              </div>
            </div>
            <div
              @click="navJump('hubungi-kami')"
              class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-400"
            >
              <div class="fab fa-google-play text-5xl"></div>
              <div class="font-noto-sans">
                <div>TEMUKAN DI</div>
                <div class="text-2xl font-bold">Google Play</div>
              </div>
            </div>
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
import Navbar from '../components/widgets/Navbar.vue'
//logo
import Logo from '../components/svg/logo/Logo.vue'
import LogoText from '../components/svg/logo/LogoText.vue'
//*svg assets
import AssetsHome from '../components/svg/illustrations/AssetsHome.vue'
import AssetsApaItuTahu from '../components/svg/illustrations/AssetsApaItuTahu.vue'
export default {
  components: {
    Flicking: Flicking,
    Navbar,
    Logo,
    LogoText,
    AssetsHome,
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
          `Nah sekarang saatnya buat 'buka kartu'`
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
      window.scrollTo(
        0,
        document.getElementById(id).getBoundingClientRect().y - 120,
      )
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
