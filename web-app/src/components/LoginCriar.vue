<template>
  <section>
    <h2>Crie a sua conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" @click="criar = true" class="btn criar">
        Criar Conta
      </button>
      <UsuarioForm v-else>
        <button class="btn btn-form">Criar Usuario</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
export default {
  name: "LoginCriar",
  components: {
    UsuarioForm: () => import("@/components/UsuarioForm.vue"),
  },
  data() {
    return {
      criar: false,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form{
  max-width: 100%;
}
</style>
