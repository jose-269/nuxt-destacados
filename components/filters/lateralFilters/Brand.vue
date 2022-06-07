<template>
  <div>
    <div class="container z-depth-1-half px-0 mb-3">
      <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
        MARCA
      </p>
      <div
        class="container pb-2 ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5 shadow p-3 bg-body rounded-bottom"
      >
        <div class="form-check" v-for="(item, index) in showitems" :key="index">
          <input
            class="form-check-input"
            type="checkbox"
            :value="item"
            :id="item"
            v-model="brandValue"
          />
          <label
            class="form-check-label text-capitalize"
            for="flexCheckDefault"
          >
            {{ item }}
          </label>
        </div>

        <button
          class="btn btn-danger py-0"
          type="button"
          @click="toggleBrandsList"
        >
          <span v-show="showitems.length <= 4"> Ver más <fa icon="angle-down"></fa></span>
          <span v-show="showitems.length > 4"> Ver menos <fa icon="angle-up"></fa></span>
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Marca",
  data() {
    return {
      brandsList: false,
    };
  },
  computed: {
    brandValue: {
      get() {
        return this.selectedBrands;
      },
      set(v) {
        this.brandsObserver(v);
      },
    },
    showitems() {
      return !this.brandsList ? this.brands.slice(0, 4) : this.brands;
    },
    ...mapState(["selectedBrands"]),
  },
  methods: {
    toggleBrandsList() {
      this.brandsList = !this.brandsList;
    },
    ...mapMutations(["brandsObserver"]),
  },
  props: {
    brands: {
      type: Array,
    },
  },
};
</script>
