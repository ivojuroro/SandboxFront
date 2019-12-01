import {userService} from '../_services';

const user = JSON.parse(localStorage.getItem('accessToken'));
const initialState = user
    ? {status: {loggedIn: true}, user, type: 0} // if it is already logged then the initial state is the user token
    : {status: {loggedIn: null}, user: null, type: 0}; // if not, there is nothing!

export const authentication = {
    namespaced: true,
    state: {
        initialState, //state is our main application store. It is the single source of truth.
    },
    getters: {
        loggedIn(state){
            return state.status.loggedIn() !== null;
        }
    },
    actions: { //the trigger
        login({dispatch, commit}, {username, password}) { //todo: get the permissionLevel!!!!!
            return new Promise((resolve, reject) => {
            commit('loginRequest', {username});
            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        resolve(user);

                    }).catch(
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, {root: true}); //?
                        reject(error);
                    })
                });
        },

        logout({commit}) {
            userService.logout();
            commit('logout');
        }
    },
    mutations: {
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
