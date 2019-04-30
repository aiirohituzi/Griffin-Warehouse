<template>
<div class="container-damageCalc">
    <div class="inputGroup-damage">
        <div class="input-damage">
            <input type="text" maxlength="3" v-model="tdollAtk" v-on:keyup="checkInputDamage">
        </div>
        <div class="input-addon-left">인형 순수 화력 스탯 입력</div>
    </div>
    <div class="inputGroup-damage">
        <div class="input-damage">
            <input type="text" maxlength="4" v-model="tdollSkill" v-on:keyup="checkInputDamage">
        </div>
        <div class="input-addon-left">인형 스킬 화력 배율(%) 입력</div>
    </div>
    <div class="inputGroup-damage">
        <div class="input-damage">
            <input type="text" maxlength="3" v-model="equipCritical" v-on:keyup="checkInputDamage">
        </div>
        <div class="input-addon-left">장비 치명상 입력</div>
    </div>

    <div class="container-content">
        <table class="table-damage table-damage-col-3">
            <tr>
                <th>버프 인형 선택</th>
                <th>화력 진형버프</th>
                <th>버프 스킬 화력 배율<input type="checkbox" class="input-check" v-model="buffSkillOn"></th>
            </tr>
            <tr>
                <td>
                    <select class="" v-model="tdoll_selected.first">
                        <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                    </select>
                </td>
            <!-- 선택한 버퍼의 버프스킬 배율 표시 -->
                <td>
                    <div class="label" v-if="tdoll_selected.first > 0">{{ tdoll[tdoll_selected.first].buff }}%</div>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.first > 0">{{ tdoll[tdoll_selected.first].skill }}%</div>
                </td>
            </tr>

            <!-- 하나 선택할때마다 다음 입력창이 추가되는 방식으로 -->
            <tr v-if="tdoll_selected.first > 0">
                <td>
                    <select class="" v-model="tdoll_selected.second">
                        <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                    </select>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.second > 0">{{ tdoll[tdoll_selected.second].buff }}%</div>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.second > 0">{{ tdoll[tdoll_selected.second].skill }}%</div>
                </td>
            </tr>

            <tr v-if="tdoll_selected.second > 0">
                <td>
                    <select class="" v-model="tdoll_selected.third">
                        <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                    </select>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.third > 0">{{ tdoll[tdoll_selected.third].buff }}%</div>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.third > 0">{{ tdoll[tdoll_selected.third].skill }}%</div>
                </td>
            </tr>

            <tr v-if="tdoll_selected.third > 0">
                <td>
                    <select class="" v-model="tdoll_selected.fourth">
                        <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                    </select>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.fourth > 0">{{ tdoll[tdoll_selected.fourth].buff }}%</div>
                </td>
                <td>
                    <div class="label" v-if="tdoll_selected.fourth > 0">{{ tdoll[tdoll_selected.fourth].skill }}%</div>
                </td>
            </tr>
            <tr>
                <th>버프 합계</th>
                <td><div class="label">{{ sumBuff }}%</div></td>
                <td><div class="label">{{ sumSkill }}%</div></td>
            </tr>
        </table>
    </div>

    <div class="container-content">
        <div id="fairy"><b>요정 정보 입력</b></div>
        <table class="table-damage table-damage-col-4">
            <tr>
                <th>화력 진형버프</th>
                <th>치명상 진형버프</th>
                <th>특성 선택 <input type="checkbox" class="input-check" v-model="fairyPassiveOn"></th>
                <th>스킬 화력 배율 <input type="checkbox" class="input-check" v-model="fairySkillOn"></th>
            </tr>
            <tr>
                <!-- 요정 진벞 입력 -->
                <td><input type="text" class="input-text" v-model="fairyStrBuff" v-on:keyup="checkInputDamage"></td>
                <td><input type="text" class="input-text" v-model="fairyCriticalBuff" v-on:keyup="checkInputDamage"></td>
                <!-- 요정 특성 선택 -->
                <td>
                    <select v-model="fairy_selected">
                        <option v-for="item in fairyPassive" :value="item.id">{{ item.name }}</option>
                    </select>
                </td>
                <!-- 요정 스킬 입력 -->
                <td><input type="text" class="input-text" v-model="fairySkill" v-on:keyup="checkInputDamage"></td>
            </tr>
            <tr>
                <td><div class="label">{{ fairyStrBuff }}%</div></td>
                <td><div class="label">{{ fairyCriticalBuff }}%</div></td>
                <td v-if="fairy_selected == 3"><input type="range" class="slider-damage" min="1" max="3" v-model="gyeokyangStack"> <span class="slider-value">{{ gyeokyangStack }}스택</span></td>
                <td v-else><div class="label">{{ fairyPassive[fairy_selected].buff }}%</div></td>
                <td><div class="label">{{ fairySkill }}%</div></td>
            </tr>
        </table>
    </div>

    <div class="inputGroup-damage">
        <div class="input-damage">
            <input type="text" maxlength="3" v-model="armor" v-on:keyup="checkInputDamage">
        </div>
        <div class="input-addon-left">장갑 적용 (0입력 시 과관통 자동 적용) <input class="check-damage" type="checkbox" style="width:unset;" v-model="armorOn"></div>
    </div>
    <div class="inputGroup-damage">
        <div class="input-damage">
            <input type="text" maxlength="3" v-model="critical" v-on:keyup="checkInputDamage">
        </div>
        <div class="input-addon-left">치명타 적용 (치명타 배율(%) 입력) <input class="check-damage" type="checkbox" style="width:unset;" v-model="criticalOn"></div>
    </div>
    
    <div class="container-content">
        <table class="table-damage table-damage-col-3">
            <tr>
                <td></td>
                <th>1링크</th>
                <th>5링크</th>
            </tr>
            <tr>
                <th>최소데미지</th>
                <td><div class="label">{{ Math.ceil(finalStatMin) }}</div></td>
                <td><div class="label">{{ Math.ceil(finalStatMin) * 5 }}</div></td>
            </tr>
            <tr>
                <th>최대데미지</th>
                <td><div class="label">{{ Math.ceil(finalStatMax) }}</div></td>
                <td><div class="label">{{ Math.ceil(finalStatMax) * 5 }}</div></td>
            </tr>
            
            <tr v-if="selectContender">
                <th>최소데미지(컨텐더)</th>
                <td><div class="label">{{ Math.ceil(finalStatMin * 1.4) }}</div></td>
                <td><div class="label">{{ Math.ceil(finalStatMin * 1.4) * 5 }}</div></td>
            </tr>
            <tr v-if="selectContender">
                <th>최대데미지(컨텐더)</th>
                <td><div class="label">{{ Math.ceil(finalStatMax * 1.4) }}</div></td>
                <td><div class="label">{{ Math.ceil(finalStatMax * 1.4) * 5 }}</div></td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'DamageCalc',
    data () {
        return {
            tdollAtk: 0,
            tdoll: [
                {id:0, name: '', buff: 0, skill: 0},
                {id:1, name: 'Mk23', buff: 36, skill: 20, skillN: 35},
                {id:2, name: 'P22', buff: 30, skill: 25},
                {id:3, name: '그리즐리', buff: 30, skill: 25},
                {id:4, name: 'K5', buff: 30, skill: 22},
                {id:5, name: '컨텐더', buff: 30, skill: '마탄 40'},
                {id:6, name: '나강 리볼버 MOD3', buff: 36, skill: 10},
                {id:7, name: '콜트 리볼버 MOD3', buff: 24, skill: 25},
                {id:8, name: '콜트 리볼버', buff: 24, skill: 22},
                {id:9, name: 'HK45', buff: 32, skill: 15},
                {id:10, name: 'PPK', buff: 0, skill: 10},
                {id:11, name: '세르듀코프', buff: 24, skill: 20},
                {id:12, name: 'Bren Ten', buff: 16, skill: 18},
                {id:13, name: 'CZ52', buff: 20, skill: 20},
                {id:14, name: '제리코', buff: 24, skill: 15},
                {id:15, name: '스테츠킨', buff: 12, skill: 0},
                {id:16, name: 'M9', buff: 20, skill: 0},
                {id:17, name: '마카로프', buff: 20, skill: 0},
                {id:18, name: '92식', buff: 0, skill: 10},
                {id:19, name: 'MP-446 MOD3(바이킹)', buff: 36, skill: 0},
                {id:20, name: 'MP-446(바이킹)', buff: 28, skill: 0},
                {id:21, name: 'SPP-1', buff: 12, skill: 0},
                {id:22, name: '웰로드', buff: 20, skill: 0},
                {id:23, name: 'NZ75', buff: 20, skill: 0},
                {id:24, name: '59식', buff: 20, skill: 0},
                {id:25, name: 'CZ75', buff: 16, skill: 0},
                {id:26, name: 'Spitfire', buff: 30, skill: 0},
                {id:27, name: 'P226', buff: 20, skill: 0},
                {id:28, name: '썬더', buff: 36, skill: 0},
                {id:29, name: 'MP-443(그라치)', buff: 20, skill: 0},
                {id:30, name: 'Gsh-18', buff: 24, skill: 0},
                {id:31, name: 'MP-448(스키프)', buff: 12, skill: 0},
                {id:32, name: 'Px4 스톰', buff: 24, skill: '치명타 50'},
            ],
            tdoll_selected: {
                first: 0,
                second: 0,
                third: 0,
                fourth: 0,
            },
            tdollSkill: 0,
            equipCritical: 0,
            selectContender: false,
            selectPx4: false,

            fairyStrBuff: 0,
            fairyCriticalBuff: 0,
            fairyPassive: [
                {id:0, name: '', buff:0},
                {id:1, name: '살상계1', buff:12},
                {id:2, name: '살상계2', buff:15},
                {id:3, name: '격양계', buff:10},
                {id:4, name: '돌격계', buff:0},
            ],
            gyeokyangStack: 1,
            fairySkill: 0,
            fairy_selected: 0,

            sumBuff: 0,
            sumSkill: 0,
            finalStatMin: 0,
            finalStatMax: 0,
            
            buffSkillOn: true,
            fairyPassiveOn: true,
            fairySkillOn: true,
            armorOn: false,
            armor: 0,
            criticalOn: false,
            critical: 150,
        }
    },
    methods: {
        sumTdoll: function () {
            var sum_buff = 0
            var sum_skill = 0

            var calc_buff = 0
            var calc_skill = 0
            var calc_fairyPassive = 0
            var calc_fairySkill = 0
            var calc_critical = 0
            var calc_Px4 = 1

            var finalStat = 0
            var finalStatMin = 0
            var finalStatMax = 0


            
            if(this.tdoll[this.tdoll_selected.first].name == "컨텐더" || this.tdoll[this.tdoll_selected.second].name == "컨텐더" || this.tdoll[this.tdoll_selected.third].name == "컨텐더" || this.tdoll[this.tdoll_selected.fourth].name == "컨텐더"){
                this.selectContender = true
            } else {
                this.selectContender = false
            }
            
            if(this.tdoll[this.tdoll_selected.first].name == "Px4 스톰" || this.tdoll[this.tdoll_selected.second].name == "Px4 스톰" || this.tdoll[this.tdoll_selected.third].name == "Px4 스톰" || this.tdoll[this.tdoll_selected.fourth].name == "Px4 스톰"){
                this.selectPx4 = true
            } else {
                this.selectPx4 = false
            }


            // ---------------- 선택한 버프 인형 데이터 연산 --------------------
            if(this.tdoll_selected.first > 0){
                if(this.tdoll[this.tdoll_selected.first].name == "컨텐더"){
                    sum_buff += this.tdoll[this.tdoll_selected.first].buff
                } else if(this.tdoll[this.tdoll_selected.first].name == "Px4 스톰"){
                    sum_buff += this.tdoll[this.tdoll_selected.first].buff
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.first].buff
                    sum_skill += this.tdoll[this.tdoll_selected.first].skill
                    // console.log(sum_skill)
                }
            } else {
                this.tdoll_selected.second = 0
                this.tdoll_selected.third = 0
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.second > 0){
                if(this.tdoll[this.tdoll_selected.second].name == "컨텐더"){
                    sum_buff += this.tdoll[this.tdoll_selected.second].buff
                } else if(this.tdoll[this.tdoll_selected.second].name == "Px4 스톰"){
                    sum_buff += this.tdoll[this.tdoll_selected.second].buff
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.second].buff
                    sum_skill = ((1 + (sum_skill / 100)) * (1 + (this.tdoll[this.tdoll_selected.second].skill / 100)) - 1) * 100
                    // console.log(sum_skill)
                }
            } else {
                this.tdoll_selected.third = 0
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.third > 0){
                if(this.tdoll[this.tdoll_selected.third].name == "컨텐더"){
                    sum_buff += this.tdoll[this.tdoll_selected.third].buff
                } else if(this.tdoll[this.tdoll_selected.third].name == "Px4 스톰"){
                    sum_buff += this.tdoll[this.tdoll_selected.third].buff
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.third].buff
                    sum_skill = ((1 + (sum_skill / 100)) * (1 + (this.tdoll[this.tdoll_selected.third].skill / 100)) - 1) * 100
                    // console.log(sum_skill)
                }
            } else {
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.fourth > 0){
                if(this.tdoll[this.tdoll_selected.fourth].name == "컨텐더"){
                    sum_buff += this.tdoll[this.tdoll_selected.fourth].buff
                } else if(this.tdoll[this.tdoll_selected.fourth].name == "Px4 스톰"){
                    sum_buff += this.tdoll[this.tdoll_selected.fourth].buff
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.fourth].buff
                    sum_skill = ((1 + (sum_skill / 100)) * (1 + (this.tdoll[this.tdoll_selected.fourth].skill / 100)) - 1) * 100
                    // console.log(sum_skill)
                }
            }

            calc_buff = sum_buff + parseInt(this.fairyStrBuff)



            // --------------- 각종 체크박스와 관련된 기능 ---------------
            if(this.buffSkillOn){
                calc_skill = sum_skill
            }
            if(this.fairyPassiveOn){
                if(this.fairyPassive[this.fairy_selected].id == 3){         // 격양계 특성일 때
                    calc_fairyPassive = this.fairyPassive[this.fairy_selected].buff
                    for(var i=0; i<this.gyeokyangStack-1; i++) {
                        calc_fairyPassive = (((1 + (calc_fairyPassive / 100)) * (1 + (this.fairyPassive[this.fairy_selected].buff / 100)) - 1) * 100).toFixed(1)
                    }
                    // console.log(calc_fairyPassive)
                } else {
                    calc_fairyPassive = this.fairyPassive[this.fairy_selected].buff
                }
            }
            if(this.fairySkillOn){
                calc_fairySkill = this.fairySkill
            }
            if(!this.armorOn){
                this.armor = 0
            } else if(this.armor == 0) {
                this.armor = -2
            }
            if(this.criticalOn){
                if(this.buffSkillOn && this.selectPx4){
                    calc_Px4 = 1.5
                }
                calc_critical = ((this.critical / 100) * (1 + (this.fairyCriticalBuff / 100)) * calc_Px4) + (this.equipCritical / 100)
                // console.log(calc_critical)
            } else {
                calc_critical = 1
            }

            this.sumBuff = sum_buff
            this.sumSkill = sum_skill.toFixed(4)


            finalStat = this.tdollAtk * (1 + (calc_buff / 100)) * (1 + (calc_skill / 100)) * (1 + (this.tdollSkill / 100)) * (1 + (calc_fairyPassive / 100)) * (1 + (calc_fairySkill / 100))

            finalStatMin = ((finalStat * 0.85) - this.armor) * calc_critical
            finalStatMax = ((finalStat * 1.15) - this.armor) * calc_critical

            if(finalStatMin > 0) {
                this.finalStatMin = finalStatMin
            } else {
                this.finalStatMin = 1
            }
            if(finalStatMax > 0) {
                this.finalStatMax = finalStatMax
            } else {
                this.finalStatMax = 1
            }
        },
        checkInputDamage: function () {
            var reg = /\D+/
            var reg2 = /^([0-9]|10)$/
            var regdig = /\d+/

            if(reg.test(this.tdollAtk)){
                this.tdollAtk = this.tdollAtk.replace(/\D+/, '')
            }
            if(reg.test(this.tdollSkill)){
                this.tdollSkill = this.tdollSkill.replace(/\D+/, '')
            }
            if(reg.test(this.fairyStrBuff)){
                this.fairyStrBuff = this.fairyStrBuff.replace(/\D+/, '')
            }
            if(reg.test(this.fairyCriticalBuff)){
                this.fairyCriticalBuff = this.fairyCriticalBuff.replace(/\D+/, '')
            }
            if(reg.test(this.fairySkill)){
                this.fairySkill = this.fairySkill.replace(/\D+/, '')
            }
            if(reg.test(this.armor)){
                this.armor = this.armor.replace(/\D+/, '')
            }
            if(reg.test(this.critical)){
                this.critical = this.critical.replace(/\D+/, '')
            }
        }
    },
    updated: function () {
        this.sumTdoll()
    }
}
</script>

