// import {exerciseService} from '../_services';
//
// export const exercises = {
//     state: {},
//     getters: {},
//     actions: {
//
//         retrieveExercises({dispatch}) {
//             return new Promise((resolve, reject) => {
//                 exerciseService.retrieveExercises().then(exercises =>{
//                     resolve(exercises)
//                 }).catch(error=> {
//                     dispatch('alert/error', error, {root: true}); //?
//                     reject(error);
//                 })
//             });
//         },
//
//         insertExercise({dispatch},{exercise}) {
//             return new Promise((resolve, reject) => {
//                 // eslint-disable-next-line no-console
//                 console.log("entre al metodo")
//                 exerciseService.insertExercise(exercise).then(exercises =>{
//                     // eslint-disable-next-line no-console
//                     console.log("entre al que envia y lo logre")
//                     resolve(exercises)
//                 }).catch(error=> {
//                     dispatch('alert/error', error, {root: true}); //?
//                     reject(error);
//                 })
//             });
//         }
//     },
//     mutations: {}
// };