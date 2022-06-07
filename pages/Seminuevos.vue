<template>
  <div>
    <Slider />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-3">
          <FiltroLateral />
        </div>
        <div class="col-sm-12 col-md-8 col-lg-9">
          <!-- <FiltroResPag /> -->
          <!-- minifichas reciben de parametro los autos a mostrar por ahora no esta -->
        <SeminuevosCars />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/MainSlider.vue";
import SeminuevosCars from "@/components/SeminuevosCars.vue";
// import Buscador from "@/components/Buscador";
// import FiltroSobre from "@/components/filtros/FiltroSobre";
import FiltroLateral from "@/components/filters/FiltroLateral";
// import Paginacion from "@/components/Paginacion";
// import FiltroResPag from "@/components/filtros/FiltroResultadoDePagina";
export default {
  layout: "Destacados",
  computed: {
    // ...mapState(["seminuevosCars"]),
  },
  components: {
    Slider,
    SeminuevosCars,
    FiltroLateral,
  },
};
</script>

<style></style>
