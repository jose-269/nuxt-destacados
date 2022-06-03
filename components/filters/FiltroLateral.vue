<template>
  <div class="container-fluid pe-md-0 pe-lg-0 pe-xl-0">
    <div class="row">
      <div class="col-sm-12 px-0">
        <div class="pt-5">
          <Categorias :categories="itemsCategorias" />
          <!-- <Marca /> -->
          <Brand :brand="brandsItems" />
          <Anios :years="yearsItems" />
          <Precio />
          <Transmision :transmission="itemsTransmision" />
          <Combustible :fuel="itemsCombustible" />
          <!-- <Categorias :categories="itemsCategorias" v-if="categoriasToggle" /> -->
          <!--<Anios :years="itemsAnios" v-if="aniosToggle"/>
          <Precio :prices="itemsPrecios" v-if="precioToggle" />
          <Transmision :transmission="itemsTransmision" v-if="transmisionToggle" />
          <Combustible :fuel="itemsCombustible" v-if="combustibleToggle"/> -->
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
// import { mapState, mapGetters} from "vuex"
import { mapGetters } from "vuex";

export default {
  name: "FiltroLateral",
  data() {
    return {};
  },
  computed: {
    // ...mapState(["carNumbers"]),
    // ...mapState(["categoriasToggle", "marcaToggle", "aniosToggle", "precioToggle", "transmisionToggle", "combustibleToggle"]),
    // ...mapGetters(["itemsCategorias", "itemsAnios", "itemsTransmision", "itemsCombustible", "itemsMarcas", "itemsPrecios"]),
    ...mapGetters(["itemsCategorias", "brandsItems", "itemsAnios", "itemsTransmision", "itemsCombustible", "yearsItems"]),
  },
  components: {
    Categorias,
    Brand,
    Anios,
    Precio,
    Transmision,
    Combustible,
  },
  beforeMount() {
    this.yearsItems;
  },
  created () {
    this.yearsItems;
  },
};
</script>

<style></style>
