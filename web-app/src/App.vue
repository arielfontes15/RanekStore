<template>
  <div id="app">
    <TheHeader />

    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>

    <TheFooter />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    TheHeader: () => import("@/components/TheHeader.vue"),
    TheFooter: () => import("@/components/TheFooter.vue"),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2 {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
  width: 100%;
}

a {
  color: #345;
  list-style: none;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  color: white;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  font-size: 1rem;
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.btn:hover {
  background: #87f;
  transform: scale(1.1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

label{
  margin: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.5s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
  /* transform: scale(1.1); */
}

.v-enter,
.btnv-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(-20, 0px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
