import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    let loginUser = {login: username, password: password};
    const headers = {'Content-Type': 'application/json'};
    // eslint-disable-next-line no-console
    return axios.post('http://127.0.0.1:3605/auth', loginUser, headers)
        .then(function (user) {
            if (user.status === 201) {
                // eslint-disable-next-line no-console
                console.log(user);
                localStorage.setItem('user', user.data.accessToken);
            } else {
                // eslint-disable-next-line no-console
                console.log(user.status);
                logout();
                location.reload();
            }
            return user; //returns http response
        })
        .catch((error) =>
            // eslint-disable-next-line no-console
            console.log(error));
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
return axios.get('http://127.0.0.1:3605/users').then()
}