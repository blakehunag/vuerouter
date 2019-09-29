<template>
  <div class="block">
    兩個組建之前傳直可參考eventBus方式，或透過vuex
    約略方式為多new Vue()一個instant 並讓原本Vue的實例在onCreate時監聽事件
  </div>
</template>

<script>
export default {
  name: 'MyNote',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
