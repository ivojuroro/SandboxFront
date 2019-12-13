import axios from 'axios';

export const exerciseService = {
    retrieveExerciseInfo,
    retrieveExercises,
    deleteExercise,
    insertExercise,
    submitExercise,
    compileExercise
};

axios.defaults.baseURL = 'http://127.0.0.1:3600';

function retrieveExerciseInfo(exerciseId){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get('/exercises/' + exerciseId)
        .then( exerciseInfo => {
            // eslint-disable-next-line no-console
            console.log(exerciseInfo);
            return exerciseInfo;
        }).catch( error =>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
}

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
function submitExercise(exerciseId, lang, code) {
    let codeData = {lang: lang, code: code};
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.post('/submit/' + exerciseId, codeData)
        .then( submitted =>{
            // eslint-disable-next-line no-console
            console.log(submitted);
            return submitted;
        })
        .catch(error =>{
            if (error.response)
            // eslint-disable-next-line no-console
                console.log(error.response.data);
        })
}

function compileExercise(exerciseId, lang, code) {
    let codeData = {lang: lang, code: code};
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.post('/exercises/' + exerciseId, codeData)
        .then(compileResult =>{
            // eslint-disable-next-line no-console
            console.log(compileResult)
            return compileResult;
        })
        .catch( error =>{
            if (error.response)
            // eslint-disable-next-line no-console
                console.log(error.response.data);
        });
}