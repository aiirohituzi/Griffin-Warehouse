<template>
<div>
    <!-- -------------------버퍼 선택----------------------- -->
    <select class="" v-model="">
        <option value="" v-for="">{{}}</option>
    </select>
        <!-- 선택한 버퍼의 버프스킬 배율 표시 -->
    <div></div>

        <!-- 하나 선택할때마다 다음 입력창이 추가되는 방식으로 -->
    <select class="" v-model="">
        <option value="" v-for="">{{}}</option>
    </select>
    <div></div>

    <select class="" v-model="">
        <option value="" v-for="">{{}}</option>
    </select>
    <div></div>

    <select class="" v-model="">
        <option value="" v-for="">{{}}</option>
    </select>
    <div></div>
    <!-- --------------------------------------------------- -->

    <!-- 요정 진벞 입력 -->
    <input type="text">
    <!-- 요정 스킬 입력 -->
    <input type="text">
    <!-- 요정 특성 선택 -->
    <select class="" v-model="">
        <option value="" v-for="">{{}}</option>
    </select>

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
            
        }
    },
    methods: {
    },
}
</script>

<style>
</style>
