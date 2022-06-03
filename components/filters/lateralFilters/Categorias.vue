<template>
  <div class="container px-0 mb-3">
    <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
      CATEGORÍA
    </p>
    <div class="container ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5 shadow p-3 bg-body rounded-bottom">
      <div class="form-check" v-for="(item, i) in categories" :key="i">
        <input class="form-check-input" type="checkbox" :id="item" :value="item" />
        <label class="form-check-label text-capitalize">
          {{ item }}
        </label>
      </div>
    </div>
  </div>
  <!-- <div class="container px-0 mb-3">
    <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
      CATEGORÍA
    </p>
    <div class="container ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5 shadow p-3 bg-body rounded-bottom">
      <div class="form-check" v-for="(item, i) in categories" :key="i">
        <input class="form-check-input" type="checkbox" :id="item" :value="item" v-model="observadorCategoria"/>
        <label class="form-check-label text-capitalize">
          {{ item }}
        </label>
      </div>
    </div>
  </div> -->
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  name: "Categorias",
//   computed: {
    
//     ...mapState(["categorias", "data"]),
//     observadorCategoria: {
//       get() {
//         return this.categorias;
//       },
//       set(v) {
//         this.categoriasObserver(v);
//       }
//     }
//   },
//   methods: {
//     ...mapMutations(["categoriasObserver"]),
//   },
  props: {
    categories: {
      type: Array,
    },
  },
};
</script>

<style></style>
