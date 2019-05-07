<template>
<div class="container-agiCalc">
    <div class="inputGroup-agi">    
        <div class="input-addon-left">인형 사속 입력</div>
        <div class="input-agi">
            <input type="text" maxlength="3" v-model="tdollAgi" v-on:keyup="checkInputAgi">
        </div>
    </div>

    <div class="inputGroup-agi">    
        <div class="input-addon-left">필요 진형 버프량</div>
        <div class="input-label">{{ needAgiBuff }}%</div>
    </div>

    <div class="inputGroup-agi">
        <div class="input-addon-left">필요 스킬 버프량</div>
        <div class="input-label">{{ needAgiSkill }}%</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AgiCalc',
    data () {
        return {
            tdollAgi: '',
            needAgiBuff: 0,
            needAgiSkill: 0,
        }
    },
    methods: {
        checkInputAgi: function () {
            var reg = /\D+/

            if(reg.test(this.tdollAgi)){
                this.tdollAgi = this.tdollAgi.replace(/\D+/, '')
            }
        }
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
</style>