<template>
  <div class="container z-depth-1-half px-0 mb-3">
    <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
      COMBUSTIBLE
    </p>
    <div
      class="
        container
        pb-2
        ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5
        shadow
        p-3
        bg-body
        rounded-bottom
      "
    >
      <div class="form-check" v-for="(item, i ) in fuel"  :key="i">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item" :id="item"
          v-model="fuelsValue"
        />
        <label class="form-check-label text-capitalize">
          {{ item }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: "Combustible",
  computed: {
    ...mapState(["selectedFuels"]),
    fuelsValue: {
      get() {
        return this.selectedFuels;
      },
      set(v) {
        this.fuelsObserver(v);
      }
    }
  },
  methods: {
    ...mapMutations(["fuelsObserver"])
  },
  props: {
    fuel: {
      type: Array,
    },
  },
};
</script>

<style></style>
