<template>
    <div>
        <h1>Hi {{user.firstName}}!</h1>
        <p v-if="user.admin==0">You're logged in as an user </p>
		<p v-if="user.admin==1">You're logged in as an admin </p>
        <h3>Users from secure api end point:</h3>
        <em v-if="users.loading">Loading users...</em>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">
                {{user.firstName + ' ' + user.lastName}}
            </li>
        </ul>
		<p v-if="user.admin==0">
			<router-link to="/exercises">Try an exercise !</router-link>
		</p>
		<p v-if="user.admin==1">
			<router-link to="/userstats">consult users stats</router-link>
		</p>
		<p v-if="user.admin==1">
			<router-link to="/exercisestats">consult exercises stats</router-link>
		</p>
		<p>
            <router-link to="/login">Logout</router-link>
        </p>


		
    </div>
</template>

<script>
import { userService } from '../_services';

export default {
    data () {
        return {
            user: {},
            users: []
        }
    },
    created () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.users.loading = true;
        userService.getAll().then(users => this.users = users);
    }
};
</script>