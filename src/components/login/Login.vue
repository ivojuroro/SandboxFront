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
                            <button class="btn btn-primary">Login</button>
                            <div id="error-message" v-if="error">Check credentials!</div>
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
        created() {
            this.error = false;
            this.$store.dispatch('authentication/logout');
        },
        methods: {
            handleSubmit() {
                // eslint-disable-next-line no-console
                console.log("soy yo");
                // eslint-disable-next-line no-console
                console.log(this.$store.state.user);
                this.loading = true;
                this.submitted = true;
                const {username, password} = this;
                const {dispatch} = this.$store;
                dispatch('authentication/login', {username, password});

                if (username && password) {
                    dispatch('authentication/login', {username, password})
                        .then(response => {
                            this.loading=false;
                            if(response.status===400){
                                this.error = true;
                            }
                        }).catch(error => {
                            alert(error);
                        this.loading = false;
                        this.error = true;
                    });
                    this.$router.push({name: 'home'}).catch();
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