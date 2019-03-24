<template>
<div class="container-gemsCalc">
    <div id="radioGroup">
        <input type="radio" class="radio" value="0" v-model="calcMode">매일 패키지 계산<br>
        <input type="radio" class="radio" value="1" v-model="calcMode">목표 보석량으로 계산<br>
    </div>

    <div class="inputGroup">    
        <div class="input-addon-left">가격 / 수량 입력</div>
        <input class="input-gems-allAddon" type="text" maxlength="6" v-model="inputGems">
        <div v-if="calcMode == 0" class="input-addon-right">{{ inputGems }}개 * {{ remainingDays }}일 = {{ inputGems * remainingDays }}개</div>
        <div v-if="calcMode == 1" class="input-addon-right">{{ inputGems }}개</div>
    </div>

    <div class="inputGroup">    
        <div class="input-addon-left">남은 일수 입력</div>
        <input class="input-gems" type="text" maxlength="6" v-model="remainingDays">
    </div>

    <div class="inputGroup">    
        <div class="input-addon-left">현재 보석 보유량 입력</div>
        <input class="input-gems" type="text" maxlength="6" v-model="currentGems">
    </div>

    <div class="inputGroup">    
        <div class="input-addon-left">월정액 충전량</div>
        <div class="input-label">{{ monthly }}개</div>
    </div>

    <div class="inputGroup">    
        <div class="input-addon-left">모의점수 하루 구매횟수 입력</div>
        <input class="input-gems-allAddon" type="text" maxlength="2" v-model="mockPurchaseCount">
        <div class="input-addon-right">총 {{ mockGems }}개</div>
    </div>

    <div class="inputGroup">    
        <div class="input-addon-left">공유 보석 충전량</div>
        <div class="input-label">{{ shareGems }}개</div>
    </div>

    <div class="inputGroup" v-if="needGems < 0">
        <div class="input-addon-left">최소 필요량</div>
        <div class="input-label">충분, {{ needGems * -1 }}개 남음</div>
    </div>
    <div class="inputGroup" v-if="needGems >= 0">
        <div class="input-addon-left">최소 필요량</div>
        <div class="input-label">{{ needGems }}개 필요</div>
    </div>


    <!-- <table id="table-gems">
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
    </table> -->
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
            var todayLabel = new Date().getDay();   // 오늘의 요일 반환
            var weeklyCount = Math.floor((todayLabel + parseInt(this.remainingDays)) / 7)   // 일요일 기준으로 몇주 경과했는지 계산
            var afterDayLabel = (todayLabel + parseInt(this.remainingDays)) % 7     // D-day의 요일을 계산

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

            // console.log(todayLabel)
            // console.log(weeklyCount)
            // console.log(afterDayLabel)
            // 일~토: 0~6
            if(weeklyCount > 0) {           // (일요일 기준)1주 이상 경과했을 경우
                if(afterDayLabel > 0) {     // D-Day가 그 주의 월요일을 지난 경우
                    this.shareGems = (weeklyCount + 1) * 30
                } else {                    // D-Day가 그 주의 월요일을 지나지 않은 경우
                    this.shareGems = weeklyCount * 30
                }
            } else {                        // 입력 날짜가 1주일 미만인 경우
                if(afterDayLabel > 0) {     // D-Day가 그 주의 월요일을 지난 경우
                    this.shareGems = 30
                } else {                    // D-Day가 그 주의 월요일을 지나지 않은 경우
                    this.shareGems = 0
                }
            }

            this.needGems = targetGems - this.currentGems - this.monthly - this.mockGems - this.shareGems
        }
    },
    updated: function () {
        this.gemsCalc()
    }
}
</script>

<style>
.container-gemsCalc {
    margin-top: calc(40px + 10vh);
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
    
    -moz-transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
div#radioGroup {
    margin-top: 1vh;
    margin-bottom: 1vh;
    text-align: right;
}
.inputGroup {
    height: 30px;
    margin-top: 1vh;
    margin-bottom: 1vh;
}
.input-addon-left {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: unset;
    background-color: #c3b9a2b6;
    padding: 3px;
    font-size: 10pt;
}
.input-addon-right {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: unset;
    background-color: #c3b9a249;
    padding: 3px;
    font-size: 10pt;
}
.input-gems {
    float: left;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 4.5px;
    font-size: 10pt;
    width: 50px;
    text-align: right;
}
.input-gems-allAddon {
    float: left;
    border: 2px solid #c3b9a2;
    padding: 4.5px;
    font-size: 10pt;
    width: 50px;
    text-align: right;
}
.input-label {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #c3b9a249;
    padding: 3px;
    font-size: 10pt;
}
/* table#table-gems {
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
    width: calc(40vw / 2);
}
table#table-gems input{
    width: 80%;
    text-align: right;
}
table#table-gems .radio {
    width: 10%;
} */


@media only screen and (max-width: 767px) {
    .container-gemsCalc {
        width: 80vw;
    }
    div#radioGroup {
        font-size: 9pt;
    }
    .input-addon-left {
        font-size: 8pt;
    }
    .input-addon-right {
        font-size: 8pt;
    }
    .input-gems {
        font-size: 8pt;
        width: 50px;
    }
    .input-gems-allAddon {
        font-size: 8pt;
        width: 50px;
    }
    .input-label {
        font-size: 8pt;
    }
    /* table#table-gems {
        width: 60vw;
        font-size: 9pt;
    }
    table#table-gems td{
        width: calc(60vw / 2);
    } */
}
</style>
