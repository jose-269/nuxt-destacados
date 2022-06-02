<template>
  <div>
    <NavBar />
    <Nuxt />
	<Footer />
  </div>
</template>

<script>
import NavBar from "~/components/navBar.vue";
import Footer from "~/components/Footer.vue";
import {mapActions, mapState} from "vuex";
export default {
  layout: "Destacados",
  components: {
    NavBar,
	Footer
  },
  methods: {
     ...mapActions(["getTotalCars"]),
  },
  computed: {
    ...mapState(["carNumbers"]),
  },
  created () {
    this.getTotalCars();
  },
};
</script>
