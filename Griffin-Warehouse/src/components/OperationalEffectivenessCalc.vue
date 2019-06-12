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
                <th>스킬레벨</th>
                <td><input type="text" class="input-text firstTdoll" v-model="tdollStat[0].skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text secondTdoll" v-model="tdollStat[1].skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text thirdTdoll" v-model="tdollStat[2].skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fourthTdoll" v-model="tdollStat[3].skillLv" v-on:keyup="checkInputOE"></td>
                <td><input type="text" class="input-text fifthTdoll" v-model="tdollStat[4].skillLv" v-on:keyup="checkInputOE"></td>
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
          skillLv: 0,
          operationalEffectiveness: 0,
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
          skillLv: 0,
          operationalEffectiveness: 0,
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
          skillLv: 0,
          operationalEffectiveness: 0,
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
          skillLv: 0,
          operationalEffectiveness: 0,
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
          skillLv: 0,
          operationalEffectiveness: 0,
        }
      ]
    }
  },
  methods: {
    OperationalEffectivenessCalc: function () {
      var inputClassList = ['.firstTdoll', '.secondTdoll', '.thirdTdoll', '.fourthTdoll', '.fifthTdoll']

      for(var i=0; i<5; i++) {
        if(this.tdollStat[i].type !== ''){
          $(inputClassList[i]).attr('disabled', false)
        } else {
          $(inputClassList[i]).attr('disabled', true)
        }
      }

      for(var i=0; i<5; i++) {
        if(this.tdollStat[i].type === '') {
          continue
        }
        var armorCoefficient = 1
        if(this.tdollStat[i].armor < 75){
          armorCoefficient = 75 - this.tdollStat[i].armor
        }

        var attack = 5 * this.tdollStat[i].link * ((this.tdollStat[i].str + this.tdollStat[i].armorPenetration / 3) * ((this.tdollStat[i].criticalRate / 100) * ((this.tdollStat[i].criticalDamageRate - 100) / 100) + 1) * this.tdollStat[i].agi / 50 * this.tdollStat[i].dex / (this.tdollStat[i].dex + 23) + 8)
        var defense = (this.tdollStat[i].hp / this.tdollStat[i].link) * this.tdollStat[i].link * (35 + this.tdollStat[i].agl) / 35 * (2.6 * 75 / armorCoefficient - 1.6)
        var skill = this.tdollStat[i].link * (0.8 + this.tdollStat[i].rating / 10) * (35 + (5 * (this.tdollStat[i].skillLv - 1)))

        var operationalEffectiveness = Math.ceil(attack) + Math.ceil(defense) + Math.ceil(skill)

        if(isNaN(operationalEffectiveness)){
          operationalEffectiveness = 0
        }
        this.tdollStat[i].operationalEffectiveness = operationalEffectiveness
      }
    },
    checkInputOE: function () {
      var reg = /\D+/

      // if(reg.test(this.)){
      //   this. = this..replace(/\D+/, '')
      // }
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