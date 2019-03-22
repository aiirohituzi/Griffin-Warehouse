<template>
  <div id="app">
    <ul id="navigation">
      <router-link tag="li" to="/damageCalc">damageCalc</router-link>
      <router-link tag="li" to="/gemsCalc">gemsCalc</router-link>
      <router-link tag="li" to="/simCalc">simCalc</router-link>
    </ul>
    <div class="container-router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.container-router-view {
  margin-top: 5vh;
}
ul#navigation {
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    list-style: none;
    z-index:5;
    
    background-color:#c3b9a2;
    -moz-box-shadow: -5px 2px 8px #555;
    -webkit-box-shadow: -5px 2px 8px #555;
    box-shadow: -5px 2px 8px #555;
    
	-ms-user-select: none;
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}
ul#navigation li {
  box-sizing: border-box;
  float: left;
  width: calc(100% / 3);
  height: 100%;
	cursor: pointer;
  /* border: 1px solid #000; */
}
ul#navigation li:hover {
    background-color:#9c9175;
}
</style>
