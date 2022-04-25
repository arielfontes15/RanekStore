<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div
        class="produtos-wrapper"
        v-for="(venda, index) in vendas"
        :key="index"
      >
        <div class="produto-border">
          <ProdutoItem v-if="venda.produto" :propProduto="venda.produto">
            <p class="comprador">
              <span>Comprador: </span>{{ venda.comprador_id.toUpperCase() }}
            </p>
          </ProdutoItem>
          <div class="entrega">
            <h3>Entrega:</h3>
            <ul v-if="venda.endereco">
              <li v-for="(value, key) in venda.endereco" :key="key">
                {{ key }}: {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "UsuarioVendasView",
  data() {
    return {
      vendas: null,
    };
  },
  components: {
    ProdutoItem: () => import("@/components/ProdutoItem.vue"),
  },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  methods: {
    getVendas() {
      api.get(`/transacao?vendedor_id=${this.usuario.id}`).then((response) => {
        this.vendas = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getVendas();
    },
  },
  created() {
    if (this.login) {
      this.getVendas();
    }
  },
};
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.comprador span {
  color: #e80;
}
h2 {
  margin-bottom: 20px;
}
.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}
h3 {
  margin: 0px;
  justify-self: end;
}

.produto-border {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
  padding: 10px;
  background: white;
  border-radius: 10px;
  transition: all 0.2s;
}
</style>
