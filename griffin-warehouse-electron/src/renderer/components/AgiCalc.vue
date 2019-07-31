<template>
<div class="container-agiCalc">
    <div class="tabnav-agi">
        <div id="tabBtn-simple" class="tabBtn-agi current" @click="selectTab('simple')">단순계산</div>
        <div id="tabBtn-detail" class="tabBtn-agi" @click="selectTab('detail')">상세계산</div>
    </div>
    <div id="simple" class="tab-agi">
        <div class="inputGroup-agi">    
            <div class="input-addon-left">인형 사속 입력</div>
            <div class="input-agi">
                <input type="text" maxlength="3" v-model="tdollAgi" v-on:keyup="checkInputAgi">
            </div>
        </div>
        
        <div class="radioGroup-agi">
            <input type="radio" value="0" v-model="calcMode" @click="initial"><span>스킬 사속 직접 입력</span>
            <input type="radio" value="1" v-model="calcMode" @click="initial"><span>목록에서 선택</span>
        </div>
        <div class="inputGroup-agi" v-if="calcMode==0">    
            <div class="input-addon-left">인형 사속 스킬 배율 입력(%)</div>
            <div class="input-agi">
                <input type="text" maxlength="3" v-model="tdollAgiSkill" v-on:keyup="checkInputAgi">
            </div>
        </div>
        <div class="inputGroup-agi" v-if="calcMode==1">
            <div class="input-addon-left">스킬 선택</div>
            <div class="input-agi-allAddon-ex">
                <select v-model="selectType" v-on:change="changeType">
                    <option v-for="item in tdollType" :value="item">{{ item }}</option>
                </select>
            </div>
            <div class="input-agi-allAddon">
                <select v-model="tdollAgiSkill">
                    <option v-for="item in skillList" :value="item.percentage">{{ item.name }}</option>
                </select>
            </div>
            <div class="input-addon-right">{{ tdollAgiSkill }}%</div>
        </div>

        <div class="inputGroup-agi">    
            <div class="input-addon-left">필요 버프량</div>
            <div class="input-label">{{ needAgiBuff }}%</div>
        </div>

        <div class="inputGroup-agi">
            <div class="input-addon-left">자버프 사용 후 필요 버프량</div>
            <div class="input-label">{{ needAgiBuffAfterSkill }}%</div>
        </div>
    </div>
    <div id="detail" class="tab-agi nonSelect">
        <div class="inputGroup-agi">    
            <div class="input-addon-left">인형 사속 입력</div>
            <div class="input-agi">
                <input type="text" maxlength="3" v-model="tdollAgi" v-on:keyup="checkInputAgi">
            </div>
        </div>
        
        <div class="radioGroup-agi">
            <input type="radio" value="0" v-model="calcMode" @click="initial"><span>스킬 사속 직접 입력</span>
            <input type="radio" value="1" v-model="calcMode" @click="initial"><span>목록에서 선택</span>
        </div>
        <div class="inputGroup-agi" v-if="calcMode==0">    
            <div class="input-addon-left">인형 사속 스킬 배율 입력(%)</div>
            <div class="input-agi">
                <input type="text" maxlength="3" v-model="tdollAgiSkill" v-on:keyup="checkInputAgi">
            </div>
        </div>
        <div class="inputGroup-agi" v-if="calcMode==1">
            <div class="input-addon-left">스킬 선택</div>
            <div class="input-agi-allAddon-ex">
                <select v-model="selectType" v-on:change="changeType">
                    <option v-for="item in tdollType" :value="item">{{ item }}</option>
                </select>
            </div>
            <div class="input-agi-allAddon">
                <select v-model="tdollAgiSkill">
                    <option v-for="item in skillList" :value="item.percentage">{{ item.name }}</option>
                </select>
            </div>
            <div class="input-addon-right">{{ tdollAgiSkill }}%</div>
        </div>

        
        
        <table class="table-agi table-agi-col-4">
            <tr>
                <th colspan="4">사속 버퍼 정보 입력</th>
            </tr>
            <tr>
                <th>진형버프 1</th>
                <th>진형버프 2</th>
                <th>진형버프 3</th>
                <th>진형버프 4</th>
            </tr>
            <tr>
                <td><input type="text" maxlength="2" v-model="agiBuff1" v-on:keyup="checkInputAgi"></td>
                <td><input type="text" maxlength="2" v-model="agiBuff2" v-on:keyup="checkInputAgi"></td>
                <td><input type="text" maxlength="2" v-model="agiBuff3" v-on:keyup="checkInputAgi"></td>
                <td><input type="text" maxlength="2" v-model="agiBuff4" v-on:keyup="checkInputAgi"></td>
            </tr>
            <tr>
                <th>버프스킬 1</th>
                <th>버프스킬 2</th>
                <th>버프스킬 3</th>
                <th>버프스킬 4</th>
            </tr>
            <tr>
                <td><input type="text" maxlength="2" v-model="agiSkill1" v-on:keyup="checkInputAgi"></td>
                <td><input type="text" maxlength="2" v-model="agiSkill2" v-on:keyup="checkInputAgi"></td>
                <td><input type="text" maxlength="2" v-model="agiSkill3" v-on:keyup="checkInputAgi"></td>
                <td><input type="text" maxlength="2" v-model="agiSkill4" v-on:keyup="checkInputAgi"></td>
            </tr>
        </table>


        <div class="inputGroup-agi">    
            <div class="input-addon-left">필요 버프량</div>
            <div class="input-label">{{ needAgiBuff }}%</div>
        </div>

        <div class="inputGroup-agi">
            <div class="input-addon-left">자버프 사용 후 필요 버프량</div>
            <div class="input-label">{{ needAgiBuffAfterSkill }}%</div>
        </div>
    </div>

    <div id="div-agi" class="side-right-agi">
        <div class="btn-agi" @click="openAgi()">사속 프레임 표</div>
        <table id="table-agi">
            <tr>
                <th>사속</th>
                <th>공격당<br>프레임</th>
                <th>사속</th>
                <th>공격당<br>프레임</th>
                <th>사속</th>
                <th>공격당<br>프레임</th>
            </tr>
            <tr>
                <td>14</td>
                <td>107</td>
                <td>33</td>
                <td>45</td>
                <td>56~57</td>
                <td>26</td>
            </tr>
            <tr>
                <td>15</td>
                <td>99</td>
                <td>34</td>
                <td>44</td>
                <td>58~59</td>
                <td>25</td>
            </tr>
            <tr>
                <td>16</td>
                <td>93</td>
                <td>35</td>
                <td>42</td>
                <td>60~62</td>
                <td>24</td>
            </tr>
            <tr>
                <td>17</td>
                <td>88</td>
                <td>36</td>
                <td>41</td>
                <td>63~65</td>
                <td>23</td>
            </tr>
            <tr>
                <td>18</td>
                <td>83</td>
                <td>37</td>
                <td>40</td>
                <td>66~68</td>
                <td>22</td>
            </tr>
            <tr>
                <td>19</td>
                <td>78</td>
                <td>38</td>
                <td>39</td>
                <td>69~71</td>
                <td>21</td>
            </tr>
            <tr>
                <td>20</td>
                <td>74</td>
                <td>39</td>
                <td>38</td>
                <td>72~74</td>
                <td>20</td>
            </tr>
            <tr>
                <td>21</td>
                <td>71</td>
                <td>40</td>
                <td>37</td>
                <td>75~78</td>
                <td>19</td>
            </tr>
            <tr>
                <td>22</td>
                <td>68</td>
                <td>41</td>
                <td>36</td>
                <td>79~83</td>
                <td>18</td>
            </tr>
            <tr>
                <td>23</td>
                <td>65</td>
                <td>42</td>
                <td>35</td>
                <td>84~88</td>
                <td>17</td>
            </tr>
            <tr>
                <td>24</td>
                <td>62</td>
                <td>43</td>
                <td>34</td>
                <td>89~93</td>
                <td>16</td>
            </tr>
            <tr>
                <td>25</td>
                <td>59</td>
                <td>44</td>
                <td>34</td>
                <td>94~99</td>
                <td>15</td>
            </tr>
            <tr>
                <td>26</td>
                <td>57</td>
                <td>45</td>
                <td>33</td>
                <td>100~107</td>
                <td>14</td>
            </tr>
            <tr>
                <td>27</td>
                <td>55</td>
                <td>46</td>
                <td>32</td>
                <td>108~115</td>
                <td>13</td>
            </tr>
            <tr>
                <td>28</td>
                <td>53</td>
                <td>47~48</td>
                <td>31</td>
                <td>116~120</td>
                <td>12</td>
            </tr>
            <tr>
                <td>29</td>
                <td>51</td>
                <td>49</td>
                <td>30</td>
                <td>사중MG, PKP</td>
                <td>11</td>
            </tr>
            <tr>
                <td>30</td>
                <td>49</td>
                <td>50~51</td>
                <td>29</td>
                <td>MG, AUG스킬</td>
                <td>10</td>
            </tr>
            <tr>
                <td>31</td>
                <td>48</td>
                <td>52~53</td>
                <td>28</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>32</td>
                <td>46</td>
                <td>54~55</td>
                <td>27</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
  name: 'AgiCalc',
  data () {
    return {
      tdollType: ['AR', 'RF', 'SG'],
      selectType: 'AR',
      skillList: [],
      skillListAR: [
        {id: 1, name: '고속사격T (ST AR-15 MOD, 97식)', percentage: 50},
        {id: 2, name: '고속사격T (OTs-12)', percentage: 60},
        {id: 3, name: '강행돌파 (ART556, TAR-21)', percentage: 25},
        {id: 4, name: '강행돌파 (마갈)', percentage: 20},
        {id: 5, name: '강행돌파 (L85A1)', percentage: 15},
        {id: 6, name: '민접사격 (Model L)', percentage: 40},
        {id: 7, name: '백랑의 눈 (AK-12)', percentage: 35},
        {id: 8, name: '여명의 기염 (CZ2000)', percentage: 50},
        {id: 9, name: '미래 예지 (64식 소총)', percentage: 80},
        {id: 10, name: '설한의 쐐기 (M4A1 MOD2)', percentage: -70},
        {id: 11, name: '아크 기어스 (G36 MOD2)', percentage: 20}
      ],
      skillListRF: [
        {id: 1, name: '고속사격 (WA2000)', percentage: 75},
        {id: 2, name: '고속사격 (SVD)', percentage: 65},
        {id: 3, name: '비상사격 (K31)', percentage: 80},
        {id: 4, name: '고속사격 (wz.29)', percentage: 60},
        {id: 5, name: '고속사격 (시모노프, BM59)', percentage: 55},
        {id: 6, name: '고속사격T (SM-1)', percentage: 40},
        {id: 7, name: '고속사격N (XM3)', percentage: 100},
        {id: 8, name: '고속사격N (81식 카빈)', percentage: 90},
        {id: 9, name: '고속사격N (G43)', percentage: 85},
        {id: 10, name: '민첩사격 (T-5000)', percentage: 50},
        {id: 11, name: '민첩사격 (OBR)', percentage: 45},
        {id: 12, name: '육참골단 (IWS 2000)', percentage: -35},
        {id: 13, name: '분노의 발상 (Mk 12)', percentage: 30},
        {id: 14, name: '싸늘한 투지 (FN-49 MOD2)', percentage: 15},
        {id: 15, name: '데드라인 (4식)', percentage: 55}
      ],
      skillListSG: [
        {id: 1, name: '광란의 파티 (USAS-12)', percentage: 60},
        {id: 2, name: '금당현상 (AA-12)', percentage: 80}
      ],

      tdollAgi: '',
      calcMode: 0,
      tdollAgiSkill: '',
      needAgiBuff: 0,
      needAgiBuffAfterSkill: 0,

      agiBuff1: 0,
      agiBuff2: 0,
      agiBuff3: 0,
      agiBuff4: 0,
      agiSkill1: 0,
      agiSkill2: 0,
      agiSkill3: 0,
      agiSkill4: 0
    }
  },
  methods: {
    agiCalc: function () {
      switch (this.selectType) {
        case 'AR':
          this.skillList = this.skillListAR
          break
        case 'RF':
          this.skillList = this.skillListRF
          break
        case 'SG':
          this.skillList = this.skillListSG
          break
        default:
          return
      }

      var sumAgiBuff = parseInt(this.agiBuff1) + parseInt(this.agiBuff2) + parseInt(this.agiBuff3) + parseInt(this.agiBuff4)
      var mulAgiSkill = (1 + this.agiSkill1 / 100) * (1 + this.agiSkill2 / 100) * (1 + this.agiSkill3 / 100) * (1 + this.agiSkill4 / 100)

      var needAgiBuff = 116 / (parseInt(this.tdollAgi) * (1 + sumAgiBuff / 100) * mulAgiSkill)
      var needAgiBuffAfterSkill = 116 / (parseInt(this.tdollAgi) * (1 + sumAgiBuff / 100) * (1 + parseInt(this.tdollAgiSkill) / 100) * mulAgiSkill)

      if (isNaN(needAgiBuff) || (Math.ceil((needAgiBuff - 1) * 100) < 0)) {
        this.needAgiBuff = 0
      } else {
        this.needAgiBuff = Math.ceil((needAgiBuff - 1) * 100)
      }
      if (isNaN(needAgiBuffAfterSkill) || (Math.ceil((needAgiBuffAfterSkill - 1) * 100) < 0)) {
        this.needAgiBuffAfterSkill = 0
      } else {
        this.needAgiBuffAfterSkill = Math.ceil((needAgiBuffAfterSkill - 1) * 100)
      }
    },
    checkInputAgi: function () {
      var reg = /\D+/

      if (reg.test(this.tdollAgi)) {
        this.tdollAgi = this.tdollAgi.replace(/\D+/, '')
      }
      if (reg.test(this.tdollAgiSkill) && this.calcMode === 0) {
        this.tdollAgiSkill = this.tdollAgiSkill.replace(/\D+/, '')
      }
      if (reg.test(this.agiBuff1)) {
        this.agiBuff1 = this.agiBuff1.replace(/\D+/, '')
      }
      if (reg.test(this.agiBuff2)) {
        this.agiBuff2 = this.agiBuff2.replace(/\D+/, '')
      }
      if (reg.test(this.agiBuff3)) {
        this.agiBuff3 = this.agiBuff3.replace(/\D+/, '')
      }
      if (reg.test(this.agiBuff4)) {
        this.agiBuff4 = this.agiBuff4.replace(/\D+/, '')
      }
      if (reg.test(this.agiSkill1)) {
        this.agiSkill1 = this.agiSkill1.replace(/\D+/, '')
      }
      if (reg.test(this.agiSkill2)) {
        this.agiSkill2 = this.agiSkill2.replace(/\D+/, '')
      }
      if (reg.test(this.agiSkill3)) {
        this.agiSkill3 = this.agiSkill3.replace(/\D+/, '')
      }
      if (reg.test(this.agiSkill4)) {
        this.agiSkill4 = this.agiSkill4.replace(/\D+/, '')
      }
    },
    initial: function () {
      this.tdollAgiSkill = 0
    },
    selectTab: function (divId) {
      $('#simple').addClass('nonSelect')
      $('#detail').addClass('nonSelect')

      $('.tabnav-agi').children().removeClass('current')

      $('#' + divId).removeClass('nonSelect')
      $('#tabBtn-' + divId).addClass('current')

      this.agiBuff1 = 0
      this.agiBuff3 = 0
      this.agiBuff2 = 0
      this.agiBuff4 = 0
      this.agiSkill1 = 0
      this.agiSkill2 = 0
      this.agiSkill3 = 0
      this.agiSkill4 = 0
    },

    openAgi: function () {
      $('.side-right-agi').toggleClass('move')
    },

    changeType: function () {
      this.tdollAgiSkill = ''
    }
  },
  updated: function () {
    this.agiCalc()
  }
}
</script>


