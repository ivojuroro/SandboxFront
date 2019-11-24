<template>
    <div class="hello">
        <form>
            <!--            The .form-group class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging-->
            <div class="form-group">
                <label htmlFor="username">Username</label>
                <!--                form-control and is-valid -> bootstrap!-->
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <!--                if it is not valid using the bootstrap "invalid-feedback" it will be displayed-->
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button v-on:click.prevent="postAxios" class="loginButton">Login</button>
<!--                <button class="btn btn-primary" :disabled="loading">Login</button>-->
                <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            </div>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                username: '',
                password: '',
                submitted: false,
                loading: false,
                returnUrl: '',
                error: '',
                response:'',
            }
        },
        props: {
            msg: String
        },
        methods:{
            postAxios: function(){
                this.$http.get('https://reqres.in/api/users')
                    .then(res => {
                        // eslint-disable-next-line no-console
                        console.log(res.data.data);
                    })
            },
            postLogin: function () {
                this.$http.post('127.0.0.1:3600/auth',{
                    login: this.username,
                    password: this.password
                }, {emulateJSON: true}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    // eslint-disable-next-line no-console
                    console.log(JSON.parse(response.data))
                    }
                )
            },
            getGoogle: function () {
                this.$http.get('https://github.com',
                    // eslint-disable-next-line no-console
                    response=>console.log(response.data()));
            },
            postTest: function(){
                this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                    title: 'goo',
                    body: 'goo',
                    userId: 1
                }).then(function (data) {
                    // eslint-disable-next-line no-console
                    console.log(data);
                })
            }
        }
    }
</script>
<style>
    .invalid-feedback {
        font-size: x-small;
        padding-top: 5px;
        color: crimson;
    }
    .form-group{
        padding-top: 5px;
    }
    .loginButton{
        padding:3px 10px;
        font-family:'Wallpoet';
        font-weight: bolder;
    }
</style>