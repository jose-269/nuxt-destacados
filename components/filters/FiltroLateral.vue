<template>
  <div class="container-fluid pe-md-0 pe-lg-0 pe-xl-0">
    <div class="row">
      <div class="col-sm-12 px-0">
        <div class="pt-5">
          <Categorias :categories="itemsCategorias" />
          <Brand :brand="brandsItems" />
          <Anios />
          <Precio />
          <Transmision :transmission="itemsTransmision" />
          <Combustible :fuel="itemsCombustible" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categorias from "@/components/filters/lateralFilters/Categorias.vue";
import Brand from "@/components/filters/lateralFilters/Brand.vue";
import Anios from "@/components/filters/lateralFilters/Anios.vue";
import Precio from "@/components/filters/lateralFilters/Precio.vue";
import Transmision from "@/components/filters/lateralFilters/Transmision.vue";
import Combustible from "@/components/filters/lateralFilters/Combustible.vue";
import { mapGetters } from "vuex";

export default {
  name: "FiltroLateral",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["itemsCategorias", "brandsItems", "itemsAnios", "itemsTransmision", "itemsCombustible"]),
  },
  components: {
    Categorias,
    Brand,
    Anios,
    Precio,
    Transmision,
    Combustible,
  },
};
</script>
