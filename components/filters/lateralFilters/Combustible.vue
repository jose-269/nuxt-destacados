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
      <div class="form-check" >
        <input
          class="form-check-input"
          type="checkbox"
        
        />
        <label class="form-check-label text-capitalize">
          <!-- {{ item }} -->
          Combustible
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState, mapMutations} from "vuex";
export default {
  name: "Combustible",
//   computed: {
//     ...mapState(["combustibles"]),
//     observadorCombustibles: {
//       get() {
//         return this.combustibles;
//       },
//       set(v) {
//         this.combustiblesObserver(v);
//       }
//     }
//   },
//   methods: {
//     ...mapMutations(["combustiblesObserver"])
//   },
//   props: {
//     fuel: {
//       type: Array,
//     },
//   },
};
</script>

<style></style>
