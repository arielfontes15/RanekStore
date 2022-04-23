<template>
  <div class="produto" v-if="propProduto">
    <router-link :to="{ name: 'produto', params: { id: propProduto.id } }">
     <img class="produto-img" v-if="propProduto.fotos" :src="propProduto.fotos[0].src" :alt="propProduto.fotos[0].titulo">
     <p>Ver Produto</p> 
    </router-link>
    <div class="info">
      <p class="preco">{{ propProduto.preco | formatPreco }}</p>
      <h2 class="titulo">{{ propProduto.nome }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["propProduto"],
};
</script>

<style scoped>
.produto{
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
}

.info{
    align-self: end;
}

.produto-img{
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
}
</style>
