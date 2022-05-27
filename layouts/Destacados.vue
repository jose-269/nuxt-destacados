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
export default {
  components: {
    NavBar,
	Footer
  },
  layout: "Destacados",
};
</script>
