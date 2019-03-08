<template>
<div class="container-gemsCalc">
    <div id="radioGroup">
        <input type="radio" class="radio" value="0" v-model="calcMode">매일 패키지 계산<br>
        <input type="radio" class="radio" value="1" v-model="calcMode">목표 보석량으로 계산<br>
    </div>
    <table id="table-gems">
        <tr>
            <th>가격 / 수량 입력</th>
            <td><input type="text" v-model="inputGems"></td>
        </tr>
        <tr>
            <td colspan="2" v-if="calcMode == 0">{{ inputGems }}개 * {{ remainingDays }}일 = {{ inputGems * remainingDays }}개</td>
            <td colspan="2" v-if="calcMode == 1">{{ inputGems }}개</td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
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
            <td>{{ monthly }}개</td>
        </tr>
        <tr>
            <th colspan="2">모의점수 하루 구매횟수</th>
        </tr>
        <tr>
            <td><input type="text" v-model="mockPurchaseCount"></td>
            <td>{{ mockGems }}개</td>
        </tr>
        <tr>
            <th>공유 보석 충전량</th>
            <td>{{ shareGems }}개</td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th>최소 필요량</th>
            <td v-if="needGems < 0">{{ needGems * -1 }}개 남음</td>
            <td v-if="needGems >= 0">{{ needGems }}개 필요</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'GemsCalc',
    data () {
        return {
            calcMode: 0,
            inputGems: 0,
            remainingDays: 0,
            currentGems: 0,
            monthly: 0,
            mockPurchaseCount: 0,
            mockGems: 0,
            shareGems: 0,
            needGems: 0,
        }
    },
    methods: {
        gemsCalc: function () {
            var targetGems = 0
            var mockSum = 0
            var todayLabel = new Date().getDay();
            var monthlyCount = Math.floor((todayLabel + parseInt(this.remainingDays)) / 7)
            var afterDayLabel = (todayLabel + parseInt(this.remainingDays)) % 7

            if(this.calcMode == 0){
                targetGems = this.inputGems * this.remainingDays
            } else if(this.calcMode == 1) {
                targetGems = this.inputGems
            }

            this.monthly = this.remainingDays * 30

            for(var i=0; i<this.mockPurchaseCount; i++){
                mockSum += (i + 1) * 20
            }
            this.mockGems = mockSum * this.remainingDays

            if(afterDayLabel > 0) {
                this.shareGems = monthlyCount * 30
            } else {
                this.shareGems = (monthlyCount - 1) * 30
            }

            this.needGems = targetGems - this.currentGems - this.monthly - this.mockGems - this.shareGems
            // if(this.needGems < 0) {this.needGems = 0}
        }
    },
    updated: function () {
        this.gemsCalc()
    }
}
</script>

<style>
.container-gemsCalc {
    margin-top: calc(5vh + 30px);
}
div#radioGroup {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1vh;
    width: 40vw;
}
table#table-gems {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    width: 40vw;

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
table#table-gems input{
    width: 80%;
    text-align: right;
}
table#table-gems .radio {
    width: 10%;
}
</style>
