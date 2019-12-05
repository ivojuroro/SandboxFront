import axios from 'axios';

export const exerciseService = {
    retrieveExercises,
    insertExercise
};

function retrieveExercises() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return new Promise((resolve, reject) => {
        return axios.get('http://127.0.0.1:3605/exercises')
            .then(savedExercises => {
                // // eslint-disable-next-line no-console
                // console.log(savedExercises.data);
                    resolve(savedExercises.data);
                    // return savedExercises.data.json();
                    return savedExercises.data;
                }
            ).catch(error => {
                reject(error);
                location.reload();
            });

    });
}

function insertExercise(exercise) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').data.accessToken;
    // eslint-disable-next-line no-console
    console.log(this.$store.status.user.data.accessToken)
    return axios.post('http://127.0.0.1:3605/exercises', exercise)
        .then(function (storedExercises) {
            if (storedExercises.status === 200) {
                // eslint-disable-next-line no-console
                console.log(storedExercises);
            } else {
                // eslint-disable-next-line no-console
                console.log(storedExercises.status);
                location.reload();
            }
            return storedExercises; //returns http response
        })
        .catch((error) =>
            // eslint-disable-next-line no-console
            console.log(error));
}