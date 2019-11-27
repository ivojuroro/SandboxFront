<template>
    <div class="container">
    <div class="card border-light" >
        <form @submit.prevent="handleSubmit">
            <!--            The .form-group class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging-->
            <div class="form-group">
                <label htmlFor="username">Username</label>
                <!--                form-control and is-valid -> bootstrap!-->
                <div class="input-group input-group-sm mb-3">
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                    <!--                if it is not valid using the bootstrap "invalid-feedback" it will be displayed-->
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <div class="input-group input-group-sm mb-3">
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                </div>
                    <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button v-on:click.prevent="sendLogin" class="btn btn-primary" :disabled="loading">Login</button>
<!--                <button class="btn btn-primary" :disabled="loading">Login</button>-->
                <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            </div>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </form>
    </div>
    </div>
</template>


<script>
    // import {router} from "../../_helpers/router";
    // import {userService} from "../../_services/user.service";

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
            sendLogin: function() {
                this.submitted = true;
                // Now I have your data
                const {username, password} = this;
                // stop here if form is invalid, it doesn't allow me to send data
                if (!(username && password)) {
                    return;
                }
                this.loading = true;
                // userService.login(this.username, this.password);
                let loginUser = {login : this.username, password : this.password};
                const headers = { 'Content-Type': 'application/json' };
                // eslint-disable-next-line no-console
                this.$http.post('http://127.0.0.1:3602/auth', loginUser, headers).then((response) => {console.log(response)}).catch((error) => console.log(error));
            }
        }
    }
</script>