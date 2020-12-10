<template>
  <h1>Application Page</h1>
  <Products :appData="topFreeApps" />
  <p>{{ topFreeApps }}</p>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import Products from "./Products.vue";
import app from "../main";

export default {
  name: "Application",
  components: { Products },
  setup() {
    const topFreeApps = ref({});

    onMounted(() => {
        app.axios
            .get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/25/explicit.json")
            .then(({ data }) => {
                topFreeApps.value = data;
            });
    });

    return { topFreeApps };
  },
};
</script>

<style>

</style>
