<template>
<div class="container-gemsCalc">
    <div class="radioGroup-gems">
        <input type="radio" value="0" v-model="calcMode"><span>매일 패키지 계산</span><br>
        <input type="radio" value="1" v-model="calcMode"><span>목표 보석량으로 계산</span><br>
    </div>

    <div class="inputGroup-gems">    
        <div class="input-addon-left">가격 / 수량 입력</div>
        <div class="input-gems-allAddon">
            <input type="text" maxlength="6" v-model="inputGems" v-on:keyup="checkInputGems">
        </div>
        <div v-if="calcMode == 0" class="input-addon-right">{{ inputGems }}개 * {{ remainingDays }}일 = {{ GemXDay }}개</div>
        <div v-if="calcMode == 1" class="input-addon-right">{{ inputGems }}개</div>
    </div>

    <div class="inputGroup-gems">    
        <div class="input-addon-left">남은 일수 입력</div>
        <div class="input-gems">
            <input type="text" maxlength="6" v-model="remainingDays" v-on:keyup="checkInputGems">
        </div>
    </div>

    <div class="inputGroup-gems">    
        <div class="input-addon-left">현재 보석 보유량 입력</div>
        <div class="input-gems">
            <input type="text" maxlength="6" v-model="currentGems" v-on:keyup="checkInputGems">
        </div>
    </div>

    <div class="inputGroup-gems">    
        <div class="input-addon-left">월정액 충전량</div>
        <div class="input-label">{{ monthly }}개</div>
    </div>

    <div class="inputGroup-gems">    
        <div class="input-addon-left">모의점수 하루 구매횟수 입력</div>
        <div class="input-gems-allAddon">
            <input type="text" maxlength="2" v-model="mockPurchaseCount" v-on:keyup="checkInputGems">
        </div>
        <div class="input-addon-right">총 {{ mockGems }}개</div>
    </div>

    <div class="inputGroup-gems">    
        <div class="input-addon-left">공유 보석 충전량</div>
        <div class="input-label">{{ shareGems }}개</div>
    </div>

    <div class="inputGroup-gems" v-if="needGems < 0">
        <div class="input-addon-left">최소 필요량</div>
        <div class="input-label">충분, {{ needGems * -1 }}개 남음</div>
    </div>
    <div class="inputGroup-gems" v-if="needGems >= 0">
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
            GemXDay: 0,
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
            var monthly = 0
            var mockGems = 0

            if(this.calcMode == 0){
                targetGems = this.inputGems * this.remainingDays
            } else if(this.calcMode == 1) {
                targetGems = this.inputGems
            }

            monthly = this.remainingDays * 30
            if(isNaN(monthly)) {
              this.monthly = 0
            } else {
              this.monthly = monthly
            }

            for(var i=0; i<this.mockPurchaseCount; i++){
                mockSum += (i + 1) * 20
            }
            mockGems = mockSum * this.remainingDays
            if(isNaN(mockGems)) {
              this.mockGems = 0
            } else {
              this.mockGems = mockGems
            }


            if(isNaN(this.inputGems * this.remainingDays)) {
              this.GemXDay = 0
            } else {
              this.GemXDay = this.inputGems * this.remainingDays
            }

            // console.log("todayLabel : " + todayLabel)
            // console.log("weeklyCount : " + weeklyCount)
            // console.log("afterDayLabel : " + afterDayLabel)
            // console.log("t+r : " + (parseInt(todayLabel) + parseInt(this.remainingDays)))
            // 일~토: 0~6
            if(this.remainingDays != 0) {
                if(weeklyCount > 0) {           // (일요일 기준)1주 이상 경과했을 경우
                    if(afterDayLabel > 0) {     // D-Day가 그 주의 월요일을 지난 경우
                        this.shareGems = weeklyCount * 30
                    } else {                    // D-Day가 그 주의 월요일을 지나지 않은 경우
                        this.shareGems = (weeklyCount - 1) * 30
                    }
                } else {                        // 입력 날짜가 1주일 미만인 경우
                    if((todayLabel == 0) && (afterDayLabel > 0)) {     // 오늘이 일요일 인경우, D-Day가 그 주의 월요일을 지난 경우
                        this.shareGems = 30
                    // } else if((todayLabel > 1) && (parseInt(todayLabel) + parseInt(this.remainingDays) >= 8)) {   // 오늘이 화~토요일이고 D-Day가 그 주의 월요일을 지난 경우
                    //     this.shareGems = 30
                    } else {                    // D-Day가 그 주의 월요일을 지나지 않은 경우
                        this.shareGems = 0
                    }
                }
            } else {
                this.shareGems = 0
            }

            this.needGems = targetGems - this.currentGems - this.monthly + this.mockGems - this.shareGems
        },
        checkInputGems: function () {
            var reg = /\D+/
            var reg2 = /^([0-9]|10)$/
            var regdig = /\d+/

            if(reg.test(this.inputGems)){
                this.inputGems = this.inputGems.replace(/\D+/, '')
            }
            if(reg.test(this.remainingDays)){
                this.remainingDays = this.remainingDays.replace(/\D+/, '')
            }
            if(reg.test(this.currentGems)){
                this.currentGems = this.currentGems.replace(/\D+/, '')
            }
            if(!reg2.test(this.mockPurchaseCount)){
                if(regdig.test(event.key)){
                    this.mockPurchaseCount = this.mockPurchaseCount.toString().replace(event.key, '')
                } else {
                    this.mockPurchaseCount = this.mockPurchaseCount.toString().replace(/\D+/, '')
                }
            }
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
    width: fit-content;
}
.radioGroup-gems {
    margin-top: 1vh;
    margin-bottom: 1vh;
    text-align: right;
    vertical-align: middle;
}
.radioGroup-gems span, input[type=radio] {
    vertical-align: middle;
}
.inputGroup-gems {
    height: 30px;
    margin-top: 1vh;
    margin-bottom: 1vh;
}
.inputGroup-gems .input-addon-left {
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
.inputGroup-gems .input-addon-right {
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
.inputGroup-gems .input-gems {
    float: left;
    border: 2px solid #c3b9a2;
    /* -webkit-appearance: none; */

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    
    -webkit-border-top-left-radius: 0;
    -webkit-border-bottom-left-radius: 0;
    -webkit-border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    
    padding: 3px;

    font-size: 10pt;
    width: 50px;
}
.inputGroup-gems .input-gems input{
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
.inputGroup-gems .input-gems-allAddon {
    float: left;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;

    border-radius: 0;
    -webkit-border-radius: 0;

    padding: 3px;

    font-size: 10pt;
    width: 50px;
}
.inputGroup-gems .input-gems-allAddon input{
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
.inputGroup-gems .input-label {
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
    .radioGroup-gems {
        font-size: 9pt;
    }
    .inputGroup-gems .input-addon-left {
        font-size: 8pt;
    }
    .inputGroup-gems .input-addon-right {
        font-size: 8pt;
    }
    .inputGroup-gems .input-gems {
        font-size: 8pt;
        padding: 3px;
    }
    .inputGroup-gems .input-gems input {
        font-size: 8pt;
    }
    .inputGroup-gems .input-gems-allAddon {
        font-size: 8pt;
        padding: 3px;
    }
    .inputGroup-gems .input-gems-allAddon input {
        font-size: 8pt;
    }
    .inputGroup-gems .input-label {
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
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .inputGroup-gems .input-gems {
        padding: 2.5px;
    }
    .inputGroup-gems .input-gems-allAddon {
        padding: 2.5px;
    }
}
@media only screen and (max-device-width : 768px) {
    .inputGroup-gems .input-gems {
        padding: 2.5px;
    }
    .inputGroup-gems .input-gems-allAddon {
        padding: 2.5px;
    }
}
</style>
