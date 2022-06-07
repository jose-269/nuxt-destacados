<template>
  <div class="container mb-5 py-3">
    <div class="row">
      <div
        class="col-md-6 col-lg-4 pb-3"
        v-for="(car, i) in getFiltrosLateral"
        :key="i"
      >
        <div class="card my-2" style="height: 100%">
          <nuxt-link  :to="`/autos/${car.AUTOID}`">
            <img :src="car.url_foto_particular" class="card-img-top" alt="vehículo imagen" />
          </nuxt-link >
          <!-- <div class="form-check form-check-inline comparar-check p-0 rounded bg-light">
            <input class="form-check-input ms-1" type="checkbox" :value="auto" v-model="seleccionador"/>
            <label class="form-check-label ps-1"> Comparar </label>
          </div> -->
          <div class="card-body d-flex flex-column">
            <h5 class="icedcard-title text-center text-uppercase">
              {{ car.MARCA }}
            </h5>
            <hr />
            <h5 class="card-title text-center text-uppercase text-danger">
              $ {{ car.VCHPRECIO.toLocaleString() }}
            </h5>
            <hr />
            <div class="row text-center pb-3">
              <div class="col-6 pt-2">
                 <fa icon="calendar" />{{ car.INTANO }}
              </div>
              <div class="col-6 pt-2">
                <fa icon="code-branch" />{{ car.TRANSMISION.replace("Transmisión ", "") }}
              </div>
              <div class="col-6 pt-2">
                 <fa icon="gas-pump" /> {{ car.COMBUSTIBLE }}
              </div>
              <div class="col-6 pt-2">
               <fa icon="road" />{{ car.VCHKILOMETROS.replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} Kms
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-end mt-auto" >
              <a class="btn btn-dark">VER MÁS</a>
              <div  class="text-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos">
                <i class="fas fa-star fa-2x " data-bs-toggle="modal" data-bs-target="#modalFavoritos" style="cursor:pointer;"></i>
              </div>
            </div>
            <!-- MODAL -->
            <div class="modal fade" id="modalFavoritos" tabindex="-1" aria-hidden="true" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ALERTA DE <strong>FAVORITO</strong></h5>
                    <button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Te enviaremos toda la información referente al automóvil que marcaste como favorito, 
                    alertas cuando se modifique su precio o cuando el mismo no se encuentre disponible.</p>
                    <div>
                      <label class="form-label">Nombre:</label>
                      <input type="text" class="form-control mb-3" placeholder="Nombre">
                      <label class="form-label">Apellido:</label>
                      <input type="text" class="form-control mb-3" placeholder="Apellido">
                      <label class="form-label">Rut:</label>
                      <input type="number" class="form-control mb-3" placeholder="Rut">
                      <label class="form-label">Teléfono:</label>
                      <input type="number" class="form-control mb-3" placeholder="Teléfono">
                      <label class="form-label">Email:</label>
                      <input type="email" class="form-control mb-3" placeholder="Email">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger">Enviar</button>
                  </div>
                </div>
              </div>
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
  name: "Cards",
  props: {
    autos: {
      type: Array,
    },
  },
  methods: {
    ...mapMutations(["formatPrices", "observadorSeleccionado"]),
  },
  computed: {
    ...mapState([
      "data",
      "categorias",
      "marcas",
      "transmisiones",
      "filtrados",
      "combustibles",
      "seleccionados"
    ]),
    seleccionador: {
      get() {
        return this.seleccionados;
      },
      set(v){
        this.observadorSeleccionado(v)
      }
    },
    ...mapGetters(["getFiltrosLateral"]),
  },
  created() {
    this.formatPrices();
  },
};
</script>

<style>
.card {
  box-shadow: 10px 0x #a7a7a7;
  transition: box-shadow 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0 10px 20px #a7a7a7;
}
.card-img-top {
  height: 180px;
  object-fit: cover;
  cursor: pointer;
}
.comparar-check {
  position: absolute;
  right: 0;
  top: 9.0625rem;
  width: 6.25rem;
}
.star {
  color: #fff;
  text-shadow: 0 0 2px #000;
  cursor: pointer;
}


</style>
