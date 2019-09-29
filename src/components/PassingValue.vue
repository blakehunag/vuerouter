<template>
  <div class="hello">
     子組建<button type="button" @click='SpentMoney'>消費100元</button>回傳金額
  </div>
</template>

<script>
export default {
  name: 'PassValuePratice',
   props:{
      GivenMoney:{
        type: Number,
        required: true
      }
    },
    methods:{
      SpentMoney(){
        this.$emit('retriveMoney', this.GivenMoney - 100);
      }
    },
    data () {
      return {
       msg: ''
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
