<template>
<div class="container-simCalc">
    <div class="container-content">
        <table class="table-sim table-sim-col-4">
            <tr>
                <th colspan="4">스킬칩 및 모의점수 보유량 입력</th>
            </tr>
            <tr>
                <th>초급</th>
                <th>중급</th>
                <th>고급</th>
                <th>모의점수</th>
            </tr>
            <tr>
                <td><input type="text" maxlength="5" v-model="basicData" v-on:keyup="checkInputSim"></td>
                <td><input type="text" maxlength="5" v-model="intermediateData" v-on:keyup="checkInputSim"></td>
                <td><input type="text" maxlength="5" v-model="advancedData" v-on:keyup="checkInputSim"></td>
                <td><input type="text" maxlength="5" v-model="currentSimEnergy" v-on:keyup="checkInputSim"></td>
            </tr>
        </table>
    </div>
    
    <div class="container-content">
        <table class="table-sim table-sim-col-3">
            <tr>
                <th colspan="3">필요 사용량 입력</th>
            </tr>
            <tr>
                <th>초급</th>
                <th>중급</th>
                <th>고급</th>
            </tr>
            <tr>
                <td><input type="text" v-model="needBasicData" v-on:keyup="checkInputSim"></td>
                <td><input type="text" v-model="needIntermediateData" v-on:keyup="checkInputSim"></td>
                <td><input type="text" v-model="needAdvancedData" v-on:keyup="checkInputSim"></td>
            </tr>
        </table>
    </div>
    
    <div class="container-content">
        <table class="table-sim table-sim-col-3">
            <tr>
                <th colspan="3">필요 모의점수</th>
            </tr>
            <tr>
                <th>초급</th>
                <th>중급</th>
                <th>고급</th>
            </tr>
            <tr>
                <td><div class="label">{{ needSimEnergy_basic }}</div></td>
                <td><div class="label">{{ needSimEnergy_intermediate }}</div></td>
                <td><div class="label">{{ needSimEnergy_advanced }}</div></td>
            </tr>
            <tr>
                <td></td>
                <th>합계</th>
                <th>필요구매횟수</th>
            </tr>
            <tr>
                <td></td>
                <td><div class="label">{{ needSimEnergy_sum }}</div></td>
                <td><div class="label">{{ Math.ceil(needSimPurchase) }}</div></td>
            </tr>
        </table>
    </div>

    <div id="div-getData" class="side-left">
        <div class="inputGroup-getData">
            <div class="row-getData">모의작전 1회당</div>
            <div class="row-getData">초급 <input type="text" maxlength="3" v-model="getBasicData" v-on:keyup="checkInputSim"></div>
            <div class="row-getData">중급 <input type="text" maxlength="3" v-model="getIntermediateData" v-on:keyup="checkInputSim"></div>
            <div class="row-getData">고급 <input type="text" maxlength="3" v-model="getAdvancedData" v-on:keyup="checkInputSim"></div>
        </div>
        <div class="btn-getData" @click="openGetData()">스킬칩 수급량 입력</div>
    </div>

    <div id="div-needData" class="side-right">
        <div class="btn-needData" @click="openNeedData()">각 레벨별 스킬칩 요구량</div>
        <table id="table-needData">
            <tr>
                <th>연구 레벨</th>
                <th>인형</th>
                <th>전략요정</th>
                <th>전투요정</th>
            </tr>
            <tr>
                <th>1 → 2</th>
                <td class="bgcolor-basic">100</td>
                <td class="bgcolor-basic">200</td>
                <td class="bgcolor-basic">200</td>
            </tr>
            <tr>
                <th>2 → 3</th>
                <td class="bgcolor-basic">200</td>
                <td class="bgcolor-basic">400</td>
                <td class="bgcolor-basic">400</td>
            </tr>
            <tr>
                <th>3 → 4</th>
                <td class="bgcolor-basic">300</td>
                <td class="bgcolor-basic">600</td>
                <td class="bgcolor-basic">600</td>
            </tr>
            <tr>
                <th>4 → 5</th>
                <td class="bgcolor-intermediate">120</td>
                <td class="bgcolor-intermediate">240</td>
                <td class="bgcolor-intermediate">200</td>
            </tr>
            <tr>
                <th>5 → 6</th>
                <td class="bgcolor-intermediate">200</td>
                <td class="bgcolor-intermediate">400</td>
                <td class="bgcolor-intermediate">400</td>
            </tr>
            <tr>
                <th>6 → 7</th>
                <td class="bgcolor-intermediate">300</td>
                <td class="bgcolor-intermediate">600</td>
                <td class="bgcolor-intermediate">600</td>
            </tr>
            <tr>
                <th>7 → 8</th>
                <td class="bgcolor-intermediate">400</td>
                <td class="bgcolor-intermediate">800</td>
                <td class="bgcolor-advanced">200</td>
            </tr>
            <tr>
                <th>8 → 9</th>
                <td class="bgcolor-advanced">200</td>
                <td class="bgcolor-advanced">400</td>
                <td class="bgcolor-advanced">400</td>
            </tr>
            <tr>
                <th>9 → 10</th>
                <td class="bgcolor-advanced">300</td>
                <td class="bgcolor-advanced">600</td>
                <td class="bgcolor-advanced">600</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
  name: 'SimCalc',
  data () {
    return {
      basicData: '',
      intermediateData: '',
      advancedData: '',
      currentSimEnergy: '',

      needBasicData: '',
      needIntermediateData: '',
      needAdvancedData: '',

      needSimEnergy_basic: 0,
      needSimEnergy_intermediate: 0,
      needSimEnergy_advanced: 0,
      needSimEnergy_sum: 0,
      needSimPurchase: 0,

      getBasicData: 218,
      getIntermediateData: 98,
      getAdvancedData: 53
    }
  },
  methods: {
    simCalc: function () {
      if ((this.needBasicData - this.basicData) / this.getBasicData < 0 || isNaN((this.needBasicData - this.basicData) / this.getBasicData)) {
        this.needSimEnergy_basic = 0
      } else {
        this.needSimEnergy_basic = Math.ceil((this.needBasicData - this.basicData) / this.getBasicData)
      }
      if ((this.needIntermediateData - this.intermediateData) / this.getIntermediateData < 0 || isNaN((this.needIntermediateData - this.intermediateData) / this.getIntermediateData)) {
        this.needSimEnergy_intermediate = 0
      } else {
        this.needSimEnergy_intermediate = Math.ceil((this.needIntermediateData - this.intermediateData) / this.getIntermediateData) * 2
      }
      if ((this.needAdvancedData - this.advancedData) / this.getAdvancedData < 0 || isNaN((this.needAdvancedData - this.advancedData) / this.getAdvancedData)) {
        this.needSimEnergy_advanced = 0
      } else {
        this.needSimEnergy_advanced = Math.ceil((this.needAdvancedData - this.advancedData) / this.getAdvancedData) * 3
      }

      if (this.needSimEnergy_basic + this.needSimEnergy_intermediate + this.needSimEnergy_advanced - this.currentSimEnergy < 0 || isNaN(this.needSimEnergy_basic + this.needSimEnergy_intermediate + this.needSimEnergy_advanced - this.currentSimEnergy)) {
        this.needSimEnergy_sum = 0
      } else {
        this.needSimEnergy_sum = this.needSimEnergy_basic + this.needSimEnergy_intermediate + this.needSimEnergy_advanced - this.currentSimEnergy
      }

      this.needSimPurchase = this.needSimEnergy_sum / 3
    },
    openGetData: function () {
      $('.side-left').toggleClass('move')
    },
    openNeedData: function () {
      $('.side-right').toggleClass('move')
    },
    checkInputSim: function () {
      var reg = /\D+/

      if (reg.test(this.basicData)) {
        this.basicData = this.basicData.replace(/\D+/, '')
      }
      if (reg.test(this.intermediateData)) {
        this.intermediateData = this.intermediateData.replace(/\D+/, '')
      }
      if (reg.test(this.advancedData)) {
        this.advancedData = this.advancedData.replace(/\D+/, '')
      }
      if (reg.test(this.currentSimEnergy)) {
        this.currentSimEnergy = this.currentSimEnergy.replace(/\D+/, '')
      }

      if (reg.test(this.needBasicData)) {
        this.needBasicData = this.needBasicData.replace(/\D+/, '')
      }
      if (reg.test(this.needIntermediateData)) {
        this.needIntermediateData = this.needIntermediateData.replace(/\D+/, '')
      }
      if (reg.test(this.needAdvancedData)) {
        this.needAdvancedData = this.needAdvancedData.replace(/\D+/, '')
      }

      if (reg.test(this.getBasicData)) {
        this.getBasicData = this.getBasicData.replace(/\D+/, '')
      }
      if (reg.test(this.getIntermediateData)) {
        this.getIntermediateData = this.getIntermediateData.replace(/\D+/, '')
      }
      if (reg.test(this.getAdvancedData)) {
        this.getAdvancedData = this.getAdvancedData.replace(/\D+/, '')
      }
    }
  },
  updated: function () {
    this.simCalc()
  }
}
</script>

