import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProdutoView from "../views/ProdutoView.vue";
import LoginView from "../views/LoginView.vue";
import UsuarioView from "../views/usuario/UsuarioView.vue";
import UsuarioProdutosView from "../views/usuario/UsuarioProdutosView.vue";
import UsuarioEditarView from "../views/usuario/UsuarioEditarView.vue";
import UsuarioComprasView from "../views/usuario/UsuarioComprasView.vue";
import UsuarioVendasView from "../views/usuario/UsuarioVendasView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: ProdutoView,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/usuario",
      component: UsuarioView,
      props: true,
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioProdutosView,
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditarView,
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioComprasView,
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendasView,
        },
      ],
    },
  ],
  scrollBehavior() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
