<template>
<div>
    <table>
        <tr>
            <th colspan="3">스킬칩 및 모의점수 보유량 입력</th>
        </tr>
        <tr>
            <th>초급</th>
            <th>중급</th>
            <th>고급</th>
        </tr>
        <tr>
            <td><input type="text"></td>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td></td>
            <th>모의점수</th>
            <td><input type="text"></td>
        </tr>
        
        <tr>
            <th colspan="3">필요 사용량 입력</th>
        </tr>
        <tr>
            <th>초급</th>
            <th>중급</th>
            <th>고급</th>
        </tr>
        <tr>
            <td><input type="text"></td>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>

        <tr>
            <th colspan="3">필요 모의점수</th>
        </tr>
        <tr>
            <th>초급</th>
            <th>중급</th>
            <th>고급</th>
        </tr>
        <tr>
            <td>{{  }}</td>
            <td>{{  }}</td>
            <td>{{  }}</td>
        </tr>
        <tr>
            <td></td>
            <th>합계</th>
            <th>필요구매횟수</th>
        </tr>
        <tr>
            <td></td>
            <td>{{  }}</td>
            <td>{{  }}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'MockCalc',
    data () {
        return {
        }
    },
    methods: {
    },
    updated: function () {
    }
}
</script>

<style>
</style>
