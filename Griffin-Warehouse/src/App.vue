<template>
  <div id="app">
    <ul id="navigation">
      <router-link tag="li" to="/damageCalc">데미지 계산기</router-link>
      <router-link tag="li" to="/gemsCalc">필요 보석량 계산기</router-link>
      <router-link tag="li" to="/simCalc">필요 모의작전점수 계산기</router-link>
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
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon');

.container-router-view {
  margin-top: 40px;
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
    -moz-box-shadow: 0px 2px 5px #555;
    -webkit-box-shadow: 0px 2px 5px #555;
    box-shadow: 0px 2px 5px #555;
    
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
  line-height: 40px;
  height: 100%;
	cursor: pointer;
  
  text-align: center;
  font-size: 3vmin;
  font-family: 'Do Hyeon', sans-serif;
}
ul#navigation li:hover {
    background-color:#9c9175;
}
</style>
