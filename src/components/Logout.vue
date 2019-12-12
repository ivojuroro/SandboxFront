<template>
    <div class="container h-100" id="logoutContainer">
        <h1>You're logged out</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        beforeCreate(){
            //todo: using mutations to reset userToken
        },
        created() {
            this.$store.dispatch('logout');
            this.$router.push({name: 'home'})
        },
        methods: {}
    }
</script>

<style>
    #logoutContainer {
        text-align: center;
        font: inherit;
        font-weight: bold;
        font-size: x-large;
        margin-top: 10%;
    }
</style>