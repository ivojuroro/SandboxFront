import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../../src/components/UserHome'
import LoginPage from '../../src/components/login/Login'
import Exercises from '../components/exercises/Exercises'
import statsUsers from '../../src/components/exercises/statsUsers'
import exercisesStatus from '../components/exercises/usersAvExercises'
import Logout from '../../src/components/Logout'
import createExercise from '../../src/components/exercises/createExercise'
import sandbox from '../../src/components/sandbox/Sandbox'
import submittedExercise from '../../src/components/exercises/submittedExerciseByUser'

Vue.use(Router);

export const router = new Router({
    mode: 'history', //history mode: won't change URL
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/login', component: LoginPage, name: 'login'},
        {path: '/exercises', component: Exercises, name: 'exercises'}, // for the final user:  the people in test
        {path: '/users', component: statsUsers, name: 'users'}, // for the admin: it will retrieve info of the user's exercises
        {path: '/exercisesstatus', component: exercisesStatus, name: 'exercisesstatus'}, // for the admin: it will retrieve info of the exercises, and therefore, the users that have been working on it
        {path: '/logout', component: Logout, name: 'logout'},
        {path: '/createExercise', component: createExercise, name: 'createExercise'},
        {path: '/doExercise', component: sandbox, name: 'temporarySandboxPage'},
        {path: '/submitedExercise', component: submittedExercise, name: 'submitedExerciseByUser'},
        {path: '*', redirect: 'home'}
    ],
});