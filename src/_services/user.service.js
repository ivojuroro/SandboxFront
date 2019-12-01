import axios from 'axios';
import JwtDeprypter from 'vue-jwt-decode';

export const userService = {
    login,
    logout
};

function login(username, password) {
    let loginUser = {login: username, password: password};
    const headers = {'Content-Type': 'application/json'};
    // eslint-disable-next-line no-console
    return axios.post('http://127.0.0.1:3602/auth', loginUser, headers)
        .then(function (user) {
            if (user.status === 201) {
                // eslint-disable-next-line no-console
                console.log(user);
                localStorage.setItem('user', user.data.accessToken);
                // eslint-disable-next-line no-console
                console.log(JwtDeprypter.decode(localStorage.getItem('user')));
                window.isSignedIn = true;
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
    localStorage.clear();
}