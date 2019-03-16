<template>
<div class="container-simCalc">
    <table id="table-sim">
        <tr>
            <th colspan="3">스킬칩 및 모의점수 보유량 입력</th>
        </tr>
        <tr>
            <th>초급</th>
            <th>중급</th>
            <th>고급</th>
        </tr>
        <tr>
            <td><input type="text" v-model="basicData"></td>
            <td><input type="text" v-model="intermediateData"></td>
            <td><input type="text" v-model="advancedData"></td>
        </tr>
        <tr>
            <td></td>
            <th>모의점수</th>
            <td><input type="text" v-model="currentSimEnergy"></td>
        </tr>
        
        <tr class="empty-line">
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th colspan="3">필요 사용량 입력</th>
        </tr>
        <tr>
            <th>초급</th>
            <th>중급</th>
            <th>고급</th>
        </tr>
        <tr>
            <td><input type="text" v-model="needBasicData"></td>
            <td><input type="text" v-model="needIntermediateData"></td>
            <td><input type="text" v-model="needAdvancedData"></td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th colspan="3">필요 모의점수</th>
        </tr>
        <tr>
            <th>초급</th>
            <th>중급</th>
            <th>고급</th>
        </tr>
        <tr>
            <td>{{ needSimEnergy_basic }}</td>
            <td>{{ needSimEnergy_intermediate }}</td>
            <td>{{ needSimEnergy_advanced }}</td>
        </tr>
        <tr>
            <td></td>
            <th>합계</th>
            <th>필요구매횟수</th>
        </tr>
        <tr>
            <td></td>
            <td>{{ needSimEnergy_sum }}</td>
            <td>{{ needSimPurchase }}</td>
        </tr>
    </table>

    <div id="div-getData" class="side-left">
        <div class="inputGroup-getData">
            <div>모의작전 1회당<br>스킬칩 수급량</div>
            <div>초급 <input type="text" maxlength="3" size="1" v-model="getBasicData"></div>
            <div>중급 <input type="text" maxlength="3" size="1" v-model="getIntermediateData"></div>
            <div>고급 <input type="text" maxlength="3" size="1" v-model="getAdvancedData"></div>
        </div>
        <div class="btn-getData" @click="openGetData()"></div>
    </div>

    <div id="div-needData" class="side-right">
        <div class="btn-needData" @click="openNeedData()"></div>
        <table id="table-needData">
            <tr>
                <th>연구 레벨</th>
                <th>인형</th>
                <th>전략요정</th>
                <th>전투요정</th>
            </tr>
            <tr>
                <th>1 → 2</th>
                <td class="bgcolor-basic">100</td>
                <td class="bgcolor-basic">200</td>
                <td class="bgcolor-basic">200</td>
            </tr>
            <tr>
                <th>2 → 3</th>
                <td class="bgcolor-basic">200</td>
                <td class="bgcolor-basic">400</td>
                <td class="bgcolor-basic">400</td>
            </tr>
            <tr>
                <th>3 → 4</th>
                <td class="bgcolor-basic">300</td>
                <td class="bgcolor-basic">600</td>
                <td class="bgcolor-basic">600</td>
            </tr>
            <tr>
                <th>4 → 5</th>
                <td class="bgcolor-intermediate">120</td>
                <td class="bgcolor-intermediate">240</td>
                <td class="bgcolor-intermediate">200</td>
            </tr>
            <tr>
                <th>5 → 6</th>
                <td class="bgcolor-intermediate">200</td>
                <td class="bgcolor-intermediate">400</td>
                <td class="bgcolor-intermediate">400</td>
            </tr>
            <tr>
                <th>6 → 7</th>
                <td class="bgcolor-intermediate">300</td>
                <td class="bgcolor-intermediate">600</td>
                <td class="bgcolor-intermediate">600</td>
            </tr>
            <tr>
                <th>7 → 8</th>
                <td class="bgcolor-intermediate">400</td>
                <td class="bgcolor-intermediate">800</td>
                <td class="bgcolor-advanced">200</td>
            </tr>
            <tr>
                <th>8 → 9</th>
                <td class="bgcolor-advanced">200</td>
                <td class="bgcolor-advanced">400</td>
                <td class="bgcolor-advanced">400</td>
            </tr>
            <tr>
                <th>9 → 10</th>
                <td class="bgcolor-advanced">300</td>
                <td class="bgcolor-advanced">600</td>
                <td class="bgcolor-advanced">600</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'SimCalc',
    data () {
        return {
            basicData: 0,
            intermediateData: 0,
            advancedData: 0,
            currentSimEnergy: 0,

            needBasicData: 0,
            needIntermediateData: 0,
            needAdvancedData: 0,

            needSimEnergy_basic: 0,
            needSimEnergy_intermediate: 0,
            needSimEnergy_advanced: 0,
            needSimEnergy_sum: 0,
            needSimPurchase: 0,

            getBasicData: 218,
            getIntermediateData: 98,
            getAdvancedData: 53,
        }
    },
    methods: {
        simCalc: function () {
            if((this.needBasicData - this.basicData) / this.getBasicData < 0){
                this.needSimEnergy_basic = 0
            } else {
                this.needSimEnergy_basic = Math.ceil((this.needBasicData - this.basicData) / this.getBasicData)
            }
            if((this.needIntermediateData - this.intermediateData) / this.getIntermediateData < 0){
                this.needSimEnergy_intermediate = 0
            } else {
                this.needSimEnergy_intermediate = Math.ceil((this.needIntermediateData - this.intermediateData) / this.getIntermediateData) * 2
            }
            if((this.needAdvancedData - this.advancedData) / this.getAdvancedData < 0){
                this.needSimEnergy_advanced = 0
            } else {
                this.needSimEnergy_advanced = Math.ceil((this.needAdvancedData - this.advancedData) / this.getAdvancedData) * 3
            }

            if(this.needSimEnergy_basic + this.needSimEnergy_intermediate + this.needSimEnergy_advanced - this.currentSimEnergy < 0){
                this.needSimEnergy_sum = 0
            } else {
                this.needSimEnergy_sum = this.needSimEnergy_basic + this.needSimEnergy_intermediate + this.needSimEnergy_advanced - this.currentSimEnergy
            }

            this.needSimPurchase = this.needSimEnergy_sum / 3
        },
        openGetData: function () {
            $('.side-left').toggleClass('move')
        },
        openNeedData: function () {
            $('.side-right').toggleClass('move')
        },
    },
    updated: function () {
        this.simCalc()
    }
}
</script>

