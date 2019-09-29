<template>
<form>
    <div class="form-group">
        <h3>Axios - Firebase Practice</h3>
        <label for="name">Name</label>
        <input type='text' class='form-group mx-sm-3 mb-2' v-model='userData.Name' id='name'>
        <label for='male'>Male</label>
        <input type='radio' id='male' v-model='userData.Gender' value='Male'>
        <label for='female'>Female</label>
        <input type='radio' id='female' v-model='userData.Gender' value='Female'>
    </div>
    Data Preview
    <p>{{userData.Name + ' ' +  userData.Gender}}</p>
    <div class="form-group">
        <input type='button' class="btn btn-primary" @click='postData' value='PostData' />
        <input type='button' class="btn btn-primary" @click='getData' value='GetData' />
    </div>
    <ul>
        <li v-for='user in resData'>{{user.Name}}  -  {{user.Gender}}</li>
    </ul>
</form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AxiosPractice',
    data() {
        return {
            msg: '',
            userData: {
                Name: '',
                Gender: ''
            },
            resData: []
        }
    },
    methods: {
        postData() {
            axios.post('https://axios-practice-3ba54.firebaseio.com/user.json', this.userData)
                .then(res => {
                    console.log(res);
                    this.getData();
                })
                .catch(error => console.log(error));
        },
        getData() {
            axios.get('https://axios-practice-3ba54.firebaseio.com/user.json')
                .then(res => {
                     this.resData = [];
                    for (let key in res.data) {
                        const user = res.data[key];
                        this.resData.push(user);
                        console.log(this.resData)
                    }
                })
                .catch(error => console.log(error));
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
}

a {
    color: #42b983;
}
</style>
