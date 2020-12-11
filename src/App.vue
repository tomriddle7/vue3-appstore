<template>
<div>
  <div class="header">
    <nav>
      <ul>
        <li><router-link to="/home"><font-awesome-icon icon="clipboard" /><br>Home</router-link></li>
        <li><router-link to="/application"><font-awesome-icon icon="layer-group" /><br>Apps</router-link></li>
        <li><router-link to="/game"><font-awesome-icon icon="rocket" /><br>Game</router-link></li>
        <li><router-link to="/search"><font-awesome-icon icon="search" /><br>Search</router-link></li>
      </ul>
    </nav>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>
<script lang="ts">
export default {
  name : 'app'
}

</script>
<style>
.header {
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
}
ul {
  display: flex;
  list-style-type: none;
  padding-inline-start: 0px;
}
li {
  width: 25vw;
  height: 50px;
  text-align: center;
  color: #ffffff;
  transition: color 0.2s ease-in-out;
}
li.a {
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
a{
  text-decoration:none;
  color:inherit;
}
a.router-link-exact-active {
  color: #0b84fe;
}
*{
  box-sizing:border-box;
}
body{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:18px;
  background-color:rgba(0, 0, 0, 1);
  color:white;
  padding-bottom:70px;
}
</style>