<style>
.container-damageCalc {
    margin-top: calc(5vh + 30px);
}

.inputGroup-damage {
    height: 30px;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
}
.inputGroup-damage .input-addon-left {
    float: right;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: unset;
    background-color: #c3b9a2b6;
    padding: 3px;
    font-size: 10pt;
}
.inputGroup-damage .input-damage {
    float: right;
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
.inputGroup-damage .input-damage input{
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
.inputGroup-damage .input-addon-left .check-damage {
    height: 12px;
    margin: auto;
}

.container-content {
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #c3b9a2b6;
}
.container-content #fairy {
    margin: 10px;
    margin-left: 15px;
    font-size: 10pt;
}
.table-damage {
    border-collapse: collapse;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 10pt;
}
.table-damage tr {
    border-top: 2px solid #c3b9a2;
}
.table-damage th, td {
    padding: 2px;
}
.table-damage-col-3 th, td{
    width: calc((50vw - 40px) / 3);
}
.table-damage-col-4 th, td{
    width: calc((50vw - 40px) / 4);
}
.table-damage .input-text {
    width: 80%;
    text-align: right;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    padding: 4.5px;
    font-size: 10pt;
}
.table-damage .input-check {
    height: 12px;
}
.table-damage .slider-damage {
    display: inline-block;
    vertical-align: middle;
    width: 60%;
}
.table-damage .slider-value {
    display: inline-block;
    vertical-align: middle;
    font-size: 10pt;    
}
.table-damage select{
    width: 80%;
    text-align: right;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    padding-top: 2px;
    padding-bottom: 5px;
    font-size: 10pt;
}
.table-damage .label{
    width: 80%;
    text-align: right;
    margin: auto;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #EEEBE4;
    padding: 3px;
    font-size: 10pt;
}


@media only screen and (max-width: 767px) {
    .inputGroup-damage {
        height: 30px;
        width: 80vw;
    }
    .inputGroup-damage .input-addon-left {
        font-size: 8pt;
    }
    .inputGroup-damage .input-addon-right {
        font-size: 8pt;
    }
    .inputGroup-damage .input-label {
        font-size: 8pt;
    }
    .inputGroup-damage .input-addon-left .check-damage {
        height: 10px;
        margin: auto;
    }
    .inputGroup-damage .input-damage {
        font-size: 8pt;
    }
    .inputGroup-damage .input-damage input{
        font-size: 8pt;
    }

    .container-content {
        width: 80vw;
    }
    .container-content #fairy {
        font-size: 8pt;
    }
    .table-damage {
        font-size: 8pt;
    }
    .table-damage-col-3 th, td {
        width: calc((80vw - 40px) / 3);
    }
    .table-damage-col-4 th, td {
        width: calc((80vw - 40px) / 4);
    }
    .table-damage .input-text {
        font-size: 8pt;
    }
    .table-damage .input-check {
        height: 10px;
        margin: auto;
    }
    .table-damage .slider-value {
        font-size: 8pt;
    }
    .table-damage select{
        font-size: 8pt;
    }
    .table-damage .label{
        font-size: 8pt;
    }
}
</style>
