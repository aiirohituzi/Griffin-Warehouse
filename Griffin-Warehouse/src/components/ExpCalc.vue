<template>
<div class="container-expCalc">
    <div class="tabnav-exp">
        <div id="tabBtn-tdoll" class="tabBtn-exp current" @click="selectTab('tdoll')">인형</div>
        <div id="tabBtn-fairy" class="tabBtn-exp" @click="selectTab('fairy')">요정</div>
        <div id="tabBtn-fireSupportUnit" class="tabBtn-exp" @click="selectTab('fireSupportUnit')">화력지원소대</div>
    </div>
    <div id="tdoll" class="tab-exp">
        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 레벨</div>
            <div class="input-exp">
                <input type="text" maxlength="3" v-model="tdollCurrentLv" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">
            <div class="input-addon-left">현재 경험치</div>
            <div class="input-exp">
                <input type="text" v-model="tdollCurrentExp" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="radioCheckGroup">
            <span>목표 레벨</span><input type="radio" class="radio" v-model="calcMode" value="level">
            <span>목표 경험치</span><input type="radio" class="radio" v-model="calcMode" value="exp">
        </div>

        <div class="inputGroup-exp">
            <div v-if="calcMode == 'level'" class="input-addon-left">목표 레벨</div>
            <div v-if="calcMode == 'exp'" class="input-addon-left">목표 경험치</div>
            <div class="input-exp">
                <input v-if="calcMode == 'level'" type="text" maxlength="3" v-model="tdollTarget" v-on:keyup="checkInputExp">
                <input v-if="calcMode == 'exp'" type="text" v-model="tdollTarget">
            </div>
        </div>

        <div class="radioCheckGroup">
            <span title="1.2배">리더</span><input type="checkbox" title="1.2배" v-model="leader">
            <span title="1.3배">MVP</span><input type="checkbox" title="1.3배" v-model="mvp">
            <span title="개조 이후 2배">서약 여부</span><input type="checkbox" title="개조 이후 2배" v-model="pledge">
            <span>지휘요정 발동</span><input type="checkbox" v-model="command">
            <span>경험치 이벤트</span><input type="checkbox" v-model="event">
        </div>
        
        <div class="inputGroup-exp" v-if="event">    
            <div class="input-addon-left">경험치 이벤트 배율 입력</div>
            <div class="input-exp">
                <input type="text" v-model="eventCoefficient" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp" v-if="command">    
            <div class="input-addon-left">지휘요정 스킬 레벨</div>
            <div class="input-exp-allAddonSlider">
                <input type="range" class="slider-exp" min="1" max="10" v-model="commandSkillLv">
            </div>
            <div class="input-addon-right">{{ commandSkillLv }}Lv {{ commandSkill[commandSkillLv-1] }}%</div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">최대 링크수 제한</div>
            <div class="input-exp-allAddonSlider">
                <input type="range" class="slider-exp" min="1" max="5" v-model="dummy">
            </div>
            <div class="input-addon-right">{{ dummy }}링크</div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">레벨링 지역</div>
            <div class="input-exp-allAddon">
                <select v-model="area_selected">
                    <option v-for="item in area" :value="item.id">{{ item.name }}</option>
                </select>
            </div>
            <div class="input-addon-right">1회당 입수 경험치 {{ getExp }}</div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">남은 경험치</div>
            <div class="input-label">{{ needExp }}</div>
        </div>
        
        <div class="inputGroup-exp">    
            <div class="input-addon-left">남은 횟수</div>
            <div class="input-label">{{ needCount }}회</div>
        </div>
        
        <div class="inputGroup-exp">    
            <div class="input-addon-left">필요 작전보고서</div>
            <div class="input-label">{{ tdollNeedReport }}개</div>
        </div>
        
        <div class="inputGroup-exp">
            <div class="input-addon-left">작보 제작에 필요한 전지</div>
            <div class="input-label">{{ tdollNeedReport * 3 }}</div>
        </div>
    </div>



    <div id="fairy" class="tab-exp nonSelect">
        <!-- 입력받을 값: 현재레벨 현재경험치 목표레벨
        거지런계산은 힘듦 작보계산기만 일단 추가할것 -->

        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 레벨</div>
            <div class="input-exp">
                <input type="text" maxlength="3" v-model="fairyCurrentLv" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 경험치</div>
            <div class="input-exp">
                <input type="text" v-model="fairyCurrentExp" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">목표 레벨</div>
            <div class="input-exp">
                <input type="text" maxlength="3" v-model="fairyTarget" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">필요 작전보고서</div>
            <div class="input-label">{{ fairyNeedReport }}개</div>
        </div>
        
        <div class="inputGroup-exp">
            <div class="input-addon-left">작보 제작에 필요한 전지</div>
            <div class="input-label">{{ fairyNeedReport * 3 }}</div>
        </div>
    </div>




    <div id="fireSupportUnit" class="tab-exp nonSelect">
        <span>10Lv 훈련장 기준</span>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 레벨</div>
            <div class="input-exp">
                <input type="text" maxlength="3" v-model="FSTCurrentLv" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 경험치</div>
            <div class="input-exp">
                <input type="text" v-model="FSTCurrentExp" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">목표 레벨</div>
            <div class="input-exp">
                <input type="text" maxlength="3" v-model="FSTTarget" v-on:keyup="checkInputExp">
            </div>
        </div>

        <div class="inputGroup-exp">
            <div class="input-addon-left">필요 특수작전보고서</div>
            <div class="input-label">{{ FSTNeedReport }}개</div>
        </div>

        <div class="inputGroup-exp">
            <div class="input-addon-left">소요 시간</div>
            <div class="input-label">{{ FSTTime }}</div>
        </div>

        <div class="inputGroup-exp">
            <div class="input-addon-left">소모 전지</div>
            <div class="input-label">{{ FSTTime * 5 }}</div>
        </div>
        
        <div class="inputGroup-exp">
            <div class="input-addon-left">특작보 제작에 필요한 전지</div>
            <div class="input-label">{{ FSTNeedReport * 3 }}</div>
        </div>
    </div>

    <div id="div-penalty" class="side-right-exp">
        <div class="btn-penalty" @click="openPenalty()">경험치 패널티 표</div>
        <table id="table-penalty">
            <tr>
                <th>레벨링 지역</th>
                <th>패널티 레벨</th>
                <th>입수 경험치</th>
            </tr>
            <tr>
                <td>4-3e</td>
                <td>65</td>
                <td title="1480">370*4</td>
            </tr>
            <tr>
                <td>0-2</td>
                <td>100</td>
                <td title="2450">490*5</td>
            </tr>
            <tr>
                <td>8-1n</td>
                <td>111</td>
                <td title="2500">500*5</td>
            </tr>
            <tr>
                <td>11-5</td>
                <td>120</td>
                <td title="2750">550*5</td>
            </tr>
            <tr>
                <td>5-4e 보스런</td>
                <td>83</td>
                <td title="2150">430*5</td>
            </tr>
            <tr>
                <td>0-4 보스런</td>
                <td>106</td>
                <td title="2000">500*4</td>
            </tr>
            <tr>
                <td>특이점 4드라런</td>
                <td>106</td>
                <td title="2000">500*4</td>
            </tr>
        </table>
        <div class="div-penaltyExplanation">
            페널티 레벨을 초과할 시, 10레벨 당 획득치 20% 감소<br>
            50레벨이상 높을 경우, 획득경험치 10으로 고정
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ExpCalc',
    data () {
        return {
            exp: [0,100,300,600,1000,1500,2100,2800,3600,4500,5500,6600,7800,9100,10500,12000,13600,15300,17100,19000,21000,23100,25300,27600,30000,32500,35100,37900,41000,44400,48600,53200,58200,63600,69400,75700,82400,89600,97300,105500,114300,123600,133500,144000,155100,166900,179400,192500,206400,221000,236400,252500,269400,287100,305700,325200,345600,366900,389200,412500,436800,462100,488400,515800,544300,573900,604700,636700,669900,704300,749400,796200,844800,895200,947400,1001400,1057300,1115200,1175000,1236800,1300700,1366700,1434800,1505100,1577700,1652500,1729600,1809100,1891000,1975300,2087900,2204000,2323500,2446600,2573300,2703700,2837800,2975700,3117500,3263200,3363200,3483200,3623200,3783200,3963200,4163200,4383200,4623200,4903200,5263200,5743200,6383200,7283200,8483200,10083200,12283200,15283200,19283200,24283200,30283200],
            exp_pledge: [0,100,300,600,1000,1500,2100,2800,3600,4500,5500,6600,7800,9100,10500,12000,13600,15300,17100,19000,21000,23100,25300,27600,30000,32500,35100,37900,41000,44400,48600,53200,58200,63600,69400,75700,82400,89600,97300,105500,114300,123600,133500,144000,155100,166900,179400,192500,206400,221000,236400,252500,269400,287100,305700,325200,345600,366900,389200,412500,436800,462100,488400,515800,544300,573900,604700,636700,669900,704300,749400,796200,844800,895200,947400,1001400,1057300,1115200,1175000,1236800,1300700,1366700,1434800,1505100,1577700,1652500,1729600,1809100,1891000,1975300,2087900,2204000,2323500,2446600,2573300,2703700,2837800,2975700,3117500,3263200,3313200,3373200,3443200,3523200,3613200,3713200,3823200,3943200,4083200,4263200,4503200,4823200,5273200,5873200,6673200,7773200,9273200,11273200,13773200,16773200],

            exp_fairy: [0, 300, 900, 1800, 3000, 4500, 6300, 8400, 10800, 13500, 16500, 19800, 23400, 27300, 31500, 36000, 40800, 45900, 51400, 57400, 63900, 71000, 79000, 88000, 98000, 109000, 121200, 134600, 149300, 165300, 182800, 201700, 222200, 244400, 268300, 294000, 321600, 351100, 382700, 416400, 452300, 490500, 531000, 574000, 619500, 667700, 718600, 772300, 828900, 888500, 951200, 1017100, 1086300, 1158900, 1234900, 1314500, 1397800, 1484800, 1575700, 1670600, 1769600, 1872700, 1980100, 2091900, 2208200, 2329100, 2454700, 2585100, 2720400, 2860800, 3006300, 3157100, 3313200, 3474800, 3642000, 3814900, 3993600, 4178300, 4369000, 4565900, 4769100, 4978700, 5194800, 5417600, 5647200, 5883700, 6127200, 6377800, 6635700, 6901000, 7173800, 7454200, 7742400, 8038500, 8342600, 8654900, 8975500, 9304500, 9642000, 9999000],

            exp_FST: [0,500,1400,2700,4500,6700,9400,12600,16200,20200,24700,29700,35100,40900,47200,54000,61200,68800,77100,86100,95900,106500,118500,132000,147000,163500,181800,201900,223900,247900,274200,302500,333300,366600,402400,441000,482400,526600,574000,624600,678400,735700,796500,861000,929200,1001500,1077900,1158400,1243300,1332700,1426800,1525600,1629400,1738300,1852300,1971800,2096700,2227200,2363500,2505900,2654400,2809000,2970100,3137800,3312300,3493800,3682300,3877800,4080800,4291400,4509600,4735800,4970000,5212500,5463300,5722800,5990800,6267800,6553800,6849300,7154000,7468500,7792500,8127000,8471000,8826000,9191000,9567000,9954000,1035200,10761000,11182000,11614000,1205800,12514000,12983000,13464000,13957000,14463000,15000000],

            commandSkill: [5, 8, 10, 12, 14, 16, 18, 20, 22, 25],

            calcMode: 'level',

            tdollCurrentLv: 1,
            tdollCurrentExp: 0,
            tdollTarget: '',

            fairyCurrentLv: 1,
            fairyCurrentExp: 0,
            fairyTarget: '',

            FSTCurrentLv: 1,
            FSTCurrentExp: 0,
            FSTTarget: '',

            area: [
                {id:0, name: '4-3e', exp: 370*4, penalty: 65},
                {id:1, name: '0-2', exp: 490*5, penalty: 100},
                {id:2, name: '8-1n', exp: 500*5, penalty: 111},
                {id:3, name: '11-5', exp: 550*5, penalty: 120},
                {id:4, name: '5-4e 보스런', exp: 430*5, penalty: 83},   // 보스는 2배 860
                {id:5, name: '0-4 보스런', exp: 500*4, penalty: 106},    // 보스 2배 1000
                {id:6, name: '특이점 4드라런', exp: 500*4, penalty: 106},
            ],
            area_selected: 0,
            getExp: 370*4,

            dummy: 5,
            pledge: false,
            pledgeCoefficient: 1,
            mvp: false,
            mvpCoefficient: 1,
            leader: false,
            leaderCoefficient: 1,
            command: false,
            commandSkillLv: 10,
            commandCoefficient: 1,
            event: false,
            eventCoefficient: 2,

            needExp: 0,
            needCount: 0,
            tdollNeedReport: 0,
            fairyNeedReport: 0,
            FSTNeedReport: 0,

            FSTTime: 0,
        }
    },
    methods: {
        expCalc: function () {
            this.getExp = this.area[this.area_selected].exp
            
            // 1~9, 10~29, 30~69, 70~89, 90~120 구간별로 편제별 경험치 차별적용
            var cumulativeExp = this.exp[this.tdollCurrentLv-1] + parseInt(this.tdollCurrentExp)
            var tdollTargetExp
            var needCount = 0
            var penaltyLv = this.area[this.area_selected].penalty

            var eventCoefficient = 1

            if(this.calcMode == 'level') {
                tdollTargetExp = this.exp[this.tdollTarget-1]
                this.needExp = this.exp[this.tdollTarget-1] - (this.exp[this.tdollCurrentLv-1] + parseInt(this.tdollCurrentExp))
            } else if(this.calcMode == 'exp') {
                tdollTargetExp = parseInt(this.tdollTarget)
                this.needExp = tdollTargetExp - (this.exp[this.tdollCurrentLv-1] + parseInt(this.tdollCurrentExp))
            }


            var fairyNeedExp = this.exp_fairy[this.fairyTarget-1] - (this.exp_fairy[this.fairyCurrentLv-1] + parseInt(this.fairyCurrentExp))
            this.fairyNeedReport = Math.ceil(fairyNeedExp / 3000)
            

            var FSTNeedExp = this.exp_FST[this.FSTTarget-1] - (this.exp_FST[this.FSTCurrentLv-1] + parseInt(this.FSTCurrentExp))
            this.FSTNeedReport = Math.ceil(FSTNeedExp / 3000)
            this.FSTTime = Math.ceil(this.FSTNeedReport / 15)


            if(!this.pledge){
                this.tdollNeedReport = Math.ceil(this.needExp / 3000)
            } else {
                this.tdollNeedReport = Math.ceil((this.exp_pledge[this.tdollTarget-1] - (this.exp_pledge[this.tdollCurrentLv-1] + parseInt(this.tdollCurrentExp) / 2)) / 3000)
                // console.log("타겟 : " + this.exp_pledge[this.tdollTarget-1])
                // console.log("현재렙의 누적exp : " + this.exp_pledge[this.tdollCurrentLv-1])
                // console.log("현재 필요 : " + (this.exp_pledge[this.tdollTarget-1] - this.exp_pledge[this.tdollCurrentLv-1] / 2))
                // console.log("현재 exp : " + parseInt(this.tdollCurrentExp))
            }

            for(needCount = 0; cumulativeExp < tdollTargetExp; needCount++) {
                if(this.getExpFinal(cumulativeExp, penaltyLv) == 10) {
                    break
                }

                if(this.pledge) {
                    if(cumulativeExp >= this.exp[99]) {
                        this.pledgeCoefficient = 2
                    }
                } else {
                    this.pledgeCoefficient = 1
                }

                if(this.mvp) {
                    this.mvpCoefficient = 1.3
                } else {
                    this.mvpCoefficient = 1
                }
                
                if(this.leader) {
                    this.leaderCoefficient = 1.2
                } else {
                    this.leaderCoefficient = 1
                }

                if(this.command) {
                    this.commandCoefficient = 1 + this.commandSkill[this.commandSkillLv-1] / 100
                } else {
                    this.commandCoefficient = 1
                }

                if(this.event) {
                    if(this.eventCoefficient != '' && this.eventCoefficient > 0) {
                        eventCoefficient = this.eventCoefficient
                    }
                }

                cumulativeExp += this.getExpFinal(cumulativeExp, penaltyLv) * this.pledgeCoefficient * this.mvpCoefficient * this.leaderCoefficient * this.commandCoefficient * eventCoefficient
            }

            if(this.getExpFinal(cumulativeExp, penaltyLv) == 10) {
                this.needCount = needCount + "회 + α (이후 경험치는 10으로 고정)"
            } else {
                this.needCount = needCount
            }
        },
        getExpFinal: function (cumulativeExp, penaltyLv) {
            if(this.getPenalty(cumulativeExp, penaltyLv) == 0) {
                return 10
            } else {
                return this.getExp * this.getPenalty(cumulativeExp, penaltyLv) * this.getDummy(cumulativeExp)
            }
        },
        getPenalty: function (cumulativeExp, penaltyLv) {
            if(cumulativeExp >= this.exp[(penaltyLv + 50) - 1]) {
                return 0
            } else if(cumulativeExp > this.exp[(penaltyLv + 40) - 1]) {
                return 0.2
            } else if(cumulativeExp > this.exp[(penaltyLv + 30) - 1]) {
                return 0.4
            } else if(cumulativeExp > this.exp[(penaltyLv + 20) - 1]) {
                return 0.6
            } else if(cumulativeExp > this.exp[(penaltyLv + 10) - 1]) {
                return 0.8
            } else {
                return 1
            }
        },
        getDummy: function (cumulativeExp) {
            if(cumulativeExp >= this.exp[89]) {
                if(this.dummy < 5) {
                    return 0.5 + (0.5 * this.dummy)
                } else {
                    return 3
                }
            } else if(cumulativeExp >= this.exp[69]) {
                if(this.dummy < 4) {
                    return 0.5 + (0.5 * this.dummy)
                } else {
                    return 2.5
                }
            } else if(cumulativeExp >= this.exp[29]) {
                if(this.dummy < 3) {
                    return 0.5 + (0.5 * this.dummy)
                } else {
                    return 2
                }
            } else if(cumulativeExp >= this.exp[9]) {
                if(this.dummy < 2) {
                    return 0.5 + (0.5 * this.dummy)
                } else {
                    return 1.5
                }
            } else {
                return 1
            }
        },

        selectTab: function (divId) {
            $('#tdoll').addClass('nonSelect')
            $('#fairy').addClass('nonSelect')
            $('#fireSupportUnit').addClass('nonSelect')
            
            $('.tabnav-exp').children().removeClass('current')

            $('#' + divId).removeClass('nonSelect')
            $('#tabBtn-' + divId).addClass('current')
        },

        checkInputExp: function (event) {
            var reg = /^([1-9]|[1-9][0-9]|100)$/
            var reg2 = /^([1-9]|[1-9][0-9]|1[0-1][0-9]|120)$/
            var regdig = /\d+/
            var regnondig = /\D+/

            if(!reg2.test(this.tdollCurrentLv)){        // 숫자를 입력받아도 범위가 제한된 값이라 예외처리를 따로 구분
                if(regdig.test(event.key)){
                    this.tdollCurrentLv = this.tdollCurrentLv.replace(event.key, '')
                } else {
                    this.tdollCurrentLv = this.tdollCurrentLv.replace(/\D+/, '')
                }
            }
            if(regnondig.test(this.tdollCurrentExp)){
                this.tdollCurrentExp = this.tdollCurrentExp.replace(/\D+/, '')
            }
            if(!reg2.test(this.tdollTarget)){
                if(regdig.test(event.key)){
                    this.tdollTarget = this.tdollTarget.replace(event.key, '')
                } else {
                    this.tdollTarget = this.tdollTarget.replace(/\D+/, '')
                }
            }


            if(!reg.test(this.fairyCurrentLv)){
                if(regdig.test(event.key)){
                    this.fairyCurrentLv = this.fairyCurrentLv.replace(event.key, '')
                } else {
                    this.fairyCurrentLv = this.fairyCurrentLv.replace(/\D+/, '')
                }
            }
            if(regnondig.test(this.fairyCurrentExp)){
                this.fairyCurrentExp = this.fairyCurrentExp.replace(/\D+/, '')
            }
            if(!reg.test(this.fairyTarget)){
                if(regdig.test(event.key)){
                    this.fairyTarget = this.fairyTarget.replace(event.key, '')
                } else {
                    this.fairyTarget = this.fairyTarget.replace(/\D+/, '')
                }
            }


            if(!reg.test(this.FSTCurrentLv)){
                if(regdig.test(event.key)){
                    this.FSTCurrentLv = this.FSTCurrentLv.replace(event.key, '')
                } else {
                    this.FSTCurrentLv = this.FSTCurrentLv.replace(/\D+/, '')
                }
            }
            if(regnondig.test(this.FSTCurrentExp)){
                this.FSTCurrentExp = this.FSTCurrentExp.replace(/\D+/, '')
            }
            if(!reg.test(this.FSTTarget)){
                if(regdig.test(event.key)){
                    this.FSTTarget = this.FSTTarget.replace(event.key, '')
                } else {
                    this.FSTTarget = this.FSTTarget.replace(/\D+/, '')
                }
            }
            
            if(regnondig.test(parseInt(this.eventCoefficient))){
                this.eventCoefficient = this.eventCoefficient.replace(/\D+/, '')
            }
        },
        
        openPenalty: function () {
            $('.side-right-exp').toggleClass('move')
        },
    },
    updated: function () {
        this.expCalc()
    }
}
</script>

