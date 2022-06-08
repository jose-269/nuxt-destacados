<template>
<!-- <img :src="getFicha" alt=""> -->
<h1>{{getFicha}}</h1>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "auto",
  layout: "Destacados",
  computed: {
    getFicha() {
      const finder = this.seminuevosCars.find( el => el.AUTOID == this.$route.params.id);
      if(!finder) return;
      const fichaAmpliada = {
        AUTODES: finder.AUTODES,
        AUTOID: finder.AUTOID,
        COMBUSTIBLE: finder.COMBUSTIBLE,
        INTANO: finder.INTANO,
        MARCA: finder.MARCA,
        MODELO: finder.MODELO,
        TRANSMISION: finder.TRANSMISION,
        URLMARCA: finder.URLMARCA,
      };
      return fichaAmpliada;
    },
    ...mapState(["seminuevosCars"]),
  },
  methods: {
  },
};
</script>

<style></style>
