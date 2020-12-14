<template>
  <Loader v-if="loading" />
  <div v-if="!loading">
    <ToggleButton
      :defaultState="true"
      v-on:OnChange="eventHandler()"
    />
    <Products v-if="!checked" v-bind:appData="topFreeApps" />
    <Products v-if="checked" v-bind:appData="topPaidApps" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import Loader from "./Loader.vue";
import Products from "./Products.vue";
import ToggleButton from "./ToggleButton.vue";
import app from "../main";

export default {
  name: "Application",
  components: { Loader, Products, ToggleButton },
  setup() {
    const topFreeApps = ref({});
    const topPaidApps = ref({});
    let checked = ref({});
    let error = "";
    let loading = ref({});

    onMounted(async () => {
      checked.value = false;
      loading.value = true;
      try {
        const response1 = await app.axios.get(
          "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/25/explicit.json"
        );
        const response2 = await app.axios.get(
          "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/all/25/explicit.json"
        );
        
        topFreeApps.value = response1.data.feed;
        topPaidApps.value = response2.data.feed;
      } catch (e) {
        error = "Can't find app information.";
      } finally {
        loading.value = false;
      }
      
    });

    function eventHandler() {
      checked.value = !checked.value;
    }

    return { topFreeApps, topPaidApps, checked, error, loading, eventHandler };
  },
};
</script>

<style>

</style>
