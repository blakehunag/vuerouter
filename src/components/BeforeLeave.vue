<template>
<div class="hello">
    <router-link to='/' tag='button' class='btn btn-success'>Leave</router-link>
    <p>Click the button before leave the page~</p>
    <input type='button' @click="confirmed = true" value='Confirm' class='btn btn-danger'>
    <hr>
    <img src="https://i.imgur.com/5nUjshz.png" class="img-fluid" alt="Responsive image">
</div>
</template>

<script>
export default {
    name: 'beforeRouteLeave',
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed)
            next();
        else {
            alert('請confirm');
            next(false);
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
