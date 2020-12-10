<template>
  <div>
    <h2 v-if="appData && appData.title">{{ appData.title }}</h2>

    <div v-if="appData && appData.results">
      <div
        class="OuterContainer"
        v-for="(val, key) in appData.results"
        v-bind:key="key"
      >
        <router-link v-bind:to="'/app/' + val.id">
          <div class="InnerContainer">
            <div class="Scope20">
              <a :title="val.name + ' details'">
                <img class="icon" :src="val.artworkUrl100" />
              </a>
            </div>
            <div class="Scope60">
              <span class="Name">{{ val.name }}</span>
              <span class="Genre" v-if="val.genres[0].name">
                {{ val.genres[0].name }}
              </span>
            </div>
            <div class="Scope20">
              <button v-on:click="iTune(val.url)">GET</button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "products",
  props: ["appData"],
  methods: {
    iTune(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style scoped>
.OuterContainer {
  width: 100%;
  background-color: #000000;
  padding: 0px;
}

.OuterContainer::after {
  content: "";
  height: 0;
  border-bottom: 1px #808084 solid;
  left: 24px;
  right: 24px;
  position: absolute;
}

.OuterContainer:last-child::after {
  border-bottom: 0px #808084 solid;
}

.InnerContainer {
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #000000;
  padding: 6px 0px;
}

.Scope60 {
  width: 60%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0px 10px;
}

.Scope20 {
  width: 20%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.icon {
  width: 100%;
  height: auto;
  border-radius: 22.37%;
}

.button,
button {
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
  text-align: center;
  border: 0;
  box-shadow: none;
}

.Name {
  font-size: 14pt;
  color: #ffffff;
}

.Genre {
  font-size: 12pt;
  color: #808084;
}
</style>