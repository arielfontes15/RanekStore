<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div
        class="produtos-wrapper"
        v-for="(compra, index) in compras"
        :key="index"
      >
        <div class="produto-border">
          <ProdutoItem v-if="compra.produto" :propProduto="compra.produto">
            <p class="vendedor">
              <span>Vendedor: </span>{{ compra.vendedor_id.toUpperCase() }}
            </p>
          </ProdutoItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "UsuarioComprasView",
  data() {
    return {
      compras: null,
    };
  },
  components: {
    ProdutoItem: () => import("@/components/ProdutoItem.vue"),
  },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  methods: {
    getCompras() {
      api.get(`/transacao?comprador_id=${this.usuario.id}`).then((response) => {
        this.compras = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getCompras();
    },
  },
  created() {
    if (this.login) {
      this.getCompras();
    }
  },
};
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e80;
}
h2 {
  margin-bottom: 20px;
}

.produto-border {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
  padding: 10px;
  background: white;
  border-radius: 10px;
  transition: all 0.2s;
  margin-top: 20px;
}
</style>
