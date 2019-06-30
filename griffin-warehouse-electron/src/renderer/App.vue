<template>
  <div id="app">
    <ul id="navigation">
      <router-link tag="li" class="nav-home" to="/"></router-link>
        <div class="navGroup">
          <div id="navGroup1">
            <router-link tag="li" to="/damageCalc">데미지 계산기</router-link>
            <router-link tag="li" to="/agiCalc">최대사속 계산기</router-link>
            <router-link tag="li" to="/gemsCalc">필요 보석량 계산기</router-link>
          </div>
          <div id="navGroup2">
            <router-link tag="li" to="/simCalc">필요 모의작전점수 계산기</router-link>
            <router-link tag="li" to="/expCalc">경험치 계산기</router-link>
            <router-link tag="li" to="/oeCalc">작전능력 계산기</router-link>
          </div>
        </div>
        <li class="nav-right" @click="navMove()">
          <span v-if="!moveState">▶</span>
          <span v-else>◀</span>
        </li>
    </ul>
    <div class="nav-tab">
      <div class="tabGroup">
        <div id="tabGroup1">
          <span id="DamageCalc"></span>
          <span id="AgiCalc"></span>
          <span id="GemsCalc"></span>
        </div>
        <div id="tabGroup2">
          <span id="SimCalc"></span>
          <span id="ExpCalc"></span>
          <span id="OECalc"></span>
        </div>
      </div>
    </div>
    <div class="container-router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      moveState: false
    }
  },
  methods: {
    tabMove: function () {
      // console.log(this.$route.name)
      $('#tabGroup1').children().removeClass()
      $('#tabGroup2').children().removeClass()
      $('#' + this.$route.name).addClass('current')
    },
    navMove: function () {
      this.moveState = !this.moveState
      $('#navGroup1').toggleClass('move')
      $('#navGroup2').toggleClass('move')
      $('#tabGroup1').toggleClass('move')
      $('#tabGroup2').toggleClass('move')
    }
  },
  mounted: function () {
    this.tabMove()
  },
  updated: function () {
    this.tabMove()
  }
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
    /* -moz-box-shadow: 0px 2px 5px #555;
    -webkit-box-shadow: 0px 2px 5px #555;
    box-shadow: 0px 2px 5px #555; */
    
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
ul#navigation li {
    box-sizing: border-box;
    float: left;
    width: calc((100% - 80px) / 3);
    line-height: 40px;
    height: 100%;
    cursor: pointer;
    
    text-align: center;
    font-size: 2.5vmin;
    font-family: 'Do Hyeon', sans-serif;
}
ul#navigation li:hover {
    background-color:#9c9175;
}

ul#navigation .navGroup {
    position: fixed;
    left: 40px;
    width: calc(100% - 80px);
    height: 40px;
    overflow: hidden;
}
ul#navigation .navGroup #navGroup1 {
    height: 40px;
    
    -webkit-transition: -webkit-transform 500ms;
    transition: transform 500ms;

    will-change: transform;
}
ul#navigation .navGroup #navGroup1.move {
    -webkit-transform: translate(-100%, 0px);
    transform: translate(-100%, 0px);
}
ul#navigation .navGroup #navGroup2 {
    width: 100%;
    height: 40px;
    
    -webkit-transform: translate(100%, -100%);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(100%, -100%);
    transition: transform 500ms;

    will-change: transform;
}
ul#navigation .navGroup #navGroup2.move {
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
}
ul#navigation .navGroup #navGroup1 li{
    width: calc(100% / 3);
}
ul#navigation .navGroup #navGroup2 li{
    width: calc(100% / 3);
}

ul#navigation .nav-home {
    box-sizing: border-box;
    float: left;
    width: 40px;
    line-height: 40px;
    height: 100%;
    cursor: pointer;

    background-repeat:no-repeat;
    background-position:center center;
    background-image: url(assets/home.png);
}
ul#navigation .nav-home:hover {
    background-repeat:no-repeat;
    background-position:center center;
    background-image: url(assets/home_hover.png);
}
ul#navigation .nav-right {
    box-sizing: border-box;
    float: right;
    width: 40px;
    line-height: 40px;
    height: 100%;
    cursor: pointer;
}
ul#navigation .nav-right:hover {
    background-color:#9c9175;
}


.nav-tab {
    position: fixed;
    margin: 0;
    padding: 0;
    top: 40px;
    left: 0;
    width: 100%;
    height: 3px;
    list-style: none;
    z-index:4;
    
    background-color: #c3b9a2;
    -moz-box-shadow: 0px 2px 5px #555;
    -webkit-box-shadow: 0px 2px 5px #555;
    box-shadow: 0px 2px 5px #555;
    
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.nav-tab .tabGroup {
    position: fixed;
    left: 40px;
    width: calc(100% - 80px);
    height: 3px;
    overflow: hidden;
}
.nav-tab .tabGroup #tabGroup1 {
    height: 100%;
    
    -webkit-transition: -webkit-transform 500ms;
    transition: transform 500ms;

    will-change: transform;
}
.nav-tab .tabGroup #tabGroup1.move {
    -webkit-transform: translate(-100%, 0px);
    transform: translate(-100%, 0px);
}
.nav-tab .tabGroup #tabGroup2 {
    height: 100%;
    
    -webkit-transform: translate(100%, -100%);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(100%, -100%);
    transition: transform 500ms;

    will-change: transform;
}
.nav-tab .tabGroup #tabGroup2.move {
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
}
.nav-tab .tabGroup span{
    box-sizing: border-box;
    float: left;
    width: calc(100% / 3);
    height: 100%;
}
.nav-tab .tabGroup .current{
    background-color: #9c9175;
}
</style>
