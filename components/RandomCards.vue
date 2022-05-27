<template>
  <div class="container mb-5 py-3">
    <!-- Resultados -->
    <div class="row">
      <!-- cards -->
      <div class="col-md-4 pb-3" v-for="(auto, i) in fullCars" :key="i">
        <div class="card my-2" style="height: 100%">
          <router-link to="/auto">
            <img :src="auto.url_foto_particular" class="card-img-top" alt="vehículo imagen" />
          </router-link>
          <div class="card-body">
            <h5 class="card-title text-center text-uppercase">
              {{ auto.MARCA }}
            </h5>
            <hr />
            <h5 class="card-title text-center text-uppercase text-danger">
              {{ auto.VCHPRECIO }}
            </h5>
            <hr />
            <div class="row text-center pb-5">
              <div class="col-6 pt-2">
                <i class="far fa-calendar-alt pe-2"></i>{{ auto.INTANO }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-code-branch"></i> {{ auto.TRANSMISION.replace('Transmisión ', '') }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-gas-pump"></i> {{ auto.COMBUSTIBLE }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-road"></i>{{ auto.VCHKILOMETROS }} Kms
              </div>
            </div>
            <div class="d-grid gap-2 d-md-block" style="position:absolute; bottom: 3%;">
              <a class="btn btn-dark">VER MÁS</a>
              
            </div>
          </div>
        </div>
      </div>
      <!-- cards -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "RandomCards",
  props: {
    autos: {
      type: Array,
    },
  },
  methods: {
    ...mapMutations(["formatPrices"]),
  },
  computed: {
    ...mapState(["fullCars", "data", "categorias", "transmisiones", "filtrados", "combustibles"]),
    ...mapGetters(["getFiltrosLateral"]),
  },
  created() {
    this.formatPrices()
  },
};
</script>

<style scoped>
.card {
  box-shadow: 10px 0x #a7a7a7;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 10px 20px #a7a7a7;
}
.card-img-top {
  height: 180px;
  object-fit: cover;
}
</style>
