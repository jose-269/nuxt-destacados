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
import { mapActions, } from "vuex";

export default {
  layout: "Destacados",
  components: {
    NavBar,
    Footer,
  },
  methods: {
      ...mapActions(["getData"]),
  },
  computed: {
  },
  created() {
    this.getData();
  },
};
</script>
