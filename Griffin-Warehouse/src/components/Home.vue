<template>
<div class="container-home">
    <h2>그리폰 물류창고</h2>

    <p>소녀전선을 플레이하는데에 도움을 줄 수 있는 여러 툴을 사용해보실 수 있습니다.</p>


    인형제조시간 검색
    <input type="text" v-model="inputTime"><button @click="timeSearch()">검색</button>
    {{ result }}
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
</style>