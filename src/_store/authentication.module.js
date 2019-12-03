import {userService} from '../_services';
const jwt = require('jsonwebtoken');
import { router } from '../_router';

const user = JSON.parse(localStorage.getItem('accessToken'));
const initialState = user
    ? {status: {loggedIn: true}, user, permissionLevel: null} // if it is already logged then the initial state is the user token
    : { status: {}, user: null, permissionLevel: null }; // if not, there is nothing!

export const authentication = {
    namespaced: true,
    state: initialState,
    getters:{
        getUser: state => {
            // eslint-disable-next-line no-console
            console.log("getting changes on user");
            return state.user;
            },
        getPermissionLevel: state => {
            // eslint-disable-next-line no-console
            console.log("getting changes on pl")
            return state.status.permissionLevel;}
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
                        router.push('/');
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
        updatePermissionLevel(state, permissionLevel){
            state.status = {loggedIn: true, permissionLevel: permissionLevel};
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
};
