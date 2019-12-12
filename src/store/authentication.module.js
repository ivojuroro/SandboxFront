import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import {userService} from '../_services';
const jwt = require('jsonwebtoken');

const user = JSON.parse(localStorage.getItem('accessToken'));
const initialState = user
    ? {status: {loggedIn: true}, user, permissionLevel: null, exerciseId: null, userId: null} // if it is already logged then the initial state is the user token
    : { status: {}, user: null, permissionLevel: null, exerciseId: null, userId: null}; // if not, there is nothing!

export const store = new Vuex.Store({
    namespaced: true,
    state: initialState,
    getters:{
        getUserId: (state) =>{
            return state.userId;
        },
        getExerciseId: (state) => {
            return state.exerciseId;
        },
        getUser: (state) => {
            return state.user;
            },
        getPermissionLevel: (state) => {
            return state.permissionLevel;
            },
        getIsAdmin: (state) =>{
            return state.permissionLevel === 7 && state.user !== null;
        },
        getIsRegularUser: (state) =>{
            return state.permissionLevel === 3 && state.user !== null;
        }
    },
    actions: { //the trigger
        login({dispatch, commit}, {username, password}) {
            return new Promise((resolve, reject) => {
            commit('loginRequest', {username});
            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        commit('updatePermissionLevel', jwt.verify(user.data.accessToken, "myS33!!creeeT").permissionLevel);
                        resolve(user);
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, {root: true});
                    }
                    ).catch(
                    error => {
                        commit('loginFailure');
                        dispatch('alert/error', error, {root: true}); //?
                        reject(error);
                    })
                });
        },

        logout({commit}) {
            userService.logout();
            commit('logout');
        },

        getAll({dispatch}){
            return new Promise((resolve, reject) => {
                userService.getAll().then(users =>{
                    resolve(users)
                    }
                ).catch(error=>{
                    dispatch('alert/error', error, {root: true});
                    reject(error)
                })
            });
        }

    },
    mutations: {
        updateUserId(state, userId){
            state.userId = userId;
        },
        updateExerciseId(state, exerciseId){
          state.exerciseId = exerciseId;
        },
        updatePermissionLevel(state, permissionLevel){
            state.permissionLevel = permissionLevel;
        },
        loginRequest(state, user) {
            state.status = {loggingIn: false};
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = {loggedIn: true};
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
});