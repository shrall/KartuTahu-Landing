<template>
  <Navbar></Navbar>
  <div class="bg-light-200">
    <div
      id="home"
      class="bg-light-200 w-full h-screen grid grid-cols-12 justify-center items-center px-24"
    >
      <div class="col-span-5 pr-24">
        <div class="text-6xl font-montserrat font-bold mb-8">
          Yuk main bareng, biar makin tahu
        </div>
        <div class="flex gap-x-4 text-white">
          <div
            class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
          >
            <div class="fab fa-apple text-6xl"></div>
            <div class="font-noto-sans">
              <div>Download on the</div>
              <div class="text-3xl font-bold">App Store</div>
            </div>
          </div>
          <div
            class="bg-dark-200 rounded-xl w-full flex justify-items-center items-center gap-x-4 px-4 py-3 cursor-pointer hover:bg-dark-300"
          >
            <div class="fab fa-google-play text-5xl"></div>
            <div class="font-noto-sans">
              <div>GET IT ON</div>
              <div class="text-3xl font-bold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
      <AssetsHome class="col-span-7 w-full"></AssetsHome>
    </div>
    <div class="bg-tahured-400 w-full h-64" id="dadadas"></div>
    <div class="bg-tahured-400 w-full h-64" id="dadadas"></div>
    <div class="bg-tahured-400 w-full h-64" id="dadadas"></div>
  </div>
</template>

<script>
import Navbar from '../components/widgets/Navbar.vue'
import AssetsHome from '../components/svg/AssetsHome.vue'
export default {
  components: {
    Navbar,
    AssetsHome,
  },
}
</script>
