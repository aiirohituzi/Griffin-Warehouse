<template>
  <div class="container-damageCalc">
    <div class="inputGroup-damage">
      <div class="input-damage">
        <input type="text" maxlength="3" v-model="tdollAtk" v-on:keyup="checkInputDamage" />
      </div>
      <div class="input-addon-left">인형 순수 화력 스탯 입력</div>
    </div>
    <div class="inputGroup-damage">
      <div class="input-damage">
        <input type="text" maxlength="4" v-model="tdollSkill" v-on:keyup="checkInputDamage" />
      </div>
      <div class="input-addon-left">인형 스킬 화력 배율(%) 입력</div>
    </div>
    <div class="inputGroup-damage">
      <div class="input-damage">
        <input type="text" maxlength="3" v-model="equipCritical" v-on:keyup="checkInputDamage" />
      </div>
      <div class="input-addon-left">장비 치명상 입력</div>
    </div>

    <div class="container-content-damage">
      <table class="table-damage table-damage-col-3">
        <tr>
          <th>버프 인형 선택</th>
          <th>화력 진형버프</th>
          <th>
            버프 스킬 화력 배율
            <input type="checkbox" class="input-check" v-model="buffSkillOn" />
          </th>
        </tr>
        <tr>
          <td>
            <select v-model="tdoll_selected.first">
              <option v-for="item in tdoll" :value="item.id">{{ item.name }}</option>
            </select>
          </td>
          <!-- 선택한 버퍼의 버프스킬 배율 표시 -->
          <td>
            <div
              class="label"
              v-if="tdoll_selected.first > 1"
            >{{ tdoll[tdoll_selected.first].buff }}%</div>
            <input
              v-if="tdoll_selected.first == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[0].buff"
              v-on:keyup="checkInputDamage"
            />
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.first > 1 && tdoll_selected.first != specialBuffer.ColtPython"
            >{{ tdoll[tdoll_selected.first].skill }}%</div>
            <input
              v-if="tdoll_selected.first == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[0].skill"
              v-on:keyup="checkInputDamage"
            />
            <input
              v-if="tdoll_selected.first == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="1"
              max="6"
              v-model="pythonStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.first == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonStack }}스택</span>
            <input
              v-if="tdoll_selected.first == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="0"
              max="5"
              v-model="pythonReflectStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.first == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonReflectStack }}반사</span>
          </td>
        </tr>

        <!-- 하나 선택할때마다 다음 입력창이 추가되는 방식으로 -->
        <tr v-if="tdoll_selected.first > 0">
          <td>
            <select v-model="tdoll_selected.second">
              <option
                v-for="item in tdoll"
                :value="item.id"
                v-if="item.id != tdoll_selected.first || item.id < 2"
              >{{ item.name }}</option>
            </select>
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.second > 1"
            >{{ tdoll[tdoll_selected.second].buff }}%</div>
            <input
              v-if="tdoll_selected.second == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[1].buff"
              v-on:keyup="checkInputDamage"
            />
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.second > 1 && tdoll_selected.second != specialBuffer.ColtPython"
            >{{ tdoll[tdoll_selected.second].skill }}%</div>
            <input
              v-if="tdoll_selected.second == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[1].skill"
              v-on:keyup="checkInputDamage"
            />
            <input
              v-if="tdoll_selected.second == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="1"
              max="6"
              v-model="pythonStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.second == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonStack }}스택</span>
            <input
              v-if="tdoll_selected.second == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="0"
              max="5"
              v-model="pythonReflectStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.second == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonReflectStack }}반사</span>
          </td>
        </tr>

        <tr v-if="tdoll_selected.second > 0">
          <td>
            <select v-model="tdoll_selected.third">
              <option
                v-for="item in tdoll"
                :value="item.id"
                v-if="item.id != tdoll_selected.first && item.id != tdoll_selected.second || item.id < 2"
              >{{ item.name }}</option>
            </select>
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.third > 1"
            >{{ tdoll[tdoll_selected.third].buff }}%</div>
            <input
              v-if="tdoll_selected.third == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[2].buff"
              v-on:keyup="checkInputDamage"
            />
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.third > 1 && tdoll_selected.third != specialBuffer.ColtPython"
            >{{ tdoll[tdoll_selected.third].skill }}%</div>
            <input
              v-if="tdoll_selected.third == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[2].skill"
              v-on:keyup="checkInputDamage"
            />
            <input
              v-if="tdoll_selected.third == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="1"
              max="6"
              v-model="pythonStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.third == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonStack }}스택</span>
            <input
              v-if="tdoll_selected.third == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="0"
              max="5"
              v-model="pythonReflectStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.third == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonReflectStack }}반사</span>
          </td>
        </tr>

        <tr v-if="tdoll_selected.third > 0">
          <td>
            <select v-model="tdoll_selected.fourth">
              <option
                v-for="item in tdoll"
                :value="item.id"
                v-if="item.id != tdoll_selected.first && item.id != tdoll_selected.second && item.id != tdoll_selected.third || item.id < 2"
              >{{ item.name }}</option>
            </select>
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.fourth > 1"
            >{{ tdoll[tdoll_selected.fourth].buff }}%</div>
            <input
              v-if="tdoll_selected.fourth == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[3].buff"
              v-on:keyup="checkInputDamage"
            />
          </td>
          <td>
            <div
              class="label"
              v-if="tdoll_selected.fourth > 1 && tdoll_selected.fourth != specialBuffer.ColtPython"
            >{{ tdoll[tdoll_selected.fourth].skill }}%</div>
            <input
              v-if="tdoll_selected.fourth == 1"
              type="text"
              class="input-text"
              v-model="tdoll_custom[3].skill"
              v-on:keyup="checkInputDamage"
            />
            <input
              v-if="tdoll_selected.fourth == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="1"
              max="6"
              v-model="pythonStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.fourth == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonStack }}스택</span>
            <input
              v-if="tdoll_selected.fourth == specialBuffer.ColtPython"
              type="range"
              class="slider-damage"
              min="0"
              max="5"
              v-model="pythonReflectStack"
              v-on:change="pythonStackCalc"
            />
            <span
              v-if="tdoll_selected.fourth == specialBuffer.ColtPython"
              class="slider-value"
            >{{ pythonReflectStack }}반사</span>
          </td>
        </tr>
        <tr>
          <th>버프 합계</th>
          <td>
            <div class="label">{{ sumBuff }}%</div>
          </td>
          <td>
            <div class="label">{{ sumSkill }}%</div>
          </td>
        </tr>
      </table>
    </div>

    <div class="container-content-damage">
      <div id="fairy">
        <b>요정 정보 입력</b>
      </div>
      <table class="table-damage table-damage-col-4">
        <tr>
          <th>화력 진형버프</th>
          <th>치명상 진형버프</th>
          <th>
            특성 선택
            <input type="checkbox" class="input-check" v-model="fairyPassiveOn" />
          </th>
          <th>
            스킬 화력 배율
            <input type="checkbox" class="input-check" v-model="fairySkillOn" />
          </th>
        </tr>
        <tr>
          <!-- 요정 진벞 입력 -->
          <td>
            <input
              type="text"
              class="input-text"
              v-model="fairyStrBuff"
              v-on:keyup="checkInputDamage"
            />
          </td>
          <td>
            <input
              type="text"
              class="input-text"
              v-model="fairyCriticalBuff"
              v-on:keyup="checkInputDamage"
            />
          </td>
          <!-- 요정 특성 선택 -->
          <td>
            <select v-model="fairy_selected">
              <option v-for="item in fairyPassive" :value="item.id">{{ item.name }}</option>
            </select>
          </td>
          <!-- 요정 스킬 입력 -->
          <td>
            <input
              type="text"
              class="input-text"
              v-model="fairySkill"
              v-on:keyup="checkInputDamage"
            />
          </td>
        </tr>
        <tr>
          <td>
            <div class="label">{{ fairyStrBuff }}%</div>
          </td>
          <td>
            <div class="label">{{ fairyCriticalBuff }}%</div>
          </td>
          <td v-if="fairy_selected == 3">
            <input type="range" class="slider-damage" min="1" max="3" v-model="gyeokyangStack" />
            <span class="slider-value">{{ gyeokyangStack }}스택</span>
          </td>
          <td v-else>
            <div class="label">{{ fairyPassive[fairy_selected].buff }}%</div>
          </td>
          <td>
            <div class="label">{{ fairySkill }}%</div>
          </td>
        </tr>
      </table>
    </div>

    <div class="inputGroup-damage">
      <div class="input-damage">
        <input type="number" min="-2" max="300" v-model="armor" v-on:keyup="checkInputDamage" />
      </div>
      <div class="input-addon-left">
        장갑 적용
        <input class="check-damage" type="checkbox" style="width:unset;" v-model="armorOn" />
      </div>
    </div>
    <div class="inputGroup-damage">
      <div class="input-damage">
        <input type="text" maxlength="3" v-model="critical" v-on:keyup="checkInputDamage" />
      </div>
      <div class="input-addon-left">
        치명타 적용 (기본 치명상 배율(%) 입력)
        <input
          class="check-damage"
          type="checkbox"
          style="width:unset;"
          v-model="criticalOn"
        />
      </div>
    </div>

    <div class="container-content-damage">
      <table class="table-damage table-damage-col-3">
        <tr>
          <td></td>
          <th>1링크</th>
          <th>5링크</th>
        </tr>
        <tr>
          <th>최소데미지</th>
          <td>
            <div class="label">{{ Math.ceil(finalStatMin) }}</div>
          </td>
          <td>
            <div class="label">{{ Math.ceil(finalStatMin) * 5 }}</div>
          </td>
        </tr>
        <tr>
          <th>최대데미지</th>
          <td>
            <div class="label">{{ Math.ceil(finalStatMax) }}</div>
          </td>
          <td>
            <div class="label">{{ Math.ceil(finalStatMax) * 5 }}</div>
          </td>
        </tr>

        <tr v-if="selectContender">
          <th>최소데미지(컨텐더)</th>
          <td>
            <div class="label">{{ Math.ceil(finalStatMin * 1.4) }}</div>
          </td>
          <td>
            <div class="label">{{ Math.ceil(finalStatMin * 1.4) * 5 }}</div>
          </td>
        </tr>
        <tr v-if="selectContender">
          <th>최대데미지(컨텐더)</th>
          <td>
            <div class="label">{{ Math.ceil(finalStatMax * 1.4) }}</div>
          </td>
          <td>
            <div class="label">{{ Math.ceil(finalStatMax * 1.4) * 5 }}</div>
          </td>
        </tr>

        <tr v-if="selectHP_35">
          <th>HP-35 패시브</th>
          <td>
            <div
              class="label"
            >{{ Math.ceil(finalStatMin * (1 + tdoll[specialBuffer.HP_35].passive / 100)) }} ~ {{ Math.ceil(finalStatMax * (1 + tdoll[specialBuffer.HP_35].passive / 100)) }}</div>
          </td>
          <td>
            <div
              class="label"
            >{{ Math.ceil(finalStatMin * (1 + tdoll[specialBuffer.HP_35].passive / 100)) * 5 }} ~ {{ Math.ceil(finalStatMax * (1 + tdoll[specialBuffer.HP_35].passive / 100)) * 5 }}</div>
          </td>
        </tr>
        <tr v-if="selectHP_35">
          <th>HP-35 액티브(패시브 중첩)</th>
          <td>
            <div
              class="label"
            >{{ Math.ceil(finalStatMin * (1 + tdoll[specialBuffer.HP_35].passive / 100) * (1 + tdoll[specialBuffer.HP_35].skill / 100)) }} ~ {{ Math.ceil(finalStatMax * (1 + tdoll[specialBuffer.HP_35].passive / 100) * (1 + tdoll[specialBuffer.HP_35].skill / 100)) }}</div>
          </td>
          <td>
            <div
              class="label"
            >{{ Math.ceil(finalStatMin * (1 + tdoll[specialBuffer.HP_35].passive / 100) * (1 + tdoll[specialBuffer.HP_35].skill / 100)) * 5 }} ~ {{ Math.ceil(finalStatMax * (1 + tdoll[specialBuffer.HP_35].passive / 100) * (1 + tdoll[specialBuffer.HP_35].skill / 100)) * 5 }}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { tdollAtkBuffer, specialBuffer } from "./data.js";
