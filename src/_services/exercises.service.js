import axios from 'axios';

export const exerciseService = {
    retrieveExercises,
    deleteExercise,
    insertExercise
};

axios.defaults.baseURL = 'http://127.0.0.1:3605';

function retrieveExercises() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get('/exercises')
        .then(savedExercises => {
                return savedExercises;
            }
        ).catch(error => {
            // eslint-disable-next-line no-console
            console.log(error)
        });
}

function insertExercise(exercise) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.post('/exercises', exercise, {headers: {
            'Content-Type': 'application/json'
        }})
        .then(function (storedExercises) {
            if (storedExercises.status === 200) {
                // eslint-disable-next-line no-console
                console.log(storedExercises);
            } else {
                // eslint-disable-next-line no-console
                console.log(storedExercises.status);
            }
            return storedExercises; //returns http response
        })
        .catch((error) =>
            // eslint-disable-next-line no-console
            console.log(error));
}

function deleteExercise(exercideId) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');

    return axios.delete('/exercises/' + exercideId)
        .then(savedExercises => {
                return savedExercises;
            }
        ).catch(error => {
            if (error.response)
                // eslint-disable-next-line no-console
                console.log(error.response.data);
        });
}