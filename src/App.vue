<template>
  <div class="bg-dark h-screen">
    <div class="flex h-maincontentheight">
      <!-- COMPONENT: SIDENAV -->
      <!-- <div class="w-56 grid grid-rows-nav"> -->
      <div class="w-56 bg-black h-full flex-none">
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
        <!-- TESTING: with h-auto -->
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
          <!-- <div class="h-px w-full bg-light opacity-50 my-3"></div> -->
        </div>
        <!-- List of Playlists -->
        <div class="mx-5">
          <h3 class="text-xs text-light tracking-widest uppercase mt-4">
            Library
          </h3>
          <!-- removing h-16 4 now -->
          <div class="w-full h-10 TESTING overflow-y-scroll">
            <!-- <h3 class="text-xs text-light tracking-widest uppercase">
              Library
            </h3> -->
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
        <div class="relative w-full h-testHeight bg-blue-400">
          <img v-bind:src="backgroundUrl" class="w-full h-full" />
        </div>
      </div>
      <!-- MAINCONTENT -->
      <div class="w-full h-full relative overflow-y-scroll">
        <!-- HEADER -->
        <div class="w-full sticky top-0 px-4 py-6 flex items-center justify-between bg-black">

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
            <div v-if="showDropDown" class="absolute bg-black w-full rounded mt-tiny">
              <button @click="showDropDown = false" class="btn w-full text-sm py-2 hover:text-white border-b text-light border-light cursor-pointer text-center">
                Account
              </button>
              <button @click="showDropDown = false" class="btn w-full text-sm py-2 hover:text-white text-light border-light cursor-pointer text-center">
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
            <div v-for="(currentRecent, index) in recents" v-bind:key="index" class="p-2 w-48 mr-2">
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
    <div class="w-full h-footer flex justify-between items-center px-3 bg-black bg-opacity-25">
      <div class="flex items-center">
        <div>
          <h1 class="text-sm text-white tracking-wide">Summer in the City - Who cares</h1>
          <h2 class="text-xs text-white opacity-50">Who Cares Who Sang</h2>
        </div>
        <div class="ml-3 flex">
          <Icon name="green-heart" class="mr-3" />
          <Icon name="picture_in_picture" />
        </div>
      </div>
      <!-- Music Controller -->
      <div class="w-musicControls">
        <!-- Bar with timestamps -->
        <div class="w-full flex items-center">
          <span class="text-light font-thin text-xs">0:00</span>
          <div class=" w-full h-1 rounded-full mx-3 bg-light"></div>
          <span class="text-light font-thin text-xs">7:14</span>
        </div>
      </div>
      <div class="flex items-center">
        <Icon name="playlist_play" />
        <Icon name="important-devices" class="mx-3" />
        <Icon name="volume-up" />
        <div class="w-20 h-1 rounded-full ml-3 bg-light bg-opacity-25 hover:bg-vert transition-all duration-150 ease-in cursor-pointer"></div>
      </div>

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
@import url(./App.css);
button {
  transition: all 0.3s ease-in;
}
.btn:focus {
  @apply outline-none;
}
</style>
