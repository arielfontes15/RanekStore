<template>
  <div id="app">
    <TheHeader />

    <main id="main">
      <router-view />
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
*{
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

ul{
  list-style: none;
}

body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
  width: 100%;
}

a{
  color: #345;
  list-style: none;
  text-decoration: none;
}

img{
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.btn:hover{
  background: #65d;
  transform: scale(1.1);
}

#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

input,
textarea{
 border-radius: 4px;
 border: 1px;
 padding: 15px;
 box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
 transition: all 0.3s;
 font-size: 1rem;
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 margin-bottom: 15px;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus{
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}

</style>
