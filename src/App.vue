<template>
    <div id="app">
        <link href="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand">
                <img src="https://genbin.genesys.com/media/genesys_logo_tagline.svg" width="200" height="40" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><router-link :to="{name: 'home'}" class="nav-link">Home</router-link></li>
                    <li class="nav-item"><router-link :to="{name: 'login'}" class="nav-link">Login</router-link></li>
                    <li v-if="!loggedIn" class="nav-item"><router-link :to="{name: 'exercises'}" class="nav-link">Exercises</router-link></li>
                    <li v-if="!loggedIn" class="nav-item"><router-link :to="{name: 'exercisesstatus'}" class="nav-link">Status</router-link></li>
                    <li v-if="!loggedIn" class="nav-item"><router-link :to="{name: 'users'}" class="nav-link">Users</router-link></li>
                    <li v-if="!loggedIn" class="nav-item"><router-link :to="{name: 'logout'}" class="nav-link">Logout</router-link></li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>

</template>

<script>

    export default {
        name: 'app',
        data(){
            return{}
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            }
        },
        created() {
            // eslint-disable-next-line no-console
            console.log(this.$store.getters.user)
        }
    }
</script>

<style>
</style>