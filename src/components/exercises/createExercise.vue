<template>
    <div class="container h-100">
        <b-form @submit.prevent="handleSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-name" label="Name:" label-for="input-2">
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

            <b-form-group id="input-group-example-code" label="Example code:" label-for="input-3" size="5">
                <b-form-textarea
                        id="input-example-code"
                        v-model="form.exampleCode"
                        rows="3"
                        max-rows="6"
                        placeholder="Enter code example"
                ></b-form-textarea>
            </b-form-group>
            <div v-if="sent" id="exercise-sent-label">
                <h2>Exercise sent!</h2>
            </div>
            <div>
                <b-button type="submit" variant="primary" id="submit-button">Submit</b-button>
                <b-button type="reset" variant="danger" id="reset-button">Reset</b-button>
            </div>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
    // import exerciseService from '../../_services';
    export default {
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    exampleCode: '',
                    testData: []
                },
                sent: false,
                show: true
            }
        },
        methods: {
            addTestData: function () {
                let newData = this.dataInput;
                if (!newData) {
                    return;
                }
                this.testData.push(newData);
                // eslint-disable-next-line no-console
                console.log(this.testData);
                this.dataInput = '';
            },
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            handleSubmit() {
                // eslint-disable-next-line no-console
                console.log("sending exercise");
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(this.form));
            },
            onReset(evt) {
                // eslint-disable-next-line no-console
                console.log(this.form);
                evt.preventDefault()
                this.form.name = '';
                this.form.description = '';
                this.form.exampleCode = '';
                this.form.testData = [];
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>