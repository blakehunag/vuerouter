<template>
  <div class="hello">
     I'm ChildNode <br>
     query parameter : {{this.$route.query.para1 }}
  </div>
</template>

<script>

export default {
  name: 'CHildNode',
  data () {
    return {
      msg: ''
    }
   
  },
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
