<template>
<div class="hello">
    <!--<p>Couner is : {{this.$store.state.counter}}</p> -->
    <!--<p>Couner is : {{this.$store.getters.getCounter}}</p> -->
    <p>Couner is : {{getCounter}}</p> <!--有透過mapGetters 上面那行的是直接取-->
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Result',
    //使用mapGetter前的寫法
    //computed:{
    //   counter(){
    //       return this.$store.getters.doubleCounter;
    //   }
    computed: {
        //npm install --save-dev babel-preset-stage-2
        ...mapGetters([
            'getCounter'
        ]),
        doNothing() {
        }
    },
    

    //原有寫法會讓computed被指派為只有一個mapGetter方法 如下面
    //所以引用babel-preset-stage-2 (...為es6需要額外!?)
    //後可以多加doNothing()之類的
    // computed: mapGetters([
    //     'doubleCounter'
    // ])
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
