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
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item" v-if="!userLoggedIn">
                        <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin">
                        <router-link :to="{name: 'exercises'}" class="nav-link">Exercises</router-link>
                    </li>
                    <li class="nav-item" v-if="isRegularUser">
                        <router-link :to="{name: 'exercisesstatus'}" class="nav-link">Status</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin">
                        <router-link :to="{name: 'users'}" class="nav-link">Users</router-link>
                    </li>
                    <li class="nav-item" v-if="userLoggedIn">
                        <router-link :to="{name: 'logout'}" class="nav-link">Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        computed: {
            userLoggedIn() {
                return this.$store.getters.getUser !== null;
            },
            isAdmin(){
                return this.$store.getters.getIsAdmin;
            },
            isRegularUser(){
              return this.$store.getters.getIsRegularUser;
            }
        },
        methods:{
            mostrar: function () {
                // eslint-disable-next-line no-console
                console.log("soy admin?");
                // eslint-disable-next-line no-console
                console.log(this.isAdmin)
                // eslint-disable-next-line no-console
                console.log(this.userLoggedIn)
            }
        }
    }
</script>

<style>
    #add-data-button {
        margin-left: 1%;

    }

    #add-data-input {
        margin-right: 1%;

    }

    #form-add-test-data {
        margin-bottom: 3%;
        align-content: center;
    }

    #submit-button {
        margin-right: 1%;
    }

    #reset-button {
        margin-left: 1%;
    }

    #code-card{
        background: #f4f4f4;
        border: 1px solid #ddd;
        border-left: 3px solid #f36d33;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1em 1.5em;
        display: block;
        word-wrap: break-word;
    }

    #user-info-card{
        align-content: center;
    }
</style>