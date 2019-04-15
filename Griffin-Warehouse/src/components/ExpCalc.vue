<template>
<div class="container-expCalc">
    <div class="tabnav-exp">
        <div class="tabBtn-exp">인형</div>
        <div class="tabBtn-exp">요정</div>
        <div class="tabBtn-exp">화력지원소대</div>
    </div>
    <div id="tdoll" class="tab-exp">
        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 레벨</div>
            <div class="input-exp">
                <input type="text" maxlength="3" v-model="currentLv">
            </div>
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">현재 경험치 </div>
            <div class="input-exp">
                <input type="text" v-model="currentExp">
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
                <input v-if="calcMode == 'level'" type="text" maxlength="3" v-model="target">
                <input v-if="calcMode == 'exp'" type="text" v-model="target">
            </div>
        </div>

        <div class="radioCheckGroup">
            <span>리더</span><input type="checkbox" v-model="leader">
            <span>MVP</span><input type="checkbox" v-model="mvp">
            <span>서약 여부</span><input type="checkbox" v-model="pledge">
        </div>

        <div class="inputGroup-exp">    
            <div class="input-addon-left">최대 링크수 제한</div>
            <div class="input-exp-allAddon">
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
            <div class="input-label">{{ needCount }}</div>
        </div>
    </div>
    <div id="fairy" style="display:none">
        요정
    </div>
    <div id="fireSupportUnit" style="display:none">
        화력지원소대
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

            calcMode: 'level',

            currentLv: 1,
            currentExp: 0,
            target: 100,

            area: [
                {id:0, name: '4-3e', exp: 370*4, penalty: 65},
                {id:1, name: '0-2', exp: 490*5, penalty: 100},
                {id:2, name: '8-1n', exp: 500*5, penalty: 111},
                {id:3, name: '11-5', exp: 550*5, penalty: 120},
                {id:4, name: '5-4e 보스런', exp: 430*5, penalty: 83},   // 보스는 2배 860
                {id:5, name: '0-4 보스런', exp: 500*4, penalty: 106},    // 보스 2배 1000
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

            needExp: 0,
            needCount: 0,
        }
    },
    methods: {
        expCalc: function () {
            this.getExp = this.area[this.area_selected].exp
            
            // 1~9, 10~29, 30~69, 70~89, 90~120 구간별로 편제별 경험치 차별적용
            var cumulativeExp = this.exp[this.currentLv-1] + parseInt(this.currentExp)
            var targetExp
            var needCount = 0
            var penaltyLv = this.area[this.area_selected].penalty

            if(this.calcMode == 'level') {
                targetExp = this.exp[this.target-1]
                this.needExp = this.exp[this.target-1] - (this.exp[this.currentLv-1] + parseInt(this.currentExp))
            } else if(this.calcMode == 'exp') {
                targetExp = parseInt(this.target)
                this.needExp = targetExp - (this.exp[this.currentLv-1] + parseInt(this.currentExp))
            }

            console.log(targetExp)
            for(needCount = 0; cumulativeExp < targetExp; needCount++) {
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

                cumulativeExp += this.getExpFinal(cumulativeExp, penaltyLv) * this.pledgeCoefficient * this.mvpCoefficient * this.leaderCoefficient
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
        }
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
    
    -moz-transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
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
    border: 1px solid black;
}

.tab-exp {
    border: 1px solid black;
    padding: 5px;
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
.inputGroup-exp .input-exp-allAddon .slider-exp {
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

@media only screen and (max-width: 767px) {
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
}
</style>