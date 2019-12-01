<template>
    <div class="container">
        <div class="row justify-content-center align-self-center">
            <div class="col-6 mx-auto">
                <div class="card border-light">
                    <h5 class="card-title">Login</h5>
                    <form @submit.prevent="handleSubmit">
                        <!--            The .form-group class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging-->
                        <div class="form-group">
                            <label htmlFor="username">Username</label>
                            <!--                form-control and is-valid -> bootstrap!-->
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" v-model="username" name="username" class="form-control"
                                       :class="{ 'is-invalid': submitted && !username }" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <!--                if it is not valid using the bootstrap "invalid-feedback" it will be displayed-->
                            <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <div class="input-group input-group-sm mb-3">
                                <input type="password" v-model="password" name="password" class="form-control"
                                       :class="{ 'is-invalid': submitted && !password }"/>
                            </div>
                            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" :disabled="loggingIn">Login</button>
                            <div id="error-message" v-if="error">Check credentials!</div>
                            <img v-show="loggingIn"
                                 src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                submitted: false,
                error: '',
                loading: ''
            }
        },
        computed: {
            loggingIn() {
                return this.$store.state.authentication.status.loggingIn;
            }
        },
        created() {
            this.error = false;
            this.$store.dispatch('authentication/logout');
        },
        methods: {
            handleSubmit() {
                this.loading = true;
                this.submitted = true;
                const {username, password} = this;
                const {dispatch} = this.$store;
                if (username && password) {
                    dispatch('authentication/login', {username, password})
                        .then(response => {
                            this.loading=false;
                            this.$router.push({name: 'home'})
                            if(response.status===400){
                                this.error = true;
                            }
                        }).catch(error => {
                        this.loading = false;
                        // eslint-disable-next-line no-console
                        console.log(error);
                        this.error = true;
                    })
                }
            }
        }
    }
</script>

<style>
    .container {
        text-align: center;
        height: 100px;
        margin-top: 8%;
    }
    #error-message{
        color: #ff6666;
        font-size: 14px;
    }
</style>