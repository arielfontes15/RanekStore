<template>
  <div>
    <header>
      <nav>
        <router-link to="/" class="logo">
          <img src="@/assets/ranek.svg" alt="Ranek" />
        </router-link>
        <router-link to="/login" class="btn"> Vender / Login </router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 100px;
}
</style>
