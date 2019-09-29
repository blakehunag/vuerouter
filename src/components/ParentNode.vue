<template>
<div class="block">
    ParentNode
    <br><br>
    <router-link to="/ParentNode/ChildNode" tag="li">router-link to Display ChildNode</router-link>

    <br><br>
    <router-link to="/ParentNode/ChildNode2" tag="li">router-link to Display ChildNode2</router-link>
    <br><br>
    <button type='button' @click='goToChildNode'>编程式的导航 to Display ChildNode</button>

    <router-view></router-view>
    <br><br>

</div>
</template>

<script>
export default {
    name: 'Parent',
    data() {
        return {

        }
    },
    methods: {
        goToChildNode() {
            this.$router.push('/ParentNode/ChildNode').catch(err => {}); //重複倒向同頁面時會報錯 NavigationDuplicated 
        }
    },
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
}
</style>
