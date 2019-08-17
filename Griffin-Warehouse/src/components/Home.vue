<template>
<div class="container-home">
    <h2>그리폰 물류창고</h2>

    <p>소녀전선을 플레이하는데에 도움을 줄 수 있는 여러 툴을 사용해보실 수 있습니다.</p>



    <div class="inputGroup-timetable">
        <div class="input-addon-left">인형제조시간 검색</div>
        <div class="input-timetable-allAddon">
            <input type="text" maxlength="4" v-model="inputTime">
        </div>
        <div class="input-addon-right" @click="timeSearch()">검색</div>
    </div>
    <div class="result-timetable">{{ result }}</div>
</div>
</template>

<script>
import { timetable } from './data.js'
export default {
    name: 'Home',
    data () {
        return {
            timetable: [],
            inputTime: '',
            result: [],
        }
    },
    methods: {
        timeSearch: function () {
            this.result = []

            for(var i=0; i<this.timetable.length; i++){
                if(this.timetable[i].time == this.inputTime){
                      this.result.push(this.timetable[i])
                }
            }
            // console.log(this.result)
        }
    },
    mounted: function () {
        this.timetable = timetable
    }
}
</script>

<style>
.container-home {
    margin-top: calc(40px + 10vh);
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
}
.inputGroup-timetable {
    width: fit-content;
    height: 30px;
    margin-top: 10vh;
    margin-bottom: 1vh;
    margin-left: auto;
    margin-right: auto;
}
.inputGroup-timetable .input-addon-left {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: unset;
    background-color: #d4cdbd;
    padding: 3px;
    font-size: 10pt;
}
.inputGroup-timetable .input-timetable-allAddon {
    float: left;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;

    border-radius: 0;
    -webkit-border-radius: 0;

    padding: 3px;

    font-size: 10pt;
    width: 50px;
}
.inputGroup-timetable .input-timetable-allAddon input{
    -webkit-appearance: none;

    border: unset;
    -webkit-border: unset;
    
    margin: 0;
    -webkit-margin: 0;

    padding: 0;
    -webkit-padding: 0;

    font-size: 10pt;
    width: 50px;
    text-align: right;
}
.inputGroup-timetable .input-addon-right {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: unset;
    background-color: #d4cdbd;
    background: linear-gradient(to bottom, #f3f0e9 40%, #d4cdbd 100%);
    padding: 3px;
    font-size: 10pt;
    
    cursor: pointer;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.inputGroup-timetable .input-addon-right:hover {
    background-color: #9c9175;
    background: linear-gradient(to bottom, #d4cdbd 40%, #9c9175 100%);
}

.result-timetable {
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
}
</style>