<style>
.container-simCalc {
    margin-top: calc(5vh + 30px);
}

.container-content {
    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
    
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #d4cdbd;
}
.table-sim {
    border-collapse: collapse;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 10pt;
}
.table-sim tr{
    border-top: 2px solid #c3b9a2;
}
.table-sim th, td{
    padding: 2px;
}
.table-sim-col-3 th, td{
    width: calc((50vw - 40px) / 3);
}
.table-sim-col-4 th, td{
    width: calc((50vw - 40px) / 4);
}
.table-sim input{
    width: 80%;
    text-align: right;
    -webkit-appearance: none;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    padding: 4.5px;
    font-size: 10pt;
}
.table-sim .label{
    width: 80%;
    text-align: right;
    margin: auto;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    background-color: #EEEBE4;
    padding: 4.5px;
    font-size: 10pt;
}


.side-left {
    -webkit-transform: translate(0, 0);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(0, 0);
    transition: transform 500ms;

    will-change: transform;
}
.side-left.move {
    -webkit-transform: translate(95px, 0px);
    transform: translate(95px, 0px);
}
div#div-getData {
    position: fixed;
    left: -95px;
    top: 40vh;
    width: 110px;
    height: 155px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #d4cdbd;

    -moz-box-shadow: 1px 3px 6px #999;
    -webkit-box-shadow: 0px 3px 6px #999;
    box-shadow: 1px 3px 6px #999;

    text-align: center;
}
div#div-getData .inputGroup-getData {
    float: left;
    font-size: 8pt;
    line-height: 30px;
    width: 95px;
    margin-top: 15px;
}
div#div-getData .inputGroup-getData .row-getData {
    height: 30px;
}
div#div-getData .inputGroup-getData .row-getData input {
    text-align: right;
    width: 30px;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    padding: 4.5px;
    font-size: 8pt;
}
div#div-getData .btn-getData {
    width: 15px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    float: right;
    background-color: #c3b9a2;
    font-size: 8pt;
    writing-mode: vertical-lr;
}
div#div-getData .btn-getData:hover {
    background: #9c9175;
    cursor: pointer;
}




