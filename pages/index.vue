<template>
<div>
  <Slider />
  <RandomCars />

</div>
</template>

<script>
import { mapActions } from "vuex";
import Slider from "~/components/MainSlider.vue";
import RandomCars from "~/components/RandomCards.vue";

export default {
  name: "Index",
  layout: 'Destacados',
  components: {
    Slider,
    RandomCars
  }, 
  methods: {
    ...mapActions(["getData"])
  },
  created () {
    this.getData()
  
  },
};
</script>
