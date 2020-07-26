<template>
  <div class="bg-dark h-screen">
    <div class="flex h-maincontentheight">
      <!-- COMPONENT: SIDENAV -->
      <div class="w-56 grid grid-rows-nav">
        <!-- logo -->
        <div class="p-6">
          <img src="./assets/img/Spotify_Logo_RGB_White.png" alt="Logo" class="h-10">
        </div>
        <!-- main nav buttons -->
        <div class="mx-2 mb-3">
          <button v-for="(currentPage, index) in pages" v-bind:key="index" class="w-full text-sm font-semibold rounded px-3 py-2 flex justify-start items-center btn" @click="setID = currentPage.id" v-bind:class="`${setID === currentPage.id ? selectedBtnClasses : defaultClasses}`">
            <!-- v-bind:class="{'bg-light text-white': setID === currentPage.id}" WHY DOES THIS WORK??? -->
            <Icon v-bind:name="currentPage.icon" class="mr-2" />
            {{currentPage.name}}</button>
        </div>
        <!-- Playlist (Title and Buttons) -->
        <div class="mx-5">
          <h3 class="text-xs text-light tracking-widest uppercase mb-3">Playlists</h3>
          <button class="flex justify-start items-center mb-3 opacity-75 hover:opacity-100 btn">
            <Icon name="new" class="mr-3" />
            <p class="text-sm text-white font-semibold">Create Playlist</p>
          </button>
          <button class="flex justify-start items-center opacity-75 hover:opacity-100 btn">
            <Icon name="favourite" class="mr-3" />
            <p class="text-sm text-white font-semibold">Liked Songs</p>
          </button>
          <div class="h-px w-full bg-light opacity-50 my-3"></div>
        </div>
        <!-- List of Playlists -->
        <div class="mx-5">
          <div class="w-full h-16 overflow-y-scroll">
            <p v-for="(currentAlbum, index) in albums" v-bind:key="index" class="text-light hover:text-white text-sm py-1">
              {{currentAlbum.name}}
            </p>
            <button class="flex justify-start items-center text-sm text-light hover:text-vert">
              <Icon name="download" class="mr-2" />
              Install App
            </button>
          </div>
        </div>
        <!-- Currently Playing Image -->
        <!-- <div class="relative bg-cover" v-bind:style="{backgroundImage: `url(${backgroundUrl})`}">
        </div> -->
        <img v-bind:src="backgroundUrl" class="block object-cover pt-4">
      </div>
      <!-- MAINCONTENT -->
      <div class="w-full h-full relative bg-green-200">
        <!-- Fixed Header -->
        <div class="w-full sticky top-0 bg-vert p2">
          Header Will go here
        </div>
      </div>
    </div>
    <!-- FOOTER / PLAYBAR -->
    <div class="w-full h-footer bg-green-300">
      <p class="text-center font-bold text-xl">Sidenav: Done &check;</p>
    </div>
  </div>
</template>

<script>
import Icon from "./components/shared/Icon";
import backgroundUrl from "./assets/img/eevee.jpg";

export default {
  name: "App",
  components: {
    Icon: Icon
  },
  data() {
    return {
      backgroundUrl: backgroundUrl,
      pages: [
        {
          id: "home",
          name: "Home",
          icon: "home"
        },
        { id: "search", name: "Search", icon: "search" },
        { id: "library", name: "Your Library", icon: "library" }
      ],
      setID: "home",
      selectedBtnClasses: ["bg-light bg-opacity-25 text-white"],
      defaultClasses: ["text-light"],
      albums: [
        { name: "drive" },
        { name: "zhu" },
        { name: "indie" },
        { name: "mellow" },
        { name: "vapourwave" }
      ]
    };
  },
  methods: {
    setButtonID(id) {
      this.setID = id;
      console.log(this.setID);
      if (this.setID === id) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    }
  }
};
</script>

<style>
.btn:focus {
  @apply outline-none;
}
</style>
