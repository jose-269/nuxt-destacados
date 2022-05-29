<template>
  <div class="container mb-5 py-3">
    <div class="row">
      <div class="col-md-4 pb-3" v-for="(auto, i) in fullCars" :key="i">
        <div class="card my-2" style="height: 100%">
          <router-link to="/auto">
            <img
              :src="auto.url_foto_particular"
              class="card-img-top"
              alt="vehículo imagen"
            />
          </router-link>
          <div class="card-body">
            <h5 class="card-title text-center text-uppercase">
              {{ auto.MARCA }}
            </h5>
            <hr />
            <h5 class="card-title text-center text-uppercase text-danger">
              $ {{ auto.VCHPRECIO.toLocaleString() }}
            </h5>
            <hr />
            <div class="row text-center pb-5">
              <div class="col-6 pt-2">
                <fa icon="calendar" /> {{ auto.INTANO }}
              </div>
              <div class="col-6 pt-2">
                <fa icon="code-branch" />
                {{ auto.TRANSMISION.replace("Transmisión ", "") }}
              </div>
              <div class="col-6 pt-2">
                <fa icon="gas-pump" /> {{ auto.COMBUSTIBLE }}
              </div>
              <div class="col-6 pt-2">
                <fa icon="road" /> {{ auto.VCHKILOMETROS }} Kms
              </div>
            </div>
            <div
              class="d-grid gap-2 d-md-block"
              style="position: absolute; bottom: 3%"
            >
              <a class="btn btn-dark">VER MÁS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RandomCards",
  computed: {
    ...mapState(["fullCars"]),
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
