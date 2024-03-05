<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Demo />
  <b-card
    imgSrc="logo.png"
    summary="vueZIDINGY"
  >
    <template v-slot:footer>
      <h3>footer</h3>
    </template>
  </b-card>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
