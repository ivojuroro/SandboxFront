<template>
    <div class="container h-100">
        <div>
            <b-button v-on:click="createExercise">Add exercise</b-button>
<!--            <b-button v-on:click="retrieveExercises">Retrieve</b-button>-->
        </div>
    </div>
    <!--    </div>-->
</template>

<script>
    import {exerciseService} from "../../_services";

    export default {
        data() {
            return {
                exercises: ''
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            retrieveExercises: function () {
                exerciseService.retrieveExercises().then(exercise => {
                    let exercises = [];
                    exercise.forEach(function (d) {
                        exercises.push({"name": d.name, "description": d.description});
                    });
                    return exercises;
                }).catch(error =>
                    // eslint-disable-next-line no-console
                    console.log(error)
                );
            },
            createExercise: function () {
                this.$router.push('/createExercise')
            }
        }

    }
</script>