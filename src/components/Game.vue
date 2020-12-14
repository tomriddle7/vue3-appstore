<template>
  <Loader v-if="loading" />
  <div v-if="!loading">
    <ToggleButton
      :defaultState="true"
      v-on:OnChange="eventHandler()"
    />
    <Products v-if="!checked" v-bind:appData="topFreeGames" />
    <Products v-if="checked" v-bind:appData="topPaidGames" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import Loader from "./Loader.vue";
import Products from "./Products.vue";
import ToggleButton from "./ToggleButton.vue";
import app from "../main";

export default {
  name: "Game",
  components: { Loader, Products, ToggleButton },
  setup() {
    const topFreeGames = ref({});
    const topPaidGames = ref({});
    let checked = ref({});
    let error = "";
    let loading = ref({});

    onMounted(async () => {
      checked.value = false;
      loading.value = true;
      try {
        const response1 = await app.axios.get(
          "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/games/25/explicit.json"
        );
        const response2 = await app.axios.get(
          "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/games/25/explicit.json"
        );
        
        topFreeGames.value = response1.data.feed;
        topPaidGames.value = response2.data.feed;
      } catch (e) {
        error = "Can't find game information.";
      } finally {
        loading.value = false;
      }
      
    });

    function eventHandler() {
      checked.value = !checked.value;
    }

    return { topFreeGames, topPaidGames, checked, error, loading, eventHandler };
  },
};
</script>

<style>

</style>
