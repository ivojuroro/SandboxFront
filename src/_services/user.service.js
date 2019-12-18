import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll,
    getUser
};

axios.defaults.baseURL = 'http://app:3600';

function login(username, password) {
    let loginUser = {login: username, password: password};
    const headers = {'Content-Type': 'application/json'};
    return axios.post('/auth', loginUser, headers)
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
    localStorage.clear();
}

function getAll() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get('/users')
        .then(users => {
                return users;
            }
        ).catch(error => {
                return error;
            }
        )
}

function getUser(userId) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get('/stats/users/' + userId)
        .then(userInfo => {
                return userInfo.data;
            }
        ).catch(error => {
                return error;
            }
        )
}