<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar Usuario
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "UsuarioEditarView",
  components: {
    UsuarioForm: () => import("@/components/UsuarioForm.vue"),
  },
  methods: {
    atualizarUsuario() {
      api
        .put(
          `/usuario/${this.$store.state.usuario.id}`,
          this.$store.state.usuario
        )
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push("/usuario");
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    //Passar o id no paramtro caso queira editar um usuario ja existente
    // atualizarUsuario() {
    //   api
    //     .put(
    //       `/usuario/${this.$store.state.usuario.id}`,
    //       this.$store.state.usuario
    //     )
    //     // .update(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario) fazer assim caso nao pegar o id por parametro
    //     .then(() => {
    //       this.$store.dispatch("getUsuario");
    //       this.$router.push({name: 'usuario'}); //fazer assim caso nao pegar o id por parametro
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    // },
  },
};
</script>

<style></style>
