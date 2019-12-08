<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container h-100">
        <div>
            <h2>Exercises</h2>
            <b-table :items="exercises" :fields="fieldsToShow" striped responsive="sm">
                <template v-slot:cell(show_details)="row">
                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? 'Hide' : 'Show'}}
                    </b-button>
                    <!--                    @click="deleteExercise(item.id)"-->
                    <b-button size="sm" @click="deleteExercise(row.item)" class="mr-2" variant="danger">
                        Delete
                    </b-button>
                </template>
                <template v-slot:row-details="row">
                    <b-card>
                        <b-row class="mb-2">
                            <b-col sm="3" class="text-sm-right"><b>Description:</b></b-col>
                            <b-col>{{ row.item.description }}</b-col>
                        </b-row>
                        <b-row class="mb-2">
                            <b-col sm="3" class="text-sm-right"><b>Test data:</b></b-col>
                            <b-col>{{ row.item.testData }}</b-col>
                        </b-row>
                        <b-card>
                            <b-row class="mb-2">
                                <b-col id="code-card"><code>{{ row.item.exampleCode }}</code></b-col>
                            </b-row>
                        </b-card>
                    </b-card>
                </template>
            </b-table>
            <b-button v-on:click="createExercise">Add exercise</b-button>
        </div>
    </div>
    <!--    </div>-->
</template>

<script>
    import {exerciseService} from "../../_services";

    export default {
        data() {
            return {
                fieldsToShow: ['name', 'show_details'],
                exercises: []
            }
        },
        beforeMount: function () {
            exerciseService.retrieveExercises().then(exercise => {
                this.exercises = exercise.data;
                this.exercises.forEach(ex => ex._showDetails = false);
                this.exercises = JSON.parse(JSON.stringify(this.exercises))
                // eslint-disable-next-line no-console
                console.log(this.exercises); //todo: quitar!
            }).catch(error =>
                // eslint-disable-next-line no-console
                console.log(error)
            );
        },
        methods: {
            deleteExercise: function (exerciseId) {
                exerciseService.deleteExercise(exerciseId.id)
                    .then(deleted => {
                        // eslint-disable-next-line no-console
                        console.log(deleted)
                    })
                    .catch(error => {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
            },
            createExercise: function () {
                this.$router.push('/createExercise')
            }
        }

    }
</script>