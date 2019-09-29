<template>
<div class="hello">
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
</div>
</template>

<script>
//好像不是很正式的做法 應該用mutation
export default {
    methods: {
        increment(){
          this.$store.state.counter += 100;
        },
        decrement(){
          this.$store.state.counter -= 100;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
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
