import axios from 'axios';

export const exerciseService = {
    retrieveExercises,
    insertExercise
};

function retrieveExercises() {

}

function insertExercise(exercise) {
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