<style>
.container-agiCalc {
    margin-top: calc(40px + 10vh);
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
}

.radioGroup-agi {
    margin-top: 1vh;
    font-size: 10pt;
    vertical-align: middle;
}
.radioGroup-agi span, input[type=radio] {
    vertical-align: middle;
}

.inputGroup-agi {
    height: 30px;
    margin-top: 1vh;
    margin-bottom: 1vh;
}
.inputGroup-agi .input-addon-left {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: unset;
    background-color: #d4cdbd;
    padding: 3px;
    font-size: 10pt;
}
.inputGroup-agi .input-addon-right {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: unset;
    background-color: #eeebe4;
    padding: 4.5px;
    font-size: 10pt;
}
.inputGroup-agi .input-agi {
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
    
    padding: 4.5px;

    font-size: 10pt;
    width: 50px;
}
.inputGroup-agi .input-agi input{
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
.inputGroup-agi .input-label {
    float: left;
    width: fit-content;
    border: 2px solid #c3b9a2;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #eeebe4;
    padding: 4.5px;
    font-size: 10pt;
}
.inputGroup-agi .input-agi-allAddon {
    float: left;
    border: 2px solid #c3b9a2;
    -webkit-appearance: none;

    border-radius: 0;
    -webkit-border-radius: 0;

    padding: 3px;

    font-size: 10pt;
    width: 223px;
}
.inputGroup-agi .input-agi-allAddon-ex {
    float: left;
    border: 2px solid #c3b9a2;
    border-right: none;
    -webkit-appearance: none;

    border-radius: 0;
    -webkit-border-radius: 0;

    padding: 3px;

    font-size: 10pt;
    width: 40px;
}
.inputGroup-agi .input-agi-allAddon select {
    -webkit-appearance: none;

    border: unset;
    -webkit-border: unset;
    
    margin: 0;
    -webkit-margin: 0;

    padding: 0;
    -webkit-padding: 0;
    
    background: url('../assets/select.png') no-repeat center right;
    background-size: 17px 20px;
    
    line-height: 19px;
    font-size: 10pt;
    width: 100%;
    text-align: right;
}
.inputGroup-agi .input-agi-allAddon-ex select {
    -webkit-appearance: none;

    border: unset;
    -webkit-border: unset;
    
    margin: 0;
    -webkit-margin: 0;

    padding: 0;
    -webkit-padding: 0;
    
    background: url('../assets/select.png') no-repeat center right;
    background-size: 17px 20px;
    
    line-height: 19px;
    font-size: 10pt;
    width: 100%;
    text-align: right;
}

.tabnav-agi {
    width: 100%;
    height: 30px;
    list-style: none;
}
.tabBtn-agi {
    width: calc(100% / 2);
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
    background-color:#d4cdbd;
}
.tabnav-agi .current {
    background-color:#c3b9a2;
}
.tab-agi {
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

.table-agi {
    border-collapse: collapse;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 10pt;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #d4cdbd;
}
.table-agi tr{
    border-top: 2px solid #c3b9a2;
}
.table-agi th, td{
    padding: 2px;
}
.table-agi-col-4 th, td{
    width: calc((50vw - 40px) / 4);
}
.table-agi input{
    width: 80%;
    text-align: right;
    -webkit-appearance: none;
    border: 2px solid #c3b9a2;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    padding: 4.5px;
    font-size: 10pt;
}



.side-right-agi {
    -webkit-transform: translate(0, 0);
    -webkit-transition: -webkit-transform 500ms;

    transform: translate(0, 0);
    transition: transform 500ms;

    will-change: transform;
}
.side-right-agi.move {
    -webkit-transform: translate(-435px, 0px);
    transform: translate(-435px, 0px);
}
div#div-agi {
    position: fixed;
    right: -435px;
    top: 20vh;
    width: 450px;
    height: 380px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #d4cdbd;
    -moz-box-shadow: 1px 3px 6px #999;
    -webkit-box-shadow: 0px 3px 6px #999;
    box-shadow: 1px 3px 6px #999;

    text-align: center;
}
table#table-agi{
    width: 92%;
    float: right;
    font-size: 9pt;
    margin: 10px;
}
table#table-agi th{
    background: #afa48a;
}
table#table-agi td{
    width: fit-content;
    padding: 0;
    background-color: #c3b9a2;
}
table#table-agi tr{
    height: 15px;
}
div#div-agi .btn-agi {
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
div#div-agi .btn-agi:hover {
    background: #9c9175;
    cursor: pointer;
}