<style>
.container-expCalc {
    margin-top: calc(40px + 10vh);
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    min-width: 300px;
}

.tabnav-exp {
    width: 100%;
    height: 30px;
    list-style: none;
}
.tabBtn-exp {
    width: calc(100% / 3);
    height: 100%;
    line-height: 30px;
    box-sizing: border-box;
    float: left;
    text-align: center;
    cursor: pointer;
    font-size: 10pt;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 2px solid #c3b9a2;
    background-color:#c3b9a2b6;
}
.tabnav-exp .current {
    background-color:#c3b9a2;
}

.tab-exp {
    border: 2px solid #c3b9a2;
    border-top: unset;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    padding: 10px;
    font-size: 10pt;
}

.nonSelect {
    display: none;
}

.radioCheckGroup {
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 10pt;
    vertical-align: middle;
}
.radioCheckGroup span, input[type=radio], input[type=checkbox] {
    vertical-align: middle;
}
.inputGroup-exp {
    height: 30px;
    margin-top: 1vh;
    margin-bottom: 1vh;
}
.inputGroup-exp .input-addon-left {
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
.inputGroup-exp .input-addon-right {
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
.inputGroup-exp .input-exp {
    float: left;
    border: 2px solid #c3b9a2;

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
.inputGroup-exp .input-exp input{
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
.inputGroup-exp .input-exp-allAddonSlider {
    float: left;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;

    border-radius: 0;
    -webkit-border-radius: 0;

    padding: 3px;

    font-size: 10pt;
    width: 90px;
}
.inputGroup-exp .input-exp-allAddonSlider .slider-exp {
    vertical-align: middle;
    width: 100%;
    
    margin-top: -10px;
    -webkit-margin-top: -10px;
    margin-left: auto;
    -webkit-margin-left: auto;
    margin-right: auto;
    -webkit-margin-right: auto;
    margin-bottom: -5px;
    -webkit-margin-bottom: -5px;
    padding: 0;
    -webkit-padding: 0;
}
.inputGroup-exp .input-exp-allAddon {
    float: left;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;

    border-radius: 0;
    -webkit-border-radius: 0;

    padding: 3px;

    font-size: 10pt;
    width: 90px;
}
.inputGroup-exp .input-exp-allAddon select {
    -webkit-appearance: none;

    border: unset;
    -webkit-border: unset;
    
    margin: 0;
    -webkit-margin: 0;

    padding: 0;
    -webkit-padding: 0;
    
    background: url('../assets/select.png') no-repeat center right;
    background-size: 17px 20px;
    
    font-size: 10pt;
    width: 100%;
    text-align: right;
}
.inputGroup-exp .input-label {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #c3b9a249;
    padding: 3px;
    font-size: 10pt;
}



.side-right-exp {
    -webkit-transform: translate(0, 0);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(0, 0);
    transition: transform 500ms;

    will-change: transform;
}
.side-right-exp.move {
    -webkit-transform: translate(-335px, 0px);
    transform: translate(-335px, 0px);
}
div#div-penalty {
    position: fixed;
    right: -335px;
    top: 30vh;
    width: 350px;
    height: 222px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #c3b9a2b6;
    -moz-box-shadow: 1px 3px 6px #999;
    -webkit-box-shadow: 0px 3px 6px #999;
    box-shadow: 1px 3px 6px #999;

    text-align: center;
}
table#table-penalty{
    float: right;
    font-size: 9pt;
    margin: 10px;
}
table#table-penalty th{
    background: #afa48a;
}
table#table-penalty td{
    width: 100px;
    padding: 0;
    background-color: #c3b9a2;
}
table#table-penalty tr{
    height: 18px;
}
div#div-penalty .btn-penalty {
    width: 15px;
    height: 100%;
    line-height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    float: left;
    background-color: #c3b9a2;
    font-size: 8pt;
    writing-mode: vertical-lr;
}
div#div-penalty .btn-penalty:hover {
    background: #9c9175;
    cursor: pointer;
}
div#div-penalty .div-penaltyExplanation {
    font-size: 8pt;
    margin: 10px;
}

