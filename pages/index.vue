<template>
  <div>
    <Slider />
    <RandomCars />
    <Mapa />
    <Nuestro />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Slider from "~/components/MainSlider.vue";
import RandomCars from "~/components/RandomCards.vue";
import Mapa from "~/components/Mapa.vue";
import Nuestro from "~/components/NuestroStock.vue";

export default {
  name: "Index",
  layout: "Destacados",
  components: {
    Slider,
    RandomCars,
    Nuestro,
    Mapa,
  },
  methods: {
    ...mapActions(["getIndexData"]),
  },
  computed: {
    ...mapState(["carNumbers"]),
  },
  created() {
    this.getIndexData();
  },
};
</script>
