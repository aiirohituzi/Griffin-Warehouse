<template>
<div>
    <!-- -------------------버퍼 선택----------------------- -->
    <table border='1'>
        <tr>
            <th>인형 선택</th>
            <th>진형 버프</th>
            <th>스킬 배율</th>
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
            <td>합계</td>
            <td id="sumBuff">0%</td>
            <td id="sumSkill">0%</td>
        </tr>
    </table>
    <!-- --------------------------------------------------- -->

    <!-- 요정 진벞 입력 -->
    <input type="text">
    <!-- 요정 스킬 입력 -->
    <input type="text">
    <!-- 요정 특성 선택 -->
    <!-- <select class="" v-model="">
        <option value="" v-for="">{{ temp }}</option>
    </select> -->

    <!-- 스킬 배율 입력 -->
    <input type="text">

    <!-- 최소데미지 1링크, 5링크 표시 -->
    <div></div>
    <div></div>
    <!-- 최대데미지 1링크, 5링크 표시 -->
    <div></div>
    <div></div>
</div>
</template>

<script>
export default {
    name: 'DamageCalc',
    data () {
        return {
            tdoll: [
                {id:0, name: '', buff: 0, skill: 0},
                {id:1, name: '나강 리볼버 MOD3', buff: 36, skill: 10},
                {id:2, name: '콜트 리볼버 MOD3', buff: 24, skill: 25},
                {id:3, name: '그리즐리', buff: 30, skill: 25},
                {id:4, name: '컨텐더', buff: 30, skill: 40},
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
            }
        }
    },
    methods: {
        sumTdoll: function () {
            var sum_buff = 0
            var sum_skill = 0
            if(this.tdoll_selected.first > 0){
                sum_buff += this.tdoll[this.tdoll_selected.first].buff
                sum_skill += this.tdoll[this.tdoll_selected.first].skill
            } else {
                this.tdoll_selected.second = 0
                this.tdoll_selected.third = 0
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.second > 0){
                sum_buff += this.tdoll[this.tdoll_selected.second].buff
                sum_skill += this.tdoll[this.tdoll_selected.second].skill
            } else {
                this.tdoll_selected.third = 0
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.third > 0){
                sum_buff += this.tdoll[this.tdoll_selected.third].buff
                sum_skill += this.tdoll[this.tdoll_selected.third].skill
            } else {
                this.tdoll_selected.fourth = 0
            }
            if(this.tdoll_selected.fourth > 0){
                sum_buff += this.tdoll[this.tdoll_selected.fourth].buff
                sum_skill += this.tdoll[this.tdoll_selected.fourth].skill
            }

            $('#sumBuff').text(sum_buff + '%')
            $('#sumSkill').text(sum_skill + '%')
        }
    },
    updated: function () {
        this.sumTdoll()
    }
}
</script>

<style>
</style>
