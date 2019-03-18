<template>
<div class="container-damageCalc">
    <table id="table-damage">
        <tr>
            <th>인형 화력 스탯 입력</th>
            <td><input type="text" v-model="tdollAtk"></td>
            <td>화력 : {{ tdollAtk }}</td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th>버프 인형 선택</th>
            <th>진형 버프</th>
            <th>버프 스킬 배율 <input type="checkbox" style="width:unset;" v-model="buffSkillOn"></th>
        </tr>
        <tr>
            <td>
                <select class="" v-model="tdoll_selected.first">
                    <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                </select>
            </td>
        <!-- 선택한 버퍼의 버프스킬 배율 표시 -->
            <td>
                <div v-if="tdoll_selected.first > 0">{{ tdoll[tdoll_selected.first].buff }}%</div>
            </td>
            <td>
                <div v-if="tdoll_selected.first > 0">{{ tdoll[tdoll_selected.first].skill }}%</div>
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
                <div v-if="tdoll_selected.second > 0">{{ tdoll[tdoll_selected.second].buff }}%</div>
            </td>
            <td>
                <div v-if="tdoll_selected.second > 0">{{ tdoll[tdoll_selected.second].skill }}%</div>
            </td>
        </tr>

        <tr v-if="tdoll_selected.second > 0">
            <td>
                <select class="" v-model="tdoll_selected.third">
                    <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                </select>
            </td>
            <td>
                <div v-if="tdoll_selected.third > 0">{{ tdoll[tdoll_selected.third].buff }}%</div>
            </td>
            <td>
                <div v-if="tdoll_selected.third > 0">{{ tdoll[tdoll_selected.third].skill }}%</div>
            </td>
        </tr>

        <tr v-if="tdoll_selected.third > 0">
            <td>
                <select class="" v-model="tdoll_selected.fourth">
                    <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
                </select>
            </td>
            <td>
                <div v-if="tdoll_selected.fourth > 0">{{ tdoll[tdoll_selected.fourth].buff }}%</div>
            </td>
            <td>
                <div v-if="tdoll_selected.fourth > 0">{{ tdoll[tdoll_selected.fourth].skill }}%</div>
            </td>
        </tr>
        <tr>
            <th>버프 합계</th>
            <td>{{ sumBuff }}%</td>
            <td>{{ sumSkill }}%</td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th>요정 진형 버프</th>
            <th>요정 특성 선택 <input type="checkbox" style="width:unset;" v-model="fairyPassiveOn"></th>
            <th>요정 스킬 배율 <input type="checkbox" style="width:unset;" v-model="fairySkillOn"></th>
        </tr>
        <tr>
            <!-- 요정 진벞 입력 -->
            <td><input type="text" v-model="fairyBuff"></td>
            <!-- 요정 특성 선택 -->
            <td>
                <select v-model="fairy_selected">
                    <option v-for="item in fairyPassive" :value="item.id">{{ item.name }}</option>
                </select>
            </td>
            <!-- 요정 스킬 입력 -->
            <td><input type="text" v-model="fairySkill"></td>
        </tr>
        <tr>
            <td>{{ fairyBuff }}%</td>
            <td>{{ fairyPassive[fairy_selected].buff }}%</td>
            <td>{{ fairySkill }}%</td>
        </tr>

        <tr class="empty-line">
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <th>인형 스킬 배율 입력</th>
            <td><input type="text" v-model="tdollSkill"></td>
            <td>스킬 배율 : {{ tdollSkill }}%</td>
        </tr>
        
        <tr class="empty-line">
            <td></td>
            <td></td>
            <td></td>
        </tr>        
        
        <tr>
            <td></td>
            <th>1링크</th>
            <th>5링크</th>
        </tr>
        <tr>
            <th>최소데미지</th>
            <td>{{ (finalStat * 0.85).toFixed(2) }}</td>
            <td>{{ (finalStat * 0.85 * 5).toFixed(2) }}</td>
        </tr>
        <tr>
            <th>최대데미지</th>
            <td>{{ (finalStat * 1.15).toFixed(2) }}</td>
            <td>{{ (finalStat * 1.15 * 5).toFixed(2) }}</td>
        </tr>
        
        <tr v-if="selectContender">
            <th>최소데미지(컨텐더)</th>
            <td>{{ (finalStat * 0.85 * 1.4).toFixed(2) }}</td>
            <td>{{ (finalStat * 0.85 * 1.4 * 5).toFixed(2) }}</td>
        </tr>
        <tr v-if="selectContender">
            <th>최대데미지(컨텐더)</th>
            <td>{{ (finalStat * 1.15 * 1.4).toFixed(2) }}</td>
            <td>{{ (finalStat * 1.15 * 1.4 * 5).toFixed(2) }}</td>
        </tr>
    </table>
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
                {id:1, name: '나강 리볼버 MOD3', buff: 36, skill: 10},
                {id:2, name: '콜트 리볼버 MOD3', buff: 24, skill: 25},
                {id:3, name: '그리즐리', buff: 30, skill: 25},
                {id:4, name: '컨텐더', buff: 30, skill: '마탄 40'},
                {id:5, name: 'P22', buff: 30, skill: 25},
                {id:6, name: 'Mk23', buff: 36, skill: 20, skillN: 35},
                {id:7, name: 'K5', buff: 30, skill: 22},
                {id:8, name: 'HK45', buff: 32, skill: 15},
            ],
            tdoll_selected: {
                first: 0,
                second: 0,
                third: 0,
                fourth: 0,
            },
            tdollSkill: 0,
            selectContender: false,

            fairyBuff: 0,
            fairyPassive: [
                {id:0, name: '', buff:0},
                {id:1, name: '살상계1', buff:12},
                {id:2, name: '살상계2', buff:15},
                {id:3, name: '격양계', buff:10},
                {id:4, name: '돌격계', buff:0},
            ],
            fairySkill: 0,
            fairy_selected: 0,

            sumBuff: 0,
            sumSkill: 0,
            finalStat: 0,
            
            buffSkillOn: true,
            fairyPassiveOn: true,
            fairySkillOn: true,
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

            var finalStat = 0

            if(this.tdoll_selected.first > 0){
                if(this.tdoll[this.tdoll_selected.first].id != 4){
                    sum_buff += this.tdoll[this.tdoll_selected.first].buff
                    sum_skill += this.tdoll[this.tdoll_selected.first].skill
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.first].buff
                }
            } else {
                this.tdoll_selected.second = 0
                this.tdoll_selected.third = 0
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.second > 0){
                if(this.tdoll[this.tdoll_selected.second].id != 4){
                    sum_buff += this.tdoll[this.tdoll_selected.second].buff
                    sum_skill = ((1 + (sum_skill / 100)) * (1 + (this.tdoll[this.tdoll_selected.second].skill / 100)) - 1) * 100
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.second].buff
                }
            } else {
                this.tdoll_selected.third = 0
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.third > 0){
                if(this.tdoll[this.tdoll_selected.third].id != 4){
                    sum_buff += this.tdoll[this.tdoll_selected.third].buff
                    sum_skill = ((1 + (sum_skill / 100)) * (1 + (this.tdoll[this.tdoll_selected.third].skill / 100)) - 1) * 100
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.third].buff
                }
            } else {
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.fourth > 0){
                if(this.tdoll[this.tdoll_selected.fourth].id != 4){
                    sum_buff += this.tdoll[this.tdoll_selected.fourth].buff
                    sum_skill = ((1 + (sum_skill / 100)) * (1 + (this.tdoll[this.tdoll_selected.fourth].skill / 100)) - 1) * 100
                } else {
                    sum_buff += this.tdoll[this.tdoll_selected.fourth].buff
                }
            }

            calc_buff = sum_buff + parseInt(this.fairyBuff)

            if(this.buffSkillOn){
                calc_skill = sum_skill
            }
            if(this.fairyPassiveOn){
                calc_fairyPassive = this.fairyPassive[this.fairy_selected].buff
            }
            if(this.fairySkillOn){
                calc_fairySkill = this.fairySkill
            }

            this.sumBuff = sum_buff
            this.sumSkill = sum_skill.toFixed(4)


            finalStat = this.tdollAtk * (1 + (calc_buff / 100)) * (1 + (calc_skill / 100)) * (1 + (this.tdollSkill / 100)) * (1 + (calc_fairyPassive / 100)) * (1 + (calc_fairySkill / 100))

            this.finalStat = Math.floor(finalStat)
            
            if(this.tdoll_selected.first == 4 || this.tdoll_selected.second == 4 || this.tdoll_selected.third == 4 || this.tdoll_selected.fourth == 4){
                this.selectContender = true
            } else {
                this.selectContender = false
            }
        },
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
table#table-damage {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
    /* font-size: 9pt; */

    -moz-transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}
table#table-damage tr{
    border-top: 1px solid #ddd;
    background: linear-gradient(to right, #fff, #eee, #fff);
}
table#table-damage .empty-line {
    /* border-top: unset; */
    background: unset;
    height: 4vh;
}
table#table-damage th, td{
    padding: 2px;
    width: calc(60vw / 3);
}
table#table-damage td{
    text-align: right;
}
table#table-damage input, select{
    width: 80%;
    text-align: right;
}
</style>
