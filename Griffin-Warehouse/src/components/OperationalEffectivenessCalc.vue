<template>
<div class="container-OECalc">
    <!-- 인형병종 선택 (5 분리시켜서 따로 선택&계산) -->
    <div class="container-content">
        <table class="table-OE table-OE-col-5">
            <tr>
                <th>인형1 병종</th>
                <th>인형2 병종</th>
                <th>인형3 병종</th>
                <th>인형4 병종</th>
                <th>인형5 병종</th>
            </tr>
            <tr>
                <td>
                    <select v-model="firstTdoll.type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="secondTdoll.type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="thirdTdoll.type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="fourthTdoll.type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="fifthTdoll.type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>

    <!-- 입력받아야 할 값
    링크수, 장탄수(MG, SG 한정), 화력, 철갑, 치명률, 치명상, 사속, 명중
    체력, 회피, 별 수, 스킬렙 -->
    <div class="container-content">
        <table class="table-OE table-OE-col-6">
            <tr>
                <th></th>
                <th>인형1</th>
                <th>인형2</th>
                <th>인형3</th>
                <th>인형4</th>
                <th>인형5</th>
            </tr>
            <tr>
                <th>편제 수</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.link" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>장탄 수</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.bullet" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>화력</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.str" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>관통</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.armorPenetration" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>장갑</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.armor" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>치명률</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.criticalRate" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>치명상</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.criticalDamageRate" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>사속</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.agi" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>명중</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.dex" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>체력</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.hp" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>회피</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.agl" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>등급(별 수)</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.rating" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>스킬레벨</th>
                <td><input type="text" class="input-text" v-model="firstTdoll.skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="secondTdoll.skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="thirdTdoll.skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fourthTdoll.skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text" v-model="fifthTdoll.skillLv" v-on:keyup="checkInputOE"></td>
            </tr>
        </table>
    </div>

    <!-- 최종 작능 표시 (내부적으로 공격부, 방어부, 스킬부 나눠서 계산) -->
    <div class="container-content">
        <table class="table-OE table-OE-col-6">
            <tr>
                <th>인형1 작전능력</th>
                <th>인형2 작전능력</th>
                <th>인형3 작전능력</th>
                <th>인형4 작전능력</th>
                <th>인형5 작전능력</th>
                <th>제대작전능력</th>
            </tr>
            <tr>
                <td><div class="label">{{ firstTdoll.operationalEffectiveness }}</div></td>
                <td><div class="label">{{ secondTdoll.operationalEffectiveness }}</div></td>
                <td><div class="label">{{ thirdTdoll.operationalEffectiveness }}</div></td>
                <td><div class="label">{{ fourthTdoll.operationalEffectiveness }}</div></td>
                <td><div class="label">{{ fifthTdoll.operationalEffectiveness }}</div></td>
                <td>
                  <div class="label">
                  {{
                    firstTdoll.operationalEffectiveness + 
                    secondTdoll.operationalEffectiveness + 
                    thirdTdoll.operationalEffectiveness + 
                    fourthTdoll.operationalEffectiveness + 
                    fifthTdoll.operationalEffectiveness
                  }}
                  </div>
                </td>
            </tr>
        </table>
    </div>
<!-- 공격부

엠지
7*링크수*(장탄수*(화력+철갑/3)*(치명타*치명상+1)/(장탄수/3+4+200/사속)*명중/(명중+23)+8)

샷건
=6*링크수*(3*장탄수*(화력+철갑/3)*(치명타*치명상+1)/(1.5+장탄수*50/사속+0.5*장탄수)*명중/(명중+23)+8)

일반 병종(샷건 엠지 제외한 모든 병종)
5*링크수*((화력+철갑/3)*(치명타*치명상+1)*사속/50*명중/(명중+23)+8)

* 해당값을 올림 한게 공격부
* 치명상 150퍼센트면 0.5 180퍼센트면 0.8
* 치명타 20퍼면 0.2 88이면 0.88





방어부

체력*링크수*(35+회피)/35*(2.6*75/MAX(1,75-장갑)-1.6)