<style>
.container-simCalc {
    margin-top: calc(5vh + 30px);
}

table#table-sim {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
    /* font-size: 9pt; */

    -moz-transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}
table#table-sim tr{
    border-top: 1px solid #ddd;
    background: linear-gradient(to right, #fff, #eee, #fff);
}
table#table-sim .empty-line {
    /* border-top: unset; */
    background: unset;
    height: 4vh;
}
table#table-sim th, td{
    padding: 2px;
    width: calc(60vw / 3);
}
table#table-sim td{
    text-align: right;
}
table#table-sim input, select{
    width: 80%;
    text-align: right;
}

.side-left {
    -webkit-transform: translate(0, 0);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(0, 0);
    transition: transform 500ms;

    will-change: transform;
}
.side-left.move {
    -webkit-transform: translate(135px, 0px);
    transform: translate(135px, 0px);
}
div#div-getData {
    position: fixed;
    left: -135px;
    top: 40vh;
    width: 150px;
    height: 130px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #ddd;
    -moz-box-shadow: 1px 3px 6px #999;
    -webkit-box-shadow: 0px 3px 6px #999;
    box-shadow: 1px 3px 6px #999;

    text-align: center;
}
div#div-getData input {
    text-align: right;
}
div#div-getData .inputGroup-getData {
    margin: 10px;
    float: left;
}
div#div-getData .btn-getData {
    width: 15px;
    height: 130px;
    line-height: 130px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    float: right;
    background: #d3d3d3;
}
div#div-getData .btn-getData:hover {
    background: #c5c5c5;
    cursor: pointer;
}

.side-right {
    -webkit-transform: translate(0, 0);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(0, 0);
    transition: transform 500ms;

    will-change: transform;
}
.side-right.move {
    -webkit-transform: translate(-235px, 0px);
    transform: translate(-235px, 0px);
}
div#div-needData {
    position: fixed;
    right: -235px;
    top: 30vh;
    width: 250px;
    height: 220px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #ddd;
    -moz-box-shadow: 1px 3px 6px #999;
    -webkit-box-shadow: 0px 3px 6px #999;
    box-shadow: 1px 3px 6px #999;

    text-align: center;
}

table#table-needData{
    float: right;
    font-size: 9pt;
    margin: 10px;
}
table#table-needData td{
    width: 50px;
    padding: 0;
}
table#table-needData tr{
    height: 10px;
}
div#div-needData .btn-needData {
    width: 15px;
    height: 100%;
    line-height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    float: left;
    background: #d3d3d3;
}
div#div-needData .btn-needData:hover {
    background: #c5c5c5;
    cursor: pointer;
}

.bgcolor-basic {
    background-color: #449977;
}
.bgcolor-intermediate {
    background-color: #5E8107;
}
.bgcolor-advanced {
    background-color: #C8DA4B;
}
</style>
