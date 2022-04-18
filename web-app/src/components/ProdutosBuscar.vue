<template>
  <div>
    <input name="busca" id="busca" type="text" v-model="busca" /> 
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos" /> 
  </div>
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
      buscarProdutos(){
          this.$router.push({ query: {q: this.busca}});
      }
  }
};
</script>

<style></style>