.side-right {
    -webkit-transform: translate(0, 0);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(0, 0);
    transition: transform 500ms;

    will-change: transform;
}
.side-right.move {
    -webkit-transform: translate(-235px, 0px);
    transform: translate(-235px, 0px);
}
div#div-needData {
    position: fixed;
    right: -235px;
    top: 30vh;
    width: 250px;
    height: 215px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #d4cdbd;
    -moz-box-shadow: 1px 3px 6px #999;
    -webkit-box-shadow: 0px 3px 6px #999;
    box-shadow: 1px 3px 6px #999;

    text-align: center;
}
table#table-needData{
    float: right;
    font-size: 9pt;
    margin: 10px;
}
table#table-needData td{
    width: 50px;
    padding: 0;
}
table#table-needData tr{
    height: 10px;
}
div#div-needData .btn-needData {
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
div#div-needData .btn-needData:hover {
    background: #9c9175;
    cursor: pointer;
}

.bgcolor-basic {
    background-color: #6FA98C;
}
.bgcolor-intermediate {
    background-color: #82983E;
}
.bgcolor-advanced {
    background-color: #CCD66D;
}


@media only screen and (max-width: 767px) {
    .container-content {
        width: 80vw;
    }
    .table-sim {
        font-size: 8pt;
    }
    .table-sim-col-3 th, td {
        width: calc((80vw - 40px) / 3);
    }
    .table-sim-col-4 th, td {
        width: calc((80vw - 40px) / 4);
    }
    .table-sim input {
        font-size: 8pt;
    }
    .table-sim .label{
        font-size: 8pt;
    }
}
</style>