@media only screen and (max-width: 767px) {
    .tabBtn-exp {
        font-size: 8pt;
    }
    .radioCheckGroup {
        font-size: 9pt;
    }
    .inputGroup-exp .input-addon-left {
        font-size: 8pt;
    }
    .inputGroup-exp .input-addon-right {
        font-size: 8pt;
    }
    .inputGroup-exp .input-exp {
        font-size: 8pt;
    }
    .inputGroup-exp .input-exp input {
        font-size: 8pt;
    }
    .inputGroup-exp .input-exp-allAddon {
        font-size: 8pt;
    }
    .inputGroup-exp .input-exp-allAddon .slider-exp {
        font-size: 8pt;

        margin-top: -7px;
        -webkit-margin-top: -7px;
        margin-left: auto;
        -webkit-margin-left: auto;
        margin-right: auto;
        -webkit-margin-right: auto;
        margin-bottom: -5px;
        -webkit-margin-bottom: -5px;
    }
    .inputGroup-exp .input-exp-allAddon select {
        font-size: 8pt;
    }
    .inputGroup-exp .input-label {
        font-size: 8pt;
    }

    .tab-exp {
        font-size: 8pt
    }
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .inputGroup-exp .input-exp {
        padding: 2.5px;
    }
    .inputGroup-exp .input-exp-allAddon {
        padding: 2.5px;
    }
}
</style>