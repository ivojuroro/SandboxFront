<template>
    <div class="container h-100">
        <b-form @submit.prevent="handleSubmit">
            <b-form-group id="input-group-name" label="Name:" label-for="input-1">
                <b-form-input
                        id="input-2"
                        v-model="form.name"
                        required
                        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-description" label="Description:" label-for="input-2">
                <b-form-input
                        id="input-description"
                        v-model="form.description"
                        required
                        placeholder="Enter description"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-description" label="Language of the example:" label-for="input-5">
                <b-form-input
                        id="input-5"
                        v-model="form.exampleCodeLang"
                        required
                        placeholder="Enter example code language"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-example-code" label="Example code:" label-for="input-3" size="5">
                <b-form-textarea
                        id="input-example-code"
                        v-model="form.exampleCode"
                        rows="3"
                        max-rows="6"
                        placeholder="Enter code example"
                ></b-form-textarea>
            </b-form-group>

            <b-form-group id="input-group-example-code" label="Test data:" label-for="input-4" size="5">
                <b-form-textarea
                        id="input-example-code"
                        rows="3"
                        max-rows="6"
                        v-model="form.testData"
                        placeholder="Enter test data: each line is a group of test data, don't need input quotes or double quotes for string  "
                ></b-form-textarea>
            </b-form-group>
            <div>
                <b-button type="submit" variant="primary" id="submit-button">Submit</b-button>
                <b-button variant="secondary" id="back-button" @click="backToExercises"> Back </b-button>
                <b-button type="reset" variant="danger" id="reset-button">Reset</b-button>
            </div>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
    import {exerciseService} from "../../_services";

    export default {
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    exampleCode: '',
                    exampleCodeLang: '',
                    testData: [[]]
                }
            }
        },
        methods: {
            modifyTestData() {
                // if (this.form.testData[0].length === 0) {
                //     return
                // }
                if (this.form.testData[0].length != 0) {
                    this.form.testData = this.form.testData.split("\n").map(d => d.split(","));
                }
            },
            handleSubmit() {
                this.modifyTestData();
                exerciseService.insertExercise(JSON.stringify(this.form));
                this.$router.push('/exercises');
            },
            backToExercises() {
                this.$router.push('/exercises');
            }
            
        }
    }
</script>