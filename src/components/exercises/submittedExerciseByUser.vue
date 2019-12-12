<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container h-100" id="users-container">
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
        <h2>Users</h2>
        <b-table :items="users" :fields="fieldsToShow" striped responsive="sm">
            <template v-slot:cell(show_details)="row">
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Hide' : 'Show'}}
                </b-button>
            </template>
            <template v-slot:row-details="row">
                <b-card id="user-info-card">
                    <b-row class="mb-2">
                        <b-col sm="4" class="text-sm-right"><b>Id:</b></b-col>
                        <b-col>{{ row.item.id }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="4" class="text-sm-right" ><b>Score:</b></b-col>
                        <b-col>{{ row.item.score }}</b-col>
                    </b-row>
                </b-card>
            </template>
        </b-table>
    </div>
</template>

<script>
    import {userService} from "../../_services";

    export default {
        data() {
            return {
                fieldsToShow: ['name', 'show_details'],
                exerciseData: [],
            }
        },
        beforeMount: function () {
            userService.getUser(this.$store.getters.getUserId)
                .then(userInfo =>{
                    // eslint-disable-next-line no-console
                    console.log(userInfo)
                })
                .catch(error =>{
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        }
    }
</script>
<style>
    #users-container {
        font-family: 'Raleway', sans-serif;
    }
</style>