<template>
  <Loader v-if="loading" />
  <div v-if="!loading">
    <Products :appData="topFreeApps" />
    <Products :appData="topPaidApps" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import Loader from "./Loader.vue";
import Products from "./Products.vue";
import app from "../main";

export default {
  name: "Application",
  components: { Loader, Products },
  setup() {
    const topFreeApps = ref({});
    const topPaidApps = ref({});
    let checked = false;
    let error = "";
    let loading = ref({});

    onMounted(async () => {
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

    return { topFreeApps, topPaidApps, checked, error, loading };
  },
};
</script>

<style>

</style>