@media only screen and (max-width: 767px) {
    .radioGroup-agi {
        font-size: 8pt;
    }
    .inputGroup-agi .input-addon-left {
        font-size: 8pt;
    }
    .inputGroup-agi .input-addon-right {
        font-size: 8pt;
        padding: 5px;
    }
    .inputGroup-agi .input-agi {
        font-size: 8pt;
    }
    .inputGroup-agi .input-agi input {
        font-size: 8pt;
    }
    .inputGroup-agi .input-agi-allAddon {
        font-size: 8pt;
    }
    .inputGroup-agi .input-agi-allAddon select {
        font-size: 8pt;
    }
    .inputGroup-agi .input-label {
        font-size: 8pt;
        padding: 5px;
    }
    .tabBtn-agi {
        font-size: 8pt;
    }
    .tab-agi {
        font-size: 8pt;
    }
    .table-agi {
        font-size: 8pt;
        width: 80vw;
    }
    .table-agi input {
        font-size: 8pt;
    }

    
    .side-right-agi.move {
        -webkit-transform: translate(-335px, 0px);
        transform: translate(-335px, 0px);
    }
    div#div-agi {
        right: -335px;
        width: 350px;
    }
    table#table-agi{
        font-size: 7pt;
        height: calc(100% - 20px);
    }
}
</style>