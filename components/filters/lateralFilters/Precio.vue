<template>
  <div class="container px-0 mb-3">
    <div class="row">
      <div class="col">
        <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
          RANGO DE PRECIO
        </p>
        <div class="container pb-2 shadow p-3 bg-body rounded-bottom">
          <div class="py-4 px-3">
            <client-only>
              <vue-slider
                v-model="observerPrecios"
                :min="minMaxPrices[0]"
                :max="minMaxPrices[1]"
                :lazy="true"
                :interval="100"
                :tooltip-formatter="formatter"
                :process-style="{ backgroundColor: '#DC3545' }"
                :tooltip="'always'"
                :silent="true"
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
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Precio",
  data() {
    return {
      formatter: (v) => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`,
    };
  },
  computed: {
    observerPrecios: {
      get() {
        return this.minMaxPrices;
      },
      set(v) {
        this.setPrices(v);
      },
    },
    ...mapState(["minMaxPrices"]),
  },
  methods: {
    ...mapMutations(["setPrices"]),
  },
  //   methods: {
  //     ...mapMutations(["setPrices", "getMinMaxPrices"]),
  //   },
  //   created () {
  //     this.getMinMaxPrices();
  //   },
  //   components: {
  //     VueSlider,
  //   },
  //   props: {
  //     prices: {
  //       type: Array,
  //     },
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
