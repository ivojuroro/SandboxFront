import axios from 'axios';

export const trainingService = {
    getTrainings:getTraining
};

function getTraining(userId) {
    var trainingIds = []
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get('/stats/users/'+userId)
    .then(trainings => {
        trainings.data.forEach(element => {
            trainingIds.push(element.exerciseId);
        });
            return Array.from(new Set(trainingIds));
        }
    ).catch(error => {
            return error;
        }
    )
}