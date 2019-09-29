<template>
<div class="hello">
    <button class="btn btn-primary" @click="increment(5)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <br><br>
    <button class="btn btn-primary" @click="asyncincrement({by : 5, duration : 1000})">asyncincrement</button>
</div>
</template>

<script>
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
    name: 'counter',
    //use mutation
    // methods: {
    //     ...mapMutations([
    //         'increment',
    //         'decrement'
    //     ])
    // },

    //user action
    methods: {
        ...mapActions([
            'increment',
            'decrement',
            'asyncincrement'
        ])
    }

    //若要在編程中觸發action
    //也通? store.dispatch 方法：
    //this.$store.dispatch('increment')

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