export default {
  name: "DamageCalc",
  data() {
    return {
      tdollAtk: "",
      tdoll: [],
      tdoll_selected: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
      },
      tdollSkill: "",
      tdoll_custom: [
        { buff: 0, skill: 0 },
        { buff: 0, skill: 0 },
        { buff: 0, skill: 0 },
        { buff: 0, skill: 0 }
      ],
      equipCritical: "",
      selectContender: false,
      selectPx4: false,
      selectHP_35: false,
      pythonStack: 1,
      pythonReflectStack: 0,
      specialBuffer: {},

      fairyStrBuff: "",
      fairyCriticalBuff: "",
      fairyPassive: [
        { id: 0, name: "", buff: 0 },
        { id: 1, name: "살상계1", buff: 12 },
        { id: 2, name: "살상계2", buff: 15 },
        { id: 3, name: "격양계", buff: 10 },
        { id: 4, name: "돌격계", buff: 0 }
      ],
      gyeokyangStack: 1,
      fairySkill: "",
      fairy_selected: 0,

      sumBuff: 0,
      sumSkill: 0,
      finalStatMin: 0,
      finalStatMax: 0,

      buffSkillOn: true,
      fairyPassiveOn: true,
      fairySkillOn: true,
      armorOn: false,
      armor: 0,
      criticalOn: false,
      critical: 150
    };
  },
  methods: {
    sumTdoll: function() {
      var sum_buff = 0;
      var sum_skill = 0;

      var calc_buff = 0;
      var calc_skill = 0;
      var calc_fairyPassive = 0;
      var calc_fairySkill = 0;
      var calc_critical = 0;
      var calc_Px4 = 1;

      var finalStat = 0;
      var finalStatMin = 0;
      var finalStatMax = 0;

      if (
        this.tdoll[this.tdoll_selected.first].id == specialBuffer.Contender ||
        this.tdoll[this.tdoll_selected.second].id == specialBuffer.Contender ||
        this.tdoll[this.tdoll_selected.third].id == specialBuffer.Contender ||
        this.tdoll[this.tdoll_selected.fourth].id == specialBuffer.Contender
      ) {
        this.selectContender = true;
      } else {
        this.selectContender = false;
      }

      if (
        this.tdoll[this.tdoll_selected.first].id == specialBuffer.Px4Storm ||
        this.tdoll[this.tdoll_selected.second].id == specialBuffer.Px4Storm ||
        this.tdoll[this.tdoll_selected.third].id == specialBuffer.Px4Storm ||
        this.tdoll[this.tdoll_selected.fourth].id == specialBuffer.Px4Storm
      ) {
        this.selectPx4 = true;
      } else {
        this.selectPx4 = false;
      }

      if (
        this.tdoll[this.tdoll_selected.first].id == specialBuffer.HP_35 ||
        this.tdoll[this.tdoll_selected.second].id == specialBuffer.HP_35 ||
        this.tdoll[this.tdoll_selected.third].id == specialBuffer.HP_35 ||
        this.tdoll[this.tdoll_selected.fourth].id == specialBuffer.HP_35
      ) {
        this.selectHP_35 = true;
      } else {
        this.selectHP_35 = false;
      }

      // ---------------- 선택한 버프 인형 데이터 연산 --------------------
      if (this.tdoll_selected.first > 0) {
        if (this.tdoll[this.tdoll_selected.first].id == 1) {
          sum_buff += parseInt(this.tdoll_custom[0].buff);
          sum_skill += parseInt(this.tdoll_custom[0].skill);
        } else if (
          this.tdoll[this.tdoll_selected.first].id == specialBuffer.Contender
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.first].buff;
        } else if (
          this.tdoll[this.tdoll_selected.first].id == specialBuffer.Px4Storm
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.first].buff;
        } else if (
          this.tdoll[this.tdoll_selected.first].id == specialBuffer.HP_35
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.first].buff;
        } else {
          sum_buff += this.tdoll[this.tdoll_selected.first].buff;
          sum_skill += this.tdoll[this.tdoll_selected.first].skill;
          // console.log(sum_skill)
        }
      } else {
        this.tdoll_selected.second = 0;
        this.tdoll_selected.third = 0;
        this.tdoll_selected.fourth = 0;
      }
      if (this.tdoll_selected.second > 0) {
        if (this.tdoll[this.tdoll_selected.second].id == 1) {
          sum_buff += parseInt(this.tdoll_custom[1].buff);
          sum_skill =
            ((1 + sum_skill / 100) * (1 + this.tdoll_custom[1].skill / 100) -
              1) *
            100;
        } else if (
          this.tdoll[this.tdoll_selected.second].id == specialBuffer.Contender
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.second].buff;
        } else if (
          this.tdoll[this.tdoll_selected.second].id == specialBuffer.Px4Storm
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.second].buff;
        } else if (
          this.tdoll[this.tdoll_selected.second].id == specialBuffer.HP_35
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.second].buff;
        } else {
          sum_buff += this.tdoll[this.tdoll_selected.second].buff;
          sum_skill =
            ((1 + sum_skill / 100) *
              (1 + this.tdoll[this.tdoll_selected.second].skill / 100) -
              1) *
            100;
          // console.log(sum_skill)
        }
      } else {
        this.tdoll_selected.third = 0;
        this.tdoll_selected.fourth = 0;
      }
      if (this.tdoll_selected.third > 0) {
        if (this.tdoll[this.tdoll_selected.third].id == 1) {
          sum_buff += parseInt(this.tdoll_custom[2].buff);
          sum_skill =
            ((1 + sum_skill / 100) * (1 + this.tdoll_custom[2].skill / 100) -
              1) *
            100;
        } else if (
          this.tdoll[this.tdoll_selected.third].id == specialBuffer.Contender
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.third].buff;
        } else if (
          this.tdoll[this.tdoll_selected.third].id == specialBuffer.Px4Storm
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.third].buff;
        } else if (
          this.tdoll[this.tdoll_selected.third].id == specialBuffer.HP_35
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.third].buff;
        } else {
          sum_buff += this.tdoll[this.tdoll_selected.third].buff;
          sum_skill =
            ((1 + sum_skill / 100) *
              (1 + this.tdoll[this.tdoll_selected.third].skill / 100) -
              1) *
            100;
          // console.log(sum_skill)
        }
      } else {
        this.tdoll_selected.fourth = 0;
      }
      if (this.tdoll_selected.fourth > 0) {
        if (this.tdoll[this.tdoll_selected.fourth].id == 1) {
          sum_buff += parseInt(this.tdoll_custom[3].buff);
          sum_skill =
            ((1 + sum_skill / 100) * (1 + this.tdoll_custom[3].skill / 100) -
              1) *
            100;
        } else if (
          this.tdoll[this.tdoll_selected.fourth].id == specialBuffer.Contender
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.fourth].buff;
        } else if (
          this.tdoll[this.tdoll_selected.fourth].id == specialBuffer.Px4Storm
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.fourth].buff;
        } else if (
          this.tdoll[this.tdoll_selected.fourth].id == specialBuffer.HP_35
        ) {
          sum_buff += this.tdoll[this.tdoll_selected.fourth].buff;
        } else {
          sum_buff += this.tdoll[this.tdoll_selected.fourth].buff;
          sum_skill =
            ((1 + sum_skill / 100) *
              (1 + this.tdoll[this.tdoll_selected.fourth].skill / 100) -
              1) *
            100;
          // console.log(sum_skill)
        }
      }
      if (isNaN(sum_buff)) {
        sum_buff = 0;
      }
      if (isNaN(sum_skill)) {
        sum_skill = 0;
      }

      calc_buff = sum_buff + parseInt(0 + this.fairyStrBuff);

      // --------------- 각종 체크박스와 관련된 기능 ---------------
      if (this.buffSkillOn) {
        calc_skill = sum_skill;
      }
      if (this.fairyPassiveOn) {
        if (this.fairyPassive[this.fairy_selected].id == 3) {
          // 격양계 특성일 때
          calc_fairyPassive = this.fairyPassive[this.fairy_selected].buff;
          for (var i = 0; i < this.gyeokyangStack - 1; i++) {
            calc_fairyPassive = (
              ((1 + calc_fairyPassive / 100) *
                (1 + this.fairyPassive[this.fairy_selected].buff / 100) -
                1) *
              100
            ).toFixed(1);
          }
          // console.log(calc_fairyPassive)
        } else {
          calc_fairyPassive = this.fairyPassive[this.fairy_selected].buff;
        }
      }
      if (this.fairySkillOn) {
        calc_fairySkill = this.fairySkill;
      }
      if (!this.armorOn) {
        this.armor = 0;
        // } else if(this.armor == 0) {
        //     this.armor = -2
      }
      if (this.criticalOn) {
        if (this.buffSkillOn && this.selectPx4) {
          calc_Px4 = 1.5;
        }
        calc_critical =
          (this.critical / 100) *
            (1 + this.fairyCriticalBuff / 100) *
            calc_Px4 +
          this.equipCritical / 100;
        // console.log(calc_critical)
      } else {
        calc_critical = 1;
      }

      this.sumBuff = sum_buff;
      this.sumSkill = sum_skill.toFixed(4);

      finalStat =
        Math.ceil(
          this.tdollAtk * (1 + calc_buff / 100) * (1 + calc_fairyPassive / 100)
        ) *
        (1 + calc_skill / 100) *
        (1 + this.tdollSkill / 100) *
        (1 + calc_fairySkill / 100);

      finalStatMin = (finalStat * 0.85 - this.armor) * calc_critical;
      finalStatMax = (finalStat * 1.15 - this.armor) * calc_critical;

      if (finalStatMin > 0) {
        this.finalStatMin = finalStatMin;
      } else {
        this.finalStatMin = 1;
      }
      if (finalStatMax > 0) {
        this.finalStatMax = finalStatMax;
      } else {
        this.finalStatMax = 1;
      }
    },
    checkInputDamage: function() {
      var reg = /\D+/;

      if (reg.test(this.tdollAtk)) {
        this.tdollAtk = this.tdollAtk.replace(/\D+/, "");
      }
      if (reg.test(this.tdollSkill)) {
        this.tdollSkill = this.tdollSkill.replace(/\D+/, "");
      }
      if (reg.test(this.fairyStrBuff)) {
        this.fairyStrBuff = this.fairyStrBuff.replace(/\D+/, "");
      }
      if (reg.test(this.fairyCriticalBuff)) {
        this.fairyCriticalBuff = this.fairyCriticalBuff.replace(/\D+/, "");
      }
      if (reg.test(this.fairySkill)) {
        this.fairySkill = this.fairySkill.replace(/\D+/, "");
      }
      // if(reg.test(this.armor)){
      //     this.armor = this.armor.replace(/\D+/, '')
      // }
      if (reg.test(this.critical)) {
        this.critical = this.critical.replace(/\D+/, "");
      }
      for (var i = 0; i < 4; i++) {
        if (reg.test(this.tdoll_custom[i].buff)) {
          this.tdoll_custom[i].buff = this.tdoll_custom[i].buff.replace(
            /\D+/,
            ""
          );
        }
        if (reg.test(this.tdoll_custom[i].skill)) {
          this.tdoll_custom[i].skill = this.tdoll_custom[i].skill.replace(
            /\D+/,
            ""
          );
        }
      }
    },
    pythonStackCalc: function() {
      var skill = 6;
      for (
        var i = 0;
        i < parseInt(this.pythonStack) + parseInt(this.pythonReflectStack) - 1;
        i++
      ) {
        skill =
          ((1 + skill / 100) * (1 + this.tdoll[42].skill_base / 100) - 1) * 100;
      }
      this.tdoll[42].skill = skill;
      this.$nextTick(function() {
        this.sumTdoll();
      });
    }
    // nonSelected: function (tdoll) {
    //     var tdoll_selected = []
    //     var flag

    //     if(this.tdoll_selected.first > 1){
    //         tdoll_selected.push(this.tdoll_selected.first)
    //     }
    //     if(this.tdoll_selected.second > 1){
    //         tdoll_selected.push(this.tdoll_selected.second)
    //     }
    //     if(this.tdoll_selected.third > 1){
    //         tdoll_selected.push(this.tdoll_selected.third)
    //     }

    //     return tdoll.filter(function (item) {
    //         console.log(item.id)
    //         flag = true
    //         for(var i=0; i<tdoll_selected.length; i++){
    //             console.log(tdoll_selected[i])
    //             if(item.id == tdoll_selected[i]){
    //                 flag = false
    //             }
    //         }
    //         console.log(flag)
    //         if(flag){
    //             return item
    //         }
    //     })
    // }
  },
  updated: function() {
    this.sumTdoll();
  },
  mounted: function() {
    this.tdoll = tdollAtkBuffer;
    this.specialBuffer = specialBuffer;
  }
};
</script>

