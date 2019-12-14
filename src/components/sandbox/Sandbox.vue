<template>
    <section class="row h-100" id="sandbox_container">
        <b-col cols="4">
            <aside style="height:35%; background-color:gainsboro" class="card border-solid justify-content-center">
                <p class="align-self-center">Description:</p><br>
                <p class="align-self-center">{{exercise.description}}</p>
            </aside>
            <aside style="height:35%; background-color:gainsboro" class="card border-solid justify-content-center">
                <p class="align-self-center" >Input data:</p><br>
                <p class="align-self-center" id="testData"></p>
            </aside>
            <aside style="height:30%; width:100%; background-color:gainsboro;" class="card border-solid justify-content-center">
               <p class="align-self-center" style="height:15%;">Result:</p><br>
                <textarea id = "result" style="border:0;height:100%; width:100%; background-color:gainsboro;" ></textarea>
            </aside>
        </b-col>
        <b-col cols="8">
            <b-form-select style="height:6% " v-model="selected" :options="langs" @input="updatelang"></b-form-select>
            <div id='MonacoBox' style="height:80%" class="border-solid">
                <MonacoEditor id='Monaco'
                              :height="h"
                              :width="w"
                              :language="selected"
                              :code="code"
                              :editorOptions="options"
                              @mounted="onMounted"
                              @codeChange="onCodeChange"
                ></MonacoEditor>
            </div>
            <b-row align-h="end" class="mr-10">
                <b-button variant="success" id="runButton" type="button" @click="run"> Run</b-button>
                <b-button variant="info" id="submitButton" type="button" @click="submit"> Submit</b-button>
                <b-button variant="warning" id="homeButton" type="button" @click="home"> Home</b-button>
            </b-row>
        </b-col>
        <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    </section>
</template>


<script>
    import MonacoEditor from 'vue-monaco-editor';
    import Loading from './index'
    import {editor} from 'monaco-editor';
    import {exerciseService} from "../../_services";

    export default {
        data() {
            return {
                exercise: {
                    id: '00000',
                    name: 'test',
                    description: 'Une description par défaut',
                    exampleCode: '',
                    testData: []
                },
                code: '//type here',
                options: {
                    selectOnLineNumbers: true,
                    snippetSuggestions: true,
                    theme: "vs-dark"
                },
                selected: "javascript",
                langs: [
                    {value: "javascript", text: 'JavaScript'},
                    {value: "python", text: 'Python'}],
                monedit: null,
                h: 0,
                w: 0,
                submitResult: "",
                isLoading: false
            }
        },
        beforeMount: function () {
            exerciseService.retrieveExerciseInfo(this.$store.getters.getExerciseId).then(exerciseInfo => {
                // eslint-disable-next-line no-console
                console.log(exerciseInfo.data);
                this.exercise.id = exerciseInfo.data.id;
                this.exercise.name = exerciseInfo.data.name;
                this.exercise.description = exerciseInfo.data.description;
                this.exercise.exampleCode = exerciseInfo.data.exampleCode;
                //this.exercise.testData = exerciseInfo.data.testData;
                this.exercise.testData = ``;
                for(var i=0;i<exerciseInfo.data.testData.length;i++ ){
                    this.exercise.testData += `\rgroup ${i+1}: `;
                    for(var j=0;j<exerciseInfo.data.testData[i].length;j++){
                        this.exercise.testData += `${exerciseInfo.data.testData[i][j]}`
                    }

                }
                // eslint-disable-next-line no-console
                console.log(this.exercise.testData);
                document.getElementById("testData").innerText=this.exercise.testData

            }).catch(error =>
                // eslint-disable-next-line no-console
                console.log(error)
            );
        },
        created() {
            // alert('here we should get the exercise data from the api');
            this.w = 0.645 * Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            this.h = 0.800 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        },
        methods: {
            onCodeChange(edit) {
                this.code = edit.getValue();
            },
            onMounted(edit) {
                this.monedit = edit;
                document.getElementById("Monaco").setAttribute("Height", document.getElementById('MonacoBox').offsetHeight);
                document.getElementById("Monaco").setAttribute("Width", document.getElementById('MonacoBox').offsetWidth);
            },
            updatelang() {
                editor.setModelLanguage(this.monedit.getModel(), this.selected);
            },
            submit() {
                this.isLoading=true;
                // alert('submit for exercise' + this.exercise.id + '\n with code:' + this.code + '\n with example code:' + this.exercise.exampleCode + '\n and testdata : ' + this.exercise.testData)
                exerciseService.submitExercise(this.$store.getters.getExerciseId, this.selected, this.code).then(submitted => {
                    this.isLoading=false;
                    // eslint-disable-next-line no-console
                    console.log(submitted)
                    var score = JSON.stringify(submitted.data.score);
                    document.getElementById("result").value=`score:${score}\n`

                    
                }).catch(error =>
                    // eslint-disable-next-line no-console
                    console.log(error)
                );

            },
            run() {
                // alert('run for exercise' + this.exercise.id + '\n with code:' + this.code + '\n with example code:' + this.exercise.exampleCode + '\n and testdata : ' + this.exercise.testData)
                // alert('submit for exercise' + this.exercise.id + '\n with code:' + this.code + '\n with example code:' + this.exercise.exampleCode + '\n and testdata : ' + this.exercise.testData)
                this.isLoading=true;
                exerciseService.compileExercise(this.$store.getters.getExerciseId, this.selected, this.code).then(executed => {
                    this.isLoading=false
                    // eslint-disable-next-line no-console
                    console.log(executed)
                    // var score = JSON.stringify(executed.data.score);
                    // var time = JSON.stringify(executed.data.time);
                    // var result = JSON.stringify(executed.data.result);
                    //if (result.indexOf("exit") != -1||result.indexOf("error") != -1)
                    var score = executed.data.score;
                    var time = executed.data.time;
                    var result = executed.data.result;
                    document.getElementById("result").value=`score: ${score}\ntime: ${time} ms\nresult: ${result}`

                    
                }).catch(error =>
                    // eslint-disable-next-line no-console
                    console.log(error)
                );
            },
            home() {
                this.$router.push('/')
            },
            mounted() {
    const me = this
    // 初始化页面数据
    me.loadPageData()
  },
  methosd:{
    loadPageData: function() {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
    }
  }
        },
        components: {
            MonacoEditor,
            Loading        },
    }
</script>

<style>
    #sandbox_container {
        position: absolute;
        height: 100%;
        width: 100%;
        margin: 0%;
    }
</style>