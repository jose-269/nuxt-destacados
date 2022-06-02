<template>
  <div class="container px-0 mb-3">
    <div class="row">
      <div class="col">
        <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
          RANGO DE AÑOS
        </p>
        <div class="container pb-2 shadow p-3 bg-body rounded-bottom">
          <div class="py-4 px-3">
            <client-only>
              <vue-slider
               v-model="value"
              
                :lazy="true"
                :interval="1"
                :process-style="{ backgroundColor: '#DC3545' }"
                :tooltip="'always'"
                :enable-cross="false"
              >
                <template v-slot:dot="{}">
                  <div :class="['custom-dot']"></div>
                </template>
              </vue-slider>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container px-0 mb-3">
    <div class="row">
      <div class="col">
        <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
          RANGO DE AÑOS
        </p>
        <div class="container pb-2 shadow p-3 bg-body rounded-bottom">
          <div class="py-4 px-3">
            <vue-slider v-model="observerAnios" 
            :min="Math.min.apply(Math, this.years)" 
            :max="Math.max.apply(Math, this.years)" 
            :lazy="true"
            :interval="1" 
            :process-style="{ backgroundColor: '#DC3545' }"
            :marks="AniosMarks" 
            :tooltip="'always'"
            :enable-cross="false">
            <template v-slot:dot="">
              <div :class="['custom-dot']"></div>
            </template>
            </vue-slider>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import 'vue-slider-component/theme/antd.css'
// import VueSlider xfrom "vue-slider-component"
// import "vue-slider-component/theme/default.css"
// import { mapState, mapMutations, mapGetters } from "vuex";
// import $ from "jquery";
export default {
  name: "Anios",
  data() {
    return {
      value: [0, 30],
      min: 0,
      max: 100,
    };
  },
  //   data() {
  //     return {
  //       anios: [Math.min.apply(Math, this.years), Math.max.apply(Math, this.years)],
  //       AniosMarks: [2010, 2021],
  //     };
  //   },
  //   computed: {
  //     observerAnios: {
  //       get() {
  //         return this.minMaxYear;
  //       },
  //       set(v) {
  //          this.setYears(v);
  //       }
  //     },

  //   ...mapState(["minAnios", "minMaxYear"]),
  //   ...mapGetters(["pruebaGet"]),
  //   },
  //   methods: {
  //     ...mapMutations(["getMinMaxYear", "setYears"]),
  //   },
  //   components: {
  //     VueSlider,
  //   },
  //   props: {
  //     years: {
  //       type: Array,
  //     },
  //   },
  //   created () {
  //     this.getMinMaxYear();
  //     this.setYears();
  //   },
};
</script>

<style lang="scss">
.custom-dot {
  width: 150%;
  height: 150%;
  background-color: #fff;
  border: 4px solid #dc3545;
  border-radius: 100%;
  margin-top: -4px;
}
.vue-slider-dot-tooltip-inner {
  background-color: #dc3545;
  color: white;
}
.vue-slider-dot-tooltip-inner {
  border-top-color: #dc3545;
}
</style>
