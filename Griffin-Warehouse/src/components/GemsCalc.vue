<template>
<div class="container-gemsCalc">
    <table id="table-gems">
        <tr>
            <th>목표 보석 수량 입력</th>
            <td><input type="text" v-model="targetGems"></td>
        </tr>
        <tr>
            <th>남은 일수 입력</th>
            <td><input type="text" v-model="remainingDays"></td>
        </tr>
        <tr>
            <th>현재 보석 보유량</th>
            <td><input type="text" v-model="currentGems"></td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th>월정액 충전량</th>
            <td>{{ monthly }}</td>
        </tr>
        <tr>
            <th colspan="2">모의점수 하루 구매횟수</th>
        </tr>
        <tr>
            <td><input type="text" v-model="mockPurchase"></td>
            <td>{{ mockPurchase }}</td>
        </tr>
        <tr>
            <th>공유 보석 충전량</th>
            <td>{{ shareGems }}</td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th>최소 필요량</th>
            <td>{{ needGems }}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'GemsCalc',
    data () {
        return {
            targetGems: 0,
            remainingDays: 0,
            currentGems: 0,
            monthly: 0,
            mockPurchase: 0,
            shareGems: 0,
            needGems: 0,
        }
    },
    methods: {
    }
}
</script>

<style>
.container-gemsCalc {
    margin-top: calc(5vh + 30px);
}
table#table-gems {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    width: 30vw;

    -moz-transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}
table#table-gems tr{
    border-top: 1px solid #ddd;
    background: linear-gradient(to right, #fff, #eee, #fff);
}
table#table-gems .empty-line {
    background: unset;
    height: 4vh;
}
table#table-gems th, td{
    padding: 2px;
}
table#table-gems td{
    text-align: right;
}
table#table-gems input, select{
    width: 80%;
    text-align: right;
}
</style>
