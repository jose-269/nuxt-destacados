<template>
  <div class="container px-0 mb-3">
    <div class="row">
      <div class="col">
        <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
          RANGO DE AÑOS
        </p>
        <div class="container pb-2 shadow p-3 bg-body rounded-bottom">
          <div class="py-4 px-3" v-if="minMaxYears">
            <client-only>
              <vue-slider
                v-model="observerVal"
                :min = "minMaxYears[0]"
                :max = "minMaxYears[1]"
                :lazy="true"
                :interval="1"
                :process-style="{ backgroundColor: '#DC3545' }"
                :tooltip="'always'"
                :enable-cross="false"
                :silent="true"
                :marks="minMaxYears"
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
</template>

<script>
import 'vue-slider-component/theme/antd.css'
import { mapState, mapMutations } from "vuex";
export default {
  name: "Anios",
    computed: {
      observerVal: {
        get() {
          return this.selectedYears;
        },
        set(v) {
           this.yearsObserver(v);
        }
      },
    ...mapState(["minMaxYears", "selectedYears"]),
    },
    methods: {
      ...mapMutations(["yearsObserver"]),
    },
    props: {
      years: {
        type: Array,
      },
    },
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
