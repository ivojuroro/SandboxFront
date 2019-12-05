<template>
    <div class="container h-100">
        <div>
            <b-table striped hover :items="items"></b-table>
            <b-button v-on:click="createExercise">Add exercise</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
                    {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
                    {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
                    {age: 38, first_name: 'Jami', last_name: 'Carney'}
                ],
                exercisesQuantity: 0
            }
        },
        created() {
        },
        methods:{
            retrieveExercises: function () {

            },
            createExercise: function () {
                this.$router.push('/createExercise')
            }
        }

    }
</script>