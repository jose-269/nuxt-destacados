<template>

  <div class="container-lg">
    <div class="row">
      <div v-if="getFicha" class="text-end pe-3 previous-button">
          <nuxt-link to="/seminuevos">
            <button class="btn btn-danger rounded-circle ">
              <fa icon="angle-left" style="font-size:30px"></fa>
            </button>
          </nuxt-link>
        </div>
      <div class="col-12 col-md-8 mt-4 px-xl-5">
        <!-- CAROUSEL SLIDER -->
        <div class="main-carousel-wrapper" >
          <VueSlickCarousel style="cursor: pointer" ref="c1" :asNavFor="c2" :autoplaySpeed="3000" :arrows="true" :autoplay="true" :speed="500" :focusOnSelect="true" class="images-wrapper">
            <div v-for="img in photosArray" :key="img.VCHURL" @click="index = img.VCHURL" >
              <img :src="img.VCHURL" alt="main-pic" class="main-carousel-wrapper__img image" @click="onModal(true)">
            </div>
            <template #prevArrow="arrowOption">
               <div class="custom-arrow-prev">
                {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
              </div>
            </template>
            <template #nextArrow="arrowOption">
               <div class="custom-arrow-next">
                {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="bg-dark indicator-wrapper">
          <div class="indicator-wrapper__within">
            <!-- <VueSlickCarousel ref="c2"  :asNavFor="c1" :autoplay="true" :speed="500" :autoplaySpeed="3000" :slidesToShow="6" :arrows="false" :focusOnSelect="true">
              <div v-for="img,i in pictures" :key="i" >
                <img :src="img.img" alt="indicator-pic" class="indicator-carousel" >
              </div>
            </VueSlickCarousel> -->
          </div>
        </div>
          <!-- FIN CAROUSEL -->
      </div>
      <!-- MODAL -->

    </div>
    <div class="row mb-5">
      <div class="col-12 col-md-8 mt-3">
        <div class="border p-4 shadow h-100">
          <h5><i class="fas fa-star text-warning me-1"></i>Equipamiento</h5>
          <div class="pt-4 px-4">
            <ul class="des-lista p-0">
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Aire
                Acondicionado
              </li>
              <li><i class="fas fa-check text-danger me-2 pb-3"></i>Alarma</li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Cierre
                centralizado
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Dirección
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>4 Puertas
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>4 Air bag
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Alzavidrios
                Eléctricos delanteros
              </li>
              <li><i class="fas fa-check text-danger me-2 pb-3"></i>Cuero</li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Frenos ABS
              </li>
            </ul>
          </div>
          <h5><i class="fas fa-star text-warning me-1"></i>Descripción</h5>
        </div>
      </div>
      <div class="col-12 col-md-4 mt-3">
        <div class="border p-4 shadow">
          <div class="d-flex justify-content-between">
            <div>
              <h5><i class="fas fa-star text-warning me-1"></i>Ubicación</h5>
              <a href="#" style="text-decoration: none">+56-51-2296917</a>
            </div>
            <div class="waze-button my-auto">
              <a href="https://ul.waze.com/ul?ll=-33.45408800%2C-70.60303410&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
              <i class="fab fa-waze fa-2x p-1"></i></a>
            </div>
          </div>
          <div class="mapa pt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426000.965030887!2d-70.91001965610009!3d-33.47189991731077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1588798327102!5m2!1ses!2scl"
              width="100%"
              height="200"
              frameborder="0"
              style="border: 0; margin-bottom: -7px"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class=" text-center">
          <img src="" class="img-fluid" alt="banner-1">
        </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <h2 class="pb-4">Sugeridos</h2>
        <div class="card mb-5" style="width: 18rem">
          <div class="card-header bg-warning">
            <h4 class="mb-0 text-white">Diesel</h4>
          </div>
          <img src="" class="pb-3" alt="" />
          <div class="container py-3">
            <h5 class="card-title pb-2">
              <i class="fas fa-star text-warning"></i>AUDI Q3
            </h5>
            <h5 class="card-title pb-2">$ 2199000</h5>
            <div class="row justify-content-around">
              <div class="col fw-ligth">2018</div>
              <div class="col fw-ligth">Mecánica</div>
              <div class="col fw-ligth">98000 Kms</div>
            </div>
          </div>
          <button class="btn btn-danger">VER MÁS</button>
        </div>
      </div>
    </div>
  </div>

<!-- <div>
  <div >
    <img v-for="(photos, i) in photosArray" :key="i" :src="photos.VCHURL" :alt="photos.VCHNOMBRE" width="300">
  </div>

</div> -->
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "auto",
  layout: "Destacados",
  data() {
    return {
      index: null,
      active: 0,
      c1: undefined,
      c2: undefined,
    }
  },
  computed: {
    getFicha() {
      const finder = this.seminuevosCars.find( el => el.AUTOID == this.$route.params.id);
      if(!finder) return;
      const fichaAmpliada = {
        AUTODES: finder.AUTODES,
        AUTOID: finder.AUTOID,
        PRODUCTOID: finder.PRODUCTOID,
        COMBUSTIBLE: finder.COMBUSTIBLE,
        INTANO: finder.INTANO,
        MARCA: finder.MARCA,
        MODELO: finder.MODELO,
        TRANSMISION: finder.TRANSMISION,
        URLMARCA: finder.URLMARCA,
      };
      this.getPhotosArray(finder.PRODUCTOID);
      return fichaAmpliada;
    },
    ...mapState(["seminuevosCars", "photosArray"]),
  },
  methods: {
    setActive(index) {
      let active = index;
      if (index === this.pics.length) active;
      else if (index === -1) active = this.pics.length - 1;
      this.active = active;
    },
    onModal(on) {
      this.setModal(on);
    },
    ...mapActions(["getPhotosArray"]),
  },
  mounted () {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;;
  },
    watch: {
    showModal: function() {
      if(this.showModal){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
};
</script>

<style></style>
