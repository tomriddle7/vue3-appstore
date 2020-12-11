<template>
  <div class="Container" v-if="productDetail">
    <button class="BackButton" v-on:click="goBack()">◀홈화면</button>
    <div class="Summary" v-if="productDetail">
      <div class="Scope20">
        <img class="Icon" :src="productDetail.artworkUrl100" />
      </div>
      <div class="Scope50">
        <h1 class="TitleName">{{ productDetail.trackName }}</h1>
        <h1 class="TitleName">{{ productDetail.artistName }}</h1>
      </div>
      <div class="Scope30">
        <button
          class="StoreButton"
          v-on:click="iTune(productDetail.trackViewUrl)"
        >
          {{ productDetail.formattedPrice }}
        </button>
        <h1 class="TitleName">{{ productDetail.trackContentRating }}</h1>
      </div>
    </div>
    <div class="ScreenShotP">
      <img
        class="ScreenShot"
        :src="val"
        v-for="(val, key) in productDetail.screenshotUrls"
        v-bind:key="key"
      />
    </div>
    <div class="Explanation">
      <span>{{ productDetail.description }}</span>
    </div>
    <div class="UpdateviewP">
      <div class="Title">새로운 기능</div>
      <div class="UpdateDate">
        <div class="ViewLeft width50">버전 {{ productDetail.version }}</div>
        <div class="ViewRight width50">
          {{ productDetail.currentVersionReleaseDate.substr(0, 4) }}년
          {{ productDetail.currentVersionReleaseDate.substr(5, 2) }}월
          {{ productDetail.currentVersionReleaseDate.substr(8, 2) }}일
        </div>
      </div>
      <div class="UpdateDetail">
        <span>{{ productDetail.releaseNotes }}</span>
      </div>
    </div>
    <div class="OverviewP">
      <div class="Title">정보</div>
      <div class="Overview">
        <div class="ViewLeft width25">제공자</div>
        <div class="ViewRight width75">{{ productDetail.sellerName }}</div>
      </div>
      <div class="Overview">
        <div class="ViewLeft width25">크기</div>
        <div class="ViewRight width75">
          {{ (productDetail.fileSizeBytes / 1024 / 1024).toFixed(1) }}MB
        </div>
      </div>
      <div class="Overview">
        <div class="ViewLeft width25">카테고리</div>
        <div class="ViewRight width75">
          {{ productDetail.primaryGenreName }}
        </div>
      </div>
      <div class="Overview">
        <div class="ViewLeft width25">언어</div>
        <div class="ViewRight width75">
          {{ productDetail.languageCodesISO2A.join(" | ") }}
        </div>
      </div>
      <div class="Overview">
        <div class="ViewLeft width25">연령 등급</div>
        <div class="ViewRight width75">
          {{ productDetail.contentAdvisoryRating }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import app from "../main";

export default {
  name: "detail",
  setup() {
    let id = 0;
    const productDetail = ref({});

    function iTune(url: string) {
      window.open(url, "_blank");
    }

    function goBack() {
      window.history.back();
    }

    onMounted(() => {
      id = parseInt(location.pathname.replace("/app/", ""));
      app.axios
          .get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${id}&country=KR`)
          .then(({ data }) => {
            productDetail.value = data.results[0];
          });
      
    });

    return { iTune, goBack };
  },
};
</script>
<style scoped>
* {
  white-space: pre-wrap;
}

.Container {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px;
}

.BackButton {
  background: #00000000;
  color: #0b84fe;
  text-align: center;
  border: 0;
  box-shadow: none;
  font-size: 18px;
}

.Summary {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
}

.Icon {
  width: 100%;
  height: auto;
  border-radius: 22.37%;
}

.TitleName {
  font-size: 18px;
  font-weight: 400;
}

.Scope20 {
  width: 20vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0px;
}

.Scope30 {
  width: 30vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0px;
}

.Scope50 {
  width: 50vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 5px;
}

.StoreButton {
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
  text-align: center;
  border: 0;
  box-shadow: none;
}

.ScreenShotP {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 46vw;
  flex-wrap: wrap;
  overflow: auto;
  margin: 10px;
}

.ScreenShotP::after {
  content: "";
  height: 0;
  border-bottom: 1px #808084 solid;
  left: 24px;
  right: 24px;
  position: absolute;
}

.ScreenShot {
  display: inline;
  width: auto;
  height: 100%;
  margin: 0px 5px;
}

.Explanation {
  line-height: 1.5;
  word-break: break-all;
}

.UpdateviewP::before {
  content: "";
  height: 0;
  border-bottom: 1px #808084 solid;
  left: 24px;
  right: 24px;
  position: absolute;
}

.UpdateviewP::after {
  content: "";
  height: 0;
  border-bottom: 1px #808084 solid;
  left: 24px;
  right: 24px;
  position: absolute;
}

.UpdateDate {
  width: 100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
}

.UpdateDetail {
  width: 100%;
  line-height: 1.5;
  margin: 8px 0px;
}

.OverviewP {
  line-height: 1.5;
}

.Overview {
  width: 100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
}

.Overview::after {
  content: "";
  height: 0;
  border-bottom: 1px #808084 solid;
  left: 24px;
  right: 24px;
  position: absolute;
}

.ViewLeft {
  text-align: left;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
}

.ViewRight {
  text-align: right;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
}

.width25 {
  width: 25vw;
}

.width50 {
  width: 50vw;
}

.widt75 {
  width: 75vw;
}

.Title {
  font-size: 20px;
  font-weight: 800;
}
</style>