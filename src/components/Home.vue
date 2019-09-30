<template>
<div class="Home">
    <h1>{{ msg }}</h1>
     <div class='block'>
      <p>透過vuex store更改接受值</p>
      <vuex-result></vuex-result>
      <vuex-counter></vuex-counter>
    </div>
    <div class='block'>
      <axios-practice></axios-practice>
    </div>
    <div class='block'>
        <ul>
            <router-link tag="li" v-bind:to="{name : 'ParentNode'}">嵌套路由 Nested Routes</router-link>
            <router-link tag="li" to="/DynamicRoute/Page1">動態路由 Dynamic Route</router-link>
            <router-link tag="li" :to="{name:'DynamicRoute2', params:{id:requestPara}}">動態路由2 Dynamic Route 2</router-link>
        </ul>
        <div style='background-color:grey; width:50%; margin:1% 25%; color:white'>
            動態路由2 :to帶上params的方式 可以讓DynamicRoute.vue的路由設定 捨略/DynamicRoute/:id/ id的部分
            <br>
            如此一來可以避面url上面有參數的痕跡
        </div>
    </div>
    <div class='block'>
        傳入金額給子組建 {{Money + '元'}}
        <pass-value :GivenMoney="Money" @retriveMoney="Money = $event"></pass-value>
    </div>
    <div class="block">
        動態組建(Keep alive懶得弄)
        <div class="col-xs-12">
            <button @click="selectedComponent = 'A'">A</button>
            <button @click="selectedComponent = 'B'">B</button>
            <button @click="selectedComponent = 'C'">C</button>
            <hr>
            <p>{{ selectedComponent }}</p>
            <keep-alive>
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>
            </keep-alive>
            <!--<app-quote>-->
            <!--<h2 slot="title">{{ quoteTitle }}</h2>-->
            <!--<p>A wonderful Quote</p>-->
            <!--</app-quote>-->
        </div>
    </div>
    <div class='block'>
        <router-link tag="button" class='btn btn-primary' v-bind:to="{name : 'BeforeLeave'}">beforeRouterLeave</router-link>
    </div>
    <router-link tag="li" to="/Note">Note</router-link>
</div>
</template>

<script>
import PassValuePratice from './PassingValue.vue';
import componentA from './dynamic_components/A.vue';
import componentB from './dynamic_components/B.vue';
import componentC from './dynamic_components/C.vue';
import axiosPractice from './axiosPractice.vue';
import vuexCounter from './vuex_practice_components/Counter';
import vuexResult from './vuex_practice_components/Result';

export default {
    name: 'Home',
    data() {
        return {
            msg: 'Vue的練習',
            requestPara: 'Page2',
            Money: 8000,
            selectedComponent: 'A',

        }
    },
    components: {
        'pass-value': PassValuePratice,
        'A': componentA,
        'B': componentB,
        'C': componentC,
        'axios-practice' : axiosPractice,
        'vuex-counter':vuexCounter,
        'vuex-result':vuexResult,
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
    cursor: pointer;
    text-decoration: underline;
}

a {
    color: #42b983;
}

.block {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    width: 80%;
}
</style>
