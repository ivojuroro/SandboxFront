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
        created() {
            this.$store.dispatch('authentication/logout');
            this.$router.push({name: '/'})
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