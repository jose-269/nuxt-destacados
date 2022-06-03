<template>
<div>

    <div class="container z-depth-1-half px-0 mb-3">
      <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
        MARCA
      </p>
      <div
        class="container pb-2 ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5 shadow p-3 bg-body rounded-bottom"
      >
        <div class="form-check" v-for="(item, i) in brand" :key="i">
          <input class="form-check-input" type="checkbox" :value="item" :id="item" />
          <label class="form-check-label text-capitalize" for="flexCheckDefault">
             {{ item }}
          </label>
        </div>
         <a
          href="#"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
          >Ver más +</a
        > 

      </div>
    </div>
</div>
  <!-- <div class="container z-depth-1-half px-0 mb-3">
    <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
      MARCA
    </p>
    <div
      class="container pb-2 ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5 shadow p-3 bg-body rounded-bottom"
    >
      <div class="form-check" v-for="(item, i) in brand" :key="i">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item"
          :id="item"
          v-model="observadorMarca"
        />
        <label class="form-check-label text-capitalize" for="flexCheckDefault">
          {{ item }}
        </label>
      </div>
      <a
        href="#"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
        >Ver más +</a
      >
    </div>
  </div> -->
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  name: "Marca",
  data() {
    return {
      
    };
  },
  //   computed: {
  //     observadorMarca: {
  //        get() {
  //         return this.marcas;
  //       },
  //       set(v) {
  //         this.marcasObserver(v);
  //       }
  //     },
  //   ...mapState(["marcas"])
  //   },
  //   methods: {
  //     ...mapMutations(["marcasObserver"])
  //   },
    props: {
      brand: {
        type: Array,
      },
    },
};
</script>

<style>
.custom-dot {
  width: 150%;
  height: 150%;
  background-color: #fff;
  border: 4px solid #DC3545;
  border-radius: 100%;
  margin-top: -4px;
}
.vue-slider-dot-tooltip-inner   {
  background-color: #DC3545;
  color: white;
}
.vue-slider-dot-tooltip-inner {
  border-top-color: #DC3545;
}
</style>
