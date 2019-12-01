
export function authHeader() {
    let authToken = JSON.parse(localStorage.getItem('token'));
    if (authToken){
        return {"Authorization" : "Bearer" + authToken};
    } else{
        return {};
    }
}