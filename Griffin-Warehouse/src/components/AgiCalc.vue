<template>
<div class="container-agiCalc">
    <div class="inputGroup-agi">    
        <div class="input-addon-left">인형 사속 입력</div>
        <div class="input-agi">
            <input type="text" maxlength="3" v-model="tdollAgi" v-on:keyup="checkInputAgi">
        </div>
    </div>
    
    <div class="radioGroup-agi">
        <input type="radio" value="0" v-model="calcMode" @click="initial">스킬 사속 직접 입력
        <input type="radio" value="1" v-model="calcMode" @click="initial">목록에서 선택
    </div>
    <div class="inputGroup-agi" v-if="calcMode==0">    
        <div class="input-addon-left">인형 사속 스킬 배율 입력(%)</div>
        <div class="input-agi">
            <input type="text" maxlength="3" v-model="tdollAgiSkill" v-on:keyup="checkInputAgi">
        </div>
    </div>
    <div class="inputGroup-agi" v-if="calcMode==1">
        <div class="input-addon-left">스킬 선택</div>
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
</template>

<script>
export default {
    name: 'AgiCalc',
    data () {
        return {
            skillList: [
                {id:0, name: '', percentage: 0},
                {id:1, name: '테스트1', percentage: 10},
                {id:2, name: '테스트2', percentage: 20},
                {id:3, name: '테스트3', percentage: 30},
            ],

            tdollAgi: '',
            calcMode: 0,
            tdollAgiSkill: '',
            needAgiBuff: 0,
            needAgiBuffAfterSkill: 0,
        }
    },
    methods: {
        agiCalc: function () {
            var needAgiBuff = 116 / parseInt(this.tdollAgi)
            var needAgiBuffAfterSkill = 116 / (parseInt(this.tdollAgi) * (1 + parseInt(this.tdollAgiSkill) / 100))
        
            console.log(needAgiBuffAfterSkill)
            this.needAgiBuff = Math.ceil((needAgiBuff - 1) * 100)
            this.needAgiBuffAfterSkill = Math.ceil((needAgiBuffAfterSkill - 1) * 100)
        },
        checkInputAgi: function () {
            var reg = /\D+/

            if(reg.test(this.tdollAgi)){
                this.tdollAgi = this.tdollAgi.replace(/\D+/, '')
            }
            if(reg.test(this.tdollAgiSkill)){
                this.tdollAgiSkill = this.tdollAgiSkill.replace(/\D+/, '')
            }
        },
        initial: function () {
            this.tdollAgiSkill = 0
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
    background-color: #c3b9a2b6;
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
    background-color: #c3b9a249;
    padding: 3px;
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
    
    padding: 3px;

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
    background-color: #c3b9a249;
    padding: 3px;
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
    width: 90px;
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
    
    font-size: 10pt;
    width: 100%;
    text-align: right;
}


@media only screen and (max-width: 767px) {
    .radioGroup-agi {
        font-size: 8pt;
    }
    .inputGroup-agi .input-exp-allAddon select {
        font-size: 8pt;
    }
}
</style>