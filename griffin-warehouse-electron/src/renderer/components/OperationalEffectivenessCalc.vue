<template>
<div class="container-OECalc">
    <!-- 인형병종 선택 (5 분리시켜서 따로 선택&계산) -->
    <div class="container-content-OECalc">
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
                    <select v-model="tdollStat[0].type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="tdollStat[1].type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="tdollStat[2].type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="tdollStat[3].type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
                <td>
                    <select v-model="tdollStat[4].type">
                        <option v-for="item in tdollType" :value="item">{{ item }}</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>

    <!-- 입력받아야 할 값
    링크수, 장탄수(MG, SG 한정), 화력, 철갑, 치명률, 치명상, 사속, 명중
    체력, 회피, 별 수, 스킬렙 -->
    <div class="container-content-OECalc">
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
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].link" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].link" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>장탄 수</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].bullet" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].bullet" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>화력</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].str" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].str" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>관통</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].armorPenetration" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].armorPenetration" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>장갑</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].armor" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].armor" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>치명률</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].criticalRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].criticalRate" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>치명상</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].criticalDamageRate" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].criticalDamageRate" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>사속</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].agi" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].agi" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>명중</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].dex" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].dex" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>체력</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].hp" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].hp" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>회피</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].agl" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].agl" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>등급(별 수)</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].rating" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].rating" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>스킬1 레벨</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].skill1Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].skill1Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].skill1Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].skill1Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].skill1Lv" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>스킬2 레벨</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].skill2Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].skill2Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].skill2Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].skill2Lv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].skill2Lv" v-on:keyup="checkInputOE"></td>
            </tr>
        </table>
        <table class="table-OE table-OE-col-6">
            <tr>
                <th colspan="6">해당인형이 받는 진형버프의 수치를 입력</th>
            </tr>
            <tr>
                <th></th>
                <th>인형1 진형버프</th>
                <th>인형2 진형버프</th>
                <th>인형3 진형버프</th>
                <th>인형4 진형버프</th>
                <th>인형5 진형버프</th>
            </tr>
            <tr>
                <th>화력</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].strBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].strBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].strBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].strBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].strBuff" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>장갑</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].armorBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].armorBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].armorBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].armorBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].armorBuff" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>치명률</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].criticalRateBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].criticalRateBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].criticalRateBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].criticalRateBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].criticalRateBuff" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>사속</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].agiBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].agiBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].agiBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].agiBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].agiBuff" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>명중</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].dexBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].dexBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].dexBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].dexBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].dexBuff" v-on:keyup="checkInputOE"></td>
            </tr>
            <tr>
                <th>회피</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].aglBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].aglBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].aglBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].aglBuff" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].aglBuff" v-on:keyup="checkInputOE"></td>
            </tr>
        </table>
    </div>

    <!-- 최종 작능 표시 (내부적으로 공격부, 방어부, 스킬부 나눠서 계산) -->
    <div class="container-content-OECalc">
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
                <td><div class="label">{{ tdollStat[0].operationalEffectiveness }}</div></td>
                <td><div class="label">{{ tdollStat[1].operationalEffectiveness }}</div></td>
                <td><div class="label">{{ tdollStat[2].operationalEffectiveness }}</div></td>
                <td><div class="label">{{ tdollStat[3].operationalEffectiveness }}</div></td>
                <td><div class="label">{{ tdollStat[4].operationalEffectiveness }}</div></td>
                <td>
                  <div class="label">
                  {{
                    tdollStat[0].operationalEffectiveness + 
                    tdollStat[1].operationalEffectiveness + 
                    tdollStat[2].operationalEffectiveness + 
                    tdollStat[3].operationalEffectiveness + 
                    tdollStat[4].operationalEffectiveness
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
      tdollType: ['', 'MG', 'SG', 'SMG, AR, RF, HG'],
      tdollStat: [
        {
          type: '',
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
          skill1Lv: 0,
          skill2Lv: 0,
          operationalEffectiveness: 0,

          strBuff: 0,
          armorBuff: 0,
          criticalRateBuff: 0,
          agiBuff: 0,
          dexBuff: 0,
          aglBuff: 0
        },
        {
          type: '',
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
          skill1Lv: 0,
          skill2Lv: 0,
          operationalEffectiveness: 0,

          strBuff: 0,
          armorBuff: 0,
          criticalRateBuff: 0,
          agiBuff: 0,
          dexBuff: 0,
          aglBuff: 0
        },
        {
          type: '',
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
          skill1Lv: 0,
          skill2Lv: 0,
          operationalEffectiveness: 0,

          strBuff: 0,
          armorBuff: 0,
          criticalRateBuff: 0,
          agiBuff: 0,
          dexBuff: 0,
          aglBuff: 0
        },
        {
          type: '',
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
          skill1Lv: 0,
          skill2Lv: 0,
          operationalEffectiveness: 0,

          strBuff: 0,
          armorBuff: 0,
          criticalRateBuff: 0,
          agiBuff: 0,
          dexBuff: 0,
          aglBuff: 0
        },
        {
          type: '',
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
          skill1Lv: 0,
          skill2Lv: 0,
          operationalEffectiveness: 0,

          strBuff: 0,
          armorBuff: 0,
          criticalRateBuff: 0,
          agiBuff: 0,
          dexBuff: 0,
          aglBuff: 0
        }
      ]
    }
  },
  methods: {
    OperationalEffectivenessCalc: function () {
      var inputClassList = ['.firstTdoll', '.secondTdoll', '.thirdTdoll', '.fourthTdoll', '.fifthTdoll']
      var attack = 0
      var defense = 0
      var skill = 0

      for (var i = 0; i < 5; i++) {
        if (this.tdollStat[i].type !== '') {
          $(inputClassList[i]).attr('disabled', false)
        } else {
          $(inputClassList[i]).attr('disabled', true)
        }
      }

      for (i = 0; i < 5; i++) {
        if (this.tdollStat[i].type === '') {
          continue
        }

        var armor = Math.ceil(this.tdollStat[i].armor * (1 + this.tdollStat[i].armorBuff / 100))
        var armorCoefficient = 1
        if (armor < 75) {
          armorCoefficient = 75 - armor
        }

        var str = Math.ceil(this.tdollStat[i].str * (1 + this.tdollStat[i].strBuff / 100))
        var criticalRate = Math.ceil(this.tdollStat[i].criticalRate * (1 + this.tdollStat[i].criticalRateBuff / 100))
        var agi = Math.ceil(this.tdollStat[i].agi * (1 + this.tdollStat[i].agiBuff / 100))
        var dex = Math.ceil(this.tdollStat[i].dex * (1 + this.tdollStat[i].dexBuff / 100))
        var agl = Math.ceil(this.tdollStat[i].agl * (1 + this.tdollStat[i].aglBuff / 100))

        if (this.tdollStat[i].type === this.tdollType[1]) {
          // MG
          attack = 7 * this.tdollStat[i].link * (this.tdollStat[i].bullet * (str + this.tdollStat[i].armorPenetration / 3) * ((criticalRate / 100) * ((this.tdollStat[i].criticalDamageRate - 100) / 100) + 1) / (this.tdollStat[i].bullet / 3 + 4 + 200 / agi) * dex / (dex + 23) + 8)
        } else if (this.tdollStat[i].type === this.tdollType[2]) {
          // SG
          attack = 6 * this.tdollStat[i].link * (3 * this.tdollStat[i].bullet * (str + this.tdollStat[i].armorPenetration / 3) * ((criticalRate / 100) * ((this.tdollStat[i].criticalDamageRate - 100) / 100) + 1) / (1.5 + this.tdollStat[i].bullet * 50 / agi + 0.5 * this.tdollStat[i].bullet) * dex / (dex + 23) + 8)
        } else if (this.tdollStat[i].type === this.tdollType[3]) {
          // AR, SMG, RF, HG
          attack = 5 * this.tdollStat[i].link * ((str + this.tdollStat[i].armorPenetration / 3) * ((criticalRate / 100) * ((this.tdollStat[i].criticalDamageRate - 100) / 100) + 1) * agi / 50 * dex / (dex + 23) + 8)
        }

        defense = (this.tdollStat[i].hp / this.tdollStat[i].link) * this.tdollStat[i].link * (35 + agl) / 35 * (2.6 * 75 / armorCoefficient - 1.6)

        if (this.tdollStat[i].skill2Lv > 0) {
          skill = this.tdollStat[i].link * (0.8 + this.tdollStat[i].rating / 10) * (35 + (5 * (this.tdollStat[i].skill1Lv - 1)) + ((3 + 2 / 3) * (this.tdollStat[i].skill2Lv - 1)))
        } else {
          skill = this.tdollStat[i].link * (0.8 + this.tdollStat[i].rating / 10) * (35 + (5 * (this.tdollStat[i].skill1Lv - 1)))
        }

        var operationalEffectiveness = Math.ceil(attack) + Math.ceil(defense) + Math.ceil(skill)

        if (isNaN(operationalEffectiveness)) {
          operationalEffectiveness = 0
        }
        this.tdollStat[i].operationalEffectiveness = operationalEffectiveness
      }
    },
    checkInputOE: function () {
      var reg = /\D+/
      var regDig = /\d+/
      var regFive = /^([0-5])$/
      var regTen = /^([0-9]|10)$/

      for (var i = 0; i < 5; i++) {
        if (!regFive.test(this.tdollStat[i].link)) {
          if (regDig.test(event.key)) {
            this.tdollStat[i].link = this.tdollStat[i].link.toString().replace(event.key, '')
          } else {
            this.tdollStat[i].link = this.tdollStat[i].link.toString().replace(/\D+/, '')
          }
        }
        if (reg.test(this.tdollStat[i].bullet)) {
          this.tdollStat[i].bullet = this.tdollStat[i].bullet.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].str)) {
          this.tdollStat[i].str = this.tdollStat[i].str.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].armor)) {
          this.tdollStat[i].armor = this.tdollStat[i].armor.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].armorPenetration)) {
          this.tdollStat[i].armorPenetration = this.tdollStat[i].armorPenetration.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].criticalRate)) {
          this.tdollStat[i].criticalRate = this.tdollStat[i].criticalRate.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].criticalDamageRate)) {
          this.tdollStat[i].criticalDamageRate = this.tdollStat[i].criticalDamageRate.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].agi)) {
          this.tdollStat[i].agi = this.tdollStat[i].agi.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].dex)) {
          this.tdollStat[i].dex = this.tdollStat[i].dex.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].hp)) {
          this.tdollStat[i].hp = this.tdollStat[i].hp.replace(/\D+/, '')
        }
        if (reg.test(this.tdollStat[i].agl)) {
          this.tdollStat[i].agl = this.tdollStat[i].agl.replace(/\D+/, '')
        }
        if (!regFive.test(this.tdollStat[i].rating)) {
          if (regDig.test(event.key)) {
            this.tdollStat[i].rating = this.tdollStat[i].rating.toString().replace(event.key, '')
          } else {
            this.tdollStat[i].rating = this.tdollStat[i].rating.toString().replace(/\D+/, '')
          }
        }
        if (!regTen.test(this.tdollStat[i].skill1Lv)) {
          if (regDig.test(event.key)) {
            this.tdollStat[i].skill1Lv = this.tdollStat[i].skill1Lv.toString().replace(event.key, '')
          } else {
            this.tdollStat[i].skill1Lv = this.tdollStat[i].skill1Lv.toString().replace(/\D+/, '')
          }
        }
        if (!regTen.test(this.tdollStat[i].skill2Lv)) {
          if (regDig.test(event.key)) {
            this.tdollStat[i].skill2Lv = this.tdollStat[i].skill2Lv.toString().replace(event.key, '')
          } else {
            this.tdollStat[i].skill2Lv = this.tdollStat[i].skill2Lv.toString().replace(/\D+/, '')
          }
        }
      }
    }
  },
  updated: function () {
    this.OperationalEffectivenessCalc()
  },
  mounted: function () {
    $('.input-text').attr('disabled', true)
  }
}
</script>

<style>
.container-OECalc {
    margin-top: calc(5vh + 30px);
}

.container-content-OECalc {
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
    
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #d4cdbd;
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
    width: calc((80vw - 40px) / 5);
}
.table-OE-col-6 th, td{
    width: calc((80vw - 40px) / 6);
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

@media only screen and (max-width: 767px) {
    .container-content-OECalc {
        width: 80vw;
    }
    .table-OE {
        font-size: 8pt;
    }
    .table-OE-col-5 th, td{
        width: calc((80vw - 40px) / 5);
    }
    .table-OE-col-6 th, td{
        width: calc((80vw - 40px) / 6);
    }
    .table-OE .input-text {
        font-size: 8pt;
    }
    .table-OE select{
        font-size: 8pt;
    }
    .table-OE .label{
        font-size: 8pt;
    }
}
</style>