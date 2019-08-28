<template>
<div class="container-home">
    <h2>그리폰 물류창고</h2>

    <p>소녀전선을 플레이하는데에 도움을 줄 수 있는 여러 툴을 사용해보실 수 있습니다.</p>

    <div class="inputGroup-timetable">
        <div class="notice-timetable">※ 인형제조시간을 20분이면 0020, 7시간 14분이면 0714 같은 형식으로 입력해주세요. (이름 검색 가능)</div>
        <div class="input-addon-left">인형제조시간 검색</div>
        <div class="input-timetable-allAddon">
            <input type="text" v-model="inputTime" v-on:keyup.enter="timeSearch()">
        </div>
        <div class="input-addon-right" @click="timeSearch()">검색</div>
        <div class="button-timetable" @click="toggleTimetable()">제조시간표</div>
    </div>
    
    <div class="modal-timetable">
        <div class="background" @click="toggleTimetable()"></div>
        <div class="content">
            <button class="button-timetable" @click="toggleTimetable()">닫기</button>
            <table class="table-timetable">
                <tr>
                    <th class="col1">도감번호</th>
                    <th class="col2">타입</th>
                    <th class="col3">이름</th>
                    <th class="col4">제조시간</th>
                </tr>
                <tr>
                    <th class="col1">도감번호</th>
                    <th class="col2">타입</th>
                    <th class="col3">이름</th>
                    <th class="col4">제조시간</th>
                </tr>
                <tr v-for="item in timetable">
                    <td class="col1">{{ item.id }}</td>
                    <td class="col2">{{ item.type }}</td>
                    <td class="col3">{{ item.name }}</td>
                    <td class="col4">{{ item.time }}</td>
                </tr>
            </table>
        </div>
    </div>

    <br>

    <div class="result-timetable" v-if="result != ''">
        <div class="resultItem" v-for="item in result">
            도감번호 : {{ item.id }}<br>
            타입 : {{ item.type }}<br>
            이름 : {{ item.name }}
        </div>
    </div>
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

            for (var i=0; i<this.timetable.length; i++) {
                if (this.timetable[i].time == this.inputTime) {
                      this.result.push(this.timetable[i])
                } else if (this.timetable[i].name.indexOf(this.inputTime) != -1) {
                      this.result.push(this.timetable[i])
                }
            }
            // console.log(this.result)
        },
        toggleTimetable: function () {
            $('.modal-timetable').toggleClass('toggle')
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
    /* margin-left: auto;
    margin-right: auto; */
}
.inputGroup-timetable .notice-timetable {
    margin-bottom: 5px;
    font-size: 9pt;
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
    width: 100px;
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
    width: 100px;
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

.button-timetable {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #d4cdbd;
    background: linear-gradient(to bottom, #f3f0e9 40%, #d4cdbd 100%);
    padding: 3px;
    margin-left: 10px;
    font-size: 10pt;
    
    cursor: pointer;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.button-timetable:hover {
    background-color: #9c9175;
    background: linear-gradient(to bottom, #d4cdbd 40%, #9c9175 100%);
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.modal-timetable {
    display: none;
}
.modal-timetable.toggle{
    display: unset;
    animation: fade 300ms;
}
.modal-timetable .background {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    background: #000;
}
.modal-timetable .content {
    position: fixed;
    top: 10vh;
    left: 20vw;
    width: 60vw;
    height: 70vh;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #d4cdbd;
    /* border-radius: 5px; */
    overflow-y: scroll;
    
    -moz-box-shadow: 2px 2px 5px #555;
    -webkit-box-shadow: 2px 2px 5px #555;
    box-shadow: 2px 2px 5px #555;
}
.table-timetable {
    margin: auto;
    width: 58vw;
    font-size: 8pt;
}
.table-timetable tr {
    float: left;
    width: calc(29vw - 4px);
}
.table-timetable th {
    padding: 1px;
    background-color: #afa48a;
}
.table-timetable td {
    background-color: #c3b9a2;
}
.table-timetable .col1 {
    width: 4vw;
}
.table-timetable .col2 {
    width: 3vw;
}
.table-timetable .col3 {
    width: 16vw;
}
.table-timetable .col4 {
    width: 4vw;
}

.result-timetable {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    width: fit-content;
    max-width: 80vw;
    padding: 5px;
    font-size: 10pt;
}
.result-timetable .resultItem {
    border: 2px solid #c3b9a2;
    background-color: #d4cdbd;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: fit-content;
    height: fit-content;
}

@media only screen and (max-width: 767px) {
    .modal-timetable .content {
        top: 43px;
        left: 0;
        width: 100%;
        height: calc(100vh - 63px);
    }
    .table-timetable {
        width: 90vw;
    }
    .table-timetable tr {
        width: calc(45vw - 4px);
    }
    .table-timetable th {
        padding: 1px;
    }
    .table-timetable .col1 {
        width: 10vw;
    }
    .table-timetable .col2 {
        width: 5vw;
    }
    .table-timetable .col3 {
        width: 17vw;
    }
    .table-timetable .col4 {
        width: 10vw;
    }
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .inputGroup-timetable .input-timetable-allAddon {
        padding: 2.5px;
    }
}
@media only screen and (max-device-width : 768px) {
    .inputGroup-timetable .input-timetable-allAddon {
        padding: 2.5px;
    }
}
</style>