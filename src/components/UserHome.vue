<template>
    <div>
        <h1 id="welcome-message">Welcome to the Genesys Sandbox project</h1>
        <h4 id="personalized-message" v-if="isUser"> Here, you will find tools to create/delete exercises
        and also the list of users.</h4>
    </div>
</template>

<script>
    export default {
        data: function () {
            return{
            }
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
        text-align: center;
        font: inherit;
        font-weight: bold;
        font-size: x-large;
        margin-top: 10%;
    }

    #personalized-message{
        text-align: center;
        font: inherit;
        font-weight: bold;
        font-size: medium;
        margin-top: 10%;
    }
</style>