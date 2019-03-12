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
        }
    },
    methods: {
    },
    updated: function () {
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
</style>
