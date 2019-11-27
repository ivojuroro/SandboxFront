export const userService = {
    login
};

function login(username,password) {
    let loginUser = {login : username, password : password};
    const headers = { 'Content-Type': 'application/json' };
    // eslint-disable-next-line no-console
    this.$http.post('http://127.0.0.1:3602/auth', loginUser, headers).then((response) => {console.log(response)}).catch((error) => console.log(error));
    }