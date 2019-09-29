<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>router設定預設載入Home.vue</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
   methods: {
    goToChildNode(){      
      this.router.push('/');
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active{ color: #88e188}
</style>
