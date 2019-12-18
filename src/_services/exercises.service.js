import axios from 'axios';

export const exerciseService = {
    retrieveExerciseInfo,
    retrieveExercises,
    deleteExercise,
    insertExercise,
    submitExercise,
    compileExercise
};

axios.defaults.baseURL = 'http://app:3600';

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
    var processedExecs  = JSON.parse(exercise);
    if (processedExecs.testData[0].length != 0)
        processedExecs=processTestData(exercise);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.post('/exercises', processedExecs, {headers: {
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

function processTestData(exercise) {
    var execs = JSON.parse(exercise);
   // var testData = exercise.substring(exercise.indexOf("testData"),exercise.length);
    //var data = testData.split('\n');
    var data = execs.testData;
    var arr = []
    for(var i=0;i<data.length;i++){
        arr.push([])
        if(data[i][0].indexOf("[")!=-1){
            arr[i].push(processArrayElem(data[i]))
        }
        else {
            //testData[i] = testData[i].split(",");
            for(var j=0;j<data[i].length;j++){
                if(isNum(data[i][j]))
                    arr[i].push(parseInt(data[i][j]));
                else
                arr[i].push(data[i][j]);
            }
        }
    }
    execs.testData = arr;

    
    return JSON.stringify(execs);
}
function processArrayElem(elem)
{
    var arr=[];
    //var items = elem.substring(1,elem.length-1).split(",");
    for(var i=0;i<elem.length;i++) {
        if(isNum(elem[i].substring(elem[i].indexOf("[")===-1?0:1,elem[i].length)))
            arr.push(parseInt(elem[i].substring(elem[i].indexOf("[")===-1?0:1,elem[i].length)));
        else
            if(isNum(elem[i].substring(0,elem[i].indexOf("]")===-1?elem[i].length:elem[i].length-1)))
            arr.push(parseInt(elem[i].substring(0,elem[i].indexOf("]")===-1?elem[i].length:elem[i].length-1)));
        else
            arr.push(elem[i]);
    }
    return arr;
}
function isNum(str) {
    var n = Number(str);
    if (!isNaN(n))
        return true;
    return false;
    
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