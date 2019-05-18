<template>
    <div id="app">
        <ul id="navigation">
            <router-link tag="li" class="nav-home" to="/">홈</router-link>
            <router-link tag="li" to="/damageCalc">데미지 계산기</router-link>
            <router-link tag="li" to="/agiCalc">최대사속 계산기</router-link>
            <router-link tag="li" to="/gemsCalc">필요 보석량 계산기</router-link>
            <router-link tag="li" to="/simCalc">필요 모의작전점수 계산기</router-link>
            <router-link tag="li" to="/expCalc">경험치 계산기</router-link>
        </ul>
        <div class="nav-tab">
            <span style="width: 40px;"></span>
            <span id="DamageCalc"></span>
            <span id="AgiCalc"></span>
            <span id="GemsCalc"></span>
            <span id="SimCalc"></span>
            <span id="ExpCalc"></span>
        </div>
        <div class="container-router-view">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        tabMove: function () {
            // console.log(this.$route.name)
            $('.nav-tab').children().removeClass()
            $('#'+this.$route.name).addClass('current')
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
    width: calc((100% - 40px) / 5);
    line-height: 40px;
    height: 100%;
    cursor: pointer;
    
    text-align: center;
    font-size: 2vmin;
    font-family: 'Do Hyeon', sans-serif;
}
ul#navigation li:hover {
    background-color:#9c9175;
}

ul#navigation .nav-home {
    box-sizing: border-box;
    float: left;
    width: 40px;
    line-height: 40px;
    height: 100%;
    cursor: pointer;
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
.nav-tab span{
    box-sizing: border-box;
    float: left;
    width: calc((100% - 40px) / 5);
    height: 100%;
}
.nav-tab .current{
    background-color: #9c9175;
}
</style>