<style>
.container-damageCalc {
  margin-top: calc(5vh + 30px);
}

.inputGroup-damage {
  height: 30px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
}
.inputGroup-damage .input-addon-left {
  float: right;
  width: fit-content;
  border: 2px solid #c3b9a2;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: unset;
  background-color: #c3b9a2b6;
  padding: 3px;
  font-size: 10pt;
}
.inputGroup-damage .input-damage {
  float: right;
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
.inputGroup-damage .input-damage input {
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
.inputGroup-damage .input-addon-left .check-damage {
  height: 12px;
  margin: auto;
}

.container-content-damage {
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  margin-left: auto;
  margin-right: auto;
  width: 60vw;

  border: 2px solid #c3b9a2;
  border-radius: 5px;
  background-color: #c3b9a2b6;
}
.container-content-damage #fairy {
  margin: 10px;
  margin-left: 15px;
  font-size: 10pt;
}
.table-damage {
  border-collapse: collapse;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 10pt;
}
.table-damage tr {
  border-top: 2px solid #c3b9a2;
}
.table-damage th,
td {
  padding: 2px;
}
.table-damage-col-3 th,
td {
  width: calc((60vw - 40px) / 3);
}
.table-damage-col-4 th,
td {
  width: calc((60vw - 40px) / 4);
}
.table-damage .input-text {
  width: 80%;
  text-align: right;
  border: 2px solid #c3b9a2;
  -webkit-appearance: none;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  padding: 4.5px;
  font-size: 10pt;
}
.table-damage .input-check {
  height: 12px;
}
.table-damage .slider-damage {
  display: inline-block;
  vertical-align: middle;
  width: 60%;
}
.table-damage .slider-value {
  display: inline-block;
  vertical-align: middle;
  font-size: 10pt;
}
.table-damage select {
  width: 80%;
  text-align: right;
  border: 2px solid #c3b9a2;
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 5px;
  font-size: 10pt;
}
.table-damage .label {
  width: 80%;
  text-align: right;
  margin: auto;
  border: 2px solid #c3b9a2;
  border-radius: 5px;
  background-color: #eeebe4;
  padding: 3px;
  font-size: 10pt;
}

@media only screen and (max-width: 767px) {
  .inputGroup-damage {
    height: 30px;
    width: 80vw;
  }
  .inputGroup-damage .input-addon-left {
    font-size: 8pt;
  }
  .inputGroup-damage .input-addon-right {
    font-size: 8pt;
  }
  .inputGroup-damage .input-label {
    font-size: 8pt;
  }
  .inputGroup-damage .input-addon-left .check-damage {
    height: 10px;
    margin: auto;
  }
  .inputGroup-damage .input-damage {
    font-size: 8pt;
  }
  .inputGroup-damage .input-damage input {
    font-size: 8pt;
  }

  .container-content-damage {
    width: 80vw;
  }
  .container-content-damage #fairy {
    font-size: 8pt;
  }
  .table-damage {
    font-size: 8pt;
  }
  .table-damage-col-3 th,
  td {
    width: calc((80vw - 40px) / 3);
  }
  .table-damage-col-4 th,
  td {
    width: calc((80vw - 40px) / 4);
  }
  .table-damage .input-text {
    font-size: 8pt;
  }
  .table-damage .input-check {
    height: 10px;
    margin: auto;
    vertical-align: text-bottom;
  }
  .table-damage .slider-value {
    font-size: 8pt;
  }
  .table-damage select {
    font-size: 8pt;
  }
  .table-damage .label {
    font-size: 8pt;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .inputGroup-damage .input-damage {
    padding: 2.5px;
  }
}
@media only screen and (max-device-width: 768px) {
  .inputGroup-damage .input-damage {
    padding: 2.5px;
  }
}
</style>
