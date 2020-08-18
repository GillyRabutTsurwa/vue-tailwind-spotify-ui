<template>
  <div class="bg-dark h-screen">
    <div class="flex h-maincontentheight">
      <!-- COMPONENT: SIDENAV -->
      <div class="w-56 grid grid-rows-nav">
        <!-- logo -->
        <div class="p-6">
          <img src="./assets/img/Spotify_Logo_RGB_White.png" alt="Logo" class="h-10" />
        </div>
        <!-- main nav buttons -->
        <div class="mx-2 mb-3">
          <button v-for="(currentPage, index) in pages" v-bind:key="index" class="w-full text-sm font-semibold rounded px-3 py-2 flex justify-start items-center btn" @click="setID = currentPage.id" v-bind:class="`${setID === currentPage.id ? selectedBtnClasses : defaultClasses}`">
            <!-- v-bind:class="{'bg-light text-white': setID === currentPage.id}" WHY DOES THIS WORK??? -->
            <Icon v-bind:name="currentPage.icon" class="mr-2" />
            {{ currentPage.name }}
          </button>
        </div>
        <!-- Playlist (Title and Buttons) -->
        <div class="mx-5">
          <h3 class="text-xs text-light tracking-widest uppercase mb-3">
            Playlists
          </h3>
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
              {{ currentAlbum.name }}
            </p>
            <button class="flex justify-start items-center text-sm text-light hover:text-vert">
              <Icon name="download" class="mr-2" />
              Install App
            </button>
          </div>
        </div>
        <!-- Currently Playing Image -->
        <!-- May house it in a div later. -->
        <!-- I'll play with that later. -->
        <img v-bind:src="backgroundUrl" class="block object-cover pt-4" />
      </div>
      <!-- MAINCONTENT -->
      <div class="w-full h-full relative overflow-y-scroll">
        <!-- HEADER -->
        <div class="w-full sticky top-0 px-4 py-6 flex items-center justify-between">

          <div class="flex items-center ml-3">
            <button class="btn rounded-full bg-black w-8 h-8 text-white text-3xl mr-3 flex justify-center items-center">
              <Icon name="leftArrow" />
            </button>
            <button class="btn rounded-full bg-black w-8 h-8 text-white text-3xl justify-center items-center">
              <Icon name="rightArrow" />
            </button>
          </div>

          <div class="relative">
            <button @click="showDropDown = !showDropDown" class="bg-gray-100 bg-opacity-25 rounded-full p-1 flex items-center btn">
              <img src="./assets/img/eevee.jpg" class="rounded-full w-6 h-6 mr-2" />
              <p class="text-white font-semibold text-xs mr-3">
                Gilbert Tsurwa
              </p>
            </button>
            <div v-if="showDropDown" class="absolute bg-gray-100 bg-opacity-25 w-full rounded mt-tiny">
              <button @click="showDropDown = false" class="btn w-full text-sm py-2 hover:text-white border-b text-light border-light cursor-pointer text-center">
                Account
              </button>
              <button @click="showDropDown = false" class="btn w-full text-sm py-2 hover:text-white border-b text-light border-light cursor-pointer text-center">
                Log Out
              </button>
            </div>
          </div>
        </div>
        <!-- CARDS -->

        <div class="px-6 py-3 flex flex-col justify-between items-center">
          <div class="w-full flex justify-between items-center">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Recently Played</h1>
            <h2 class="pr-8 text-xs text-white text-opacity-50 uppercase tracking-wider hover:underline">See All</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="(currentRecent, index) in recents" v-bind:key="index" class="p-2 w-48 mr-4">
              <div class="bg-light bg-opacity-25 w-full h-auto p-5 rounded-lg shadow-md">
                <img v-bind:src="currentRecent.src" class="w-full h-auto shadow mb-2" alt="">
                <h1 class="text-sm font-semibold text-white tracking wide">{{currentRecent.title}}</h1>
                <h2 class="text-xs text-white text-opacity-75 tracking-wide">
                  {{currentRecent.artist}}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="px-6 py-3 flex flex-col justify-between items-center">
          <div class="w-full flex flex-col justify-center items-start">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Made for Gilbert</h1>
            <p class="pl-2 text-xs text-white text-opacity-50 tracking-wider">Get better recommendations the more you listen</p>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="(currentRecent, index) in recents" v-bind:key="index" class="p-2 w-48 mr-4">
              <div class="bg-light bg-opacity-25 w-full h-auto p-5 rounded-lg shadow-md">
                <img v-bind:src="currentRecent.src" class="w-full h-auto shadow mb-2" alt="">
                <h1 class="text-sm font-semibold text-white tracking wide">{{currentRecent.title}}</h1>
                <h2 class="text-xs text-white text-opacity-75 tracking-wide">
                  {{currentRecent.artist}}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="px-6 py-3 flex flex-col justify-between items-center">
          <div class="w-full flex flex-col justify-center items-start">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Your Preferred Songs & Albums</h1>
            <p class="pl-2 text-xs text-white text-opacity-50 tracking-wider">Get better recommendations the more you listen</p>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="(currentRecent, index) in recents" v-bind:key="index" class="p-2 w-48 mr-4">
              <div class="bg-light bg-opacity-25 w-full h-auto p-5 rounded-lg shadow-md">
                <img v-bind:src="currentRecent.src" class="w-full h-auto shadow mb-2" alt="">
                <h1 class="text-sm font-semibold text-white tracking wide">{{currentRecent.title}}</h1>
                <h2 class="text-xs text-white text-opacity-75 tracking-wide">
                  {{currentRecent.artist}}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div>

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
      ],
      showDropDown: false,
      recents: [
        {
          src: require("./assets/img/eevee.jpg"),
          title: "Eevee Beats",
          artist: "Eevee"
        },
        {
          src: require("./assets/img/eevee.jpg"),
          title: "Eevee Beats",
          artist: "Eevesdfe"
        },
        {
          src: require("./assets/img/eevee.jpg"),
          title: "Eeveeasdfsd Beats",
          artist: "Easdfsdaevee"
        },
        {
          src: require("./assets/img/eevee.jpg"),
          title: "Eevesfsfe Beats",
          artist: "Eevee"
        },
        {
          src: require("./assets/img/eevee.jpg"),
          title: "Eeveesdfsdf Beats",
          artist: "Eevee"
        }
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
    },
  }
};
</script>

<style>
button {
  transition: all 0.3s ease-in;
}
.btn:focus {
  @apply outline-none;
}
</style>
