<template>
    <div>
        <div class="container h-100" id="user-home-container">
            <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
            <h1 id="welcome-message">Welcome to the Genesys Sandbox project</h1>
            <h4 id="personalized-message" v-if="isUser"> Here, you will find tools to create/delete exercises
                and also the list of users.</h4>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        computed: {
            isUser: function () {
                return this.$store.getters.getIsAdmin;
            }
        }
    };
</script>
<style>
    #welcome-message {
        font-family: 'Raleway', sans-serif;
        text-align: center;
        font: inherit;
        font-weight: bold;
        font-size: x-large;
        margin-top: 10%;
    }

    #personalized-message {
        font-family: 'Raleway', sans-serif;
        text-align: center;
        font: inherit;
        font-weight: bold;
        font-size: medium;
        margin-top: 10%;
    }
    #user-home-container{
        font-family: 'Raleway', sans-serif;
    }
</style>