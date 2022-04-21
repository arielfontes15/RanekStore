<template>
  <section class="usuario">
    <nav>
      <ul>
        <li>
          <router-link to="/">Produtos</router-link>
        </li>
      </ul>
    </nav>
    <p>Pagina do Usuario {{ $store.state.usuario }}</p>
  </section>
</template>

<script>
export default {
  name: "UsuarioView",
};
</script>

<style></style>
