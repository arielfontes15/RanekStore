<template>
  <section class="home">
    <h1> 💰 Compre ou Venda 💰 </h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    ProdutosLista: () => import("@/components/ProdutosLista.vue"),
    ProdutosBuscar: () => import("@/components/ProdutosBuscar.vue"),
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}

</style>