<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container h-100">
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
                        <b-col sm="4" class="text-sm-right"><b>Score:</b></b-col>
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
                fieldsToShow: ['login', 'permissionLevel', 'show_details'],
                users: []
            }
        },
        beforeMount: function () {
            userService.getAll()
                .then(user => {
                    this.users = user.data;
                    this.users.forEach(us => us._showDetails = false);
                    this.users.map(us => us.permissionLevel = (us.permissionLevel === 7) ? 'Admin' : 'User');
                    this.users = JSON.parse(JSON.stringify(this.users));
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                })
        }
    }
</script>