* 해당값을 올림 한게 방어부
* 체력은 총체력 / 링크수 한 값 5링 1200이면 체력 부는 240
* MAX() 는 샷건의 장갑이 너무 높아졌을 때 위한 장치 샷건 장갑이 75 밑이라고 가정한다면
체력*링크수*(35+회피)/35*(2.6*75/(75-장갑)-1.6)




스킬부

=링크수*(0.8+별수/10)*(35+(5*(스킬렙-1)))

* 해당값을 올림 한게 스킬부
* 별수는 말그대로 2,3,4,5성 의 그 숫자임 엑스트라는 5 -->
</div>
</template>

<script>
export default {
  name: 'OperationalEffectivenessCalc',
  data () {
    return {
      tdollType: ['MG', 'SG', 'SMG, AR, RF, HG'],
      firstTdoll: {
        type: 0,
        link: 0,
        bullet: 0,
        str: 0,
        armor: 0,
        armorPenetration: 0,
        criticalRate: 0,
        criticalDamageRate: 0,
        agi: 0,
        dex: 0,
        hp: 0,
        agl: 0,
        rating: 0,
        skillLv: 0,
        operationalEffectiveness: 0,
      },
      secondTdoll: {
        type: 0,
        link: 0,
        bullet: 0,
        str: 0,
        armor: 0,
        armorPenetration: 0,
        criticalRate: 0,
        criticalDamageRate: 0,
        agi: 0,
        dex: 0,
        hp: 0,
        agl: 0,
        rating: 0,
        skillLv: 0,
        operationalEffectiveness: 0,
      },
      thirdTdoll: {
        type: 0,
        link: 0,
        bullet: 0,
        str: 0,
        armor: 0,
        armorPenetration: 0,
        criticalRate: 0,
        criticalDamageRate: 0,
        agi: 0,
        dex: 0,
        hp: 0,
        agl: 0,
        rating: 0,
        skillLv: 0,
        operationalEffectiveness: 0,
      },
      fourthTdoll: {
        type: 0,
        link: 0,
        bullet: 0,
        str: 0,
        armor: 0,
        armorPenetration: 0,
        criticalRate: 0,
        criticalDamageRate: 0,
        agi: 0,
        dex: 0,
        hp: 0,
        agl: 0,
        rating: 0,
        skillLv: 0,
        operationalEffectiveness: 0,
      },
      fifthTdoll: {
        type: 0,
        link: 0,
        bullet: 0,
        str: 0,
        armor: 0,
        armorPenetration: 0,
        criticalRate: 0,
        criticalDamageRate: 0,
        agi: 0,
        dex: 0,
        hp: 0,
        agl: 0,
        rating: 0,
        skillLv: 0,
        operationalEffectiveness: 0,
      },
    }
  },
  methods: {
    checkInputOE: function () {
      var reg = /\D+/
    }
  }
}
</script>

<style>
.container-OECalc {
    margin-top: calc(5vh + 30px);
}

.container-content {
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #c3b9a2b6;
}
.table-OE {
    border-collapse: collapse;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 10pt;
}
.table-OE tr {
    border-top: 2px solid #c3b9a2;
}
.table-OE th, td {
    padding: 2px;
}
.table-OE-col-5 th, td{
    width: calc((50vw - 40px) / 5);
}
.table-OE-col-6 th, td{
    width: calc((50vw - 40px) / 6);
}
.table-OE .input-text {
    width: 80%;
    text-align: right;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    padding: 4.5px;
    font-size: 10pt;
}
.table-OE .input-check {
    height: 12px;
}
.table-OE .slider-damage {
    display: inline-block;
    vertical-align: middle;
    width: 60%;
}
.table-OE .slider-value {
    display: inline-block;
    vertical-align: middle;
    font-size: 10pt;    
}
.table-OE select{
    width: 80%;
    text-align: right;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    padding-top: 2px;
    padding-bottom: 5px;
    font-size: 10pt;
}
.table-OE .label{
    width: 80%;
    text-align: right;
    margin: auto;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #EEEBE4;
    padding: 3px;
    font-size: 10pt;
}
</style>