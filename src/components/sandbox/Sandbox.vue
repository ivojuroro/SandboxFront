<template>
<section class = "row h-100" id="sandbox_container">
        <b-col cols="4"> 
            <aside style ="height:45%; background-color:gainsboro" class = "card border-solid justify-content-center">
                <p class="align-self-center">Description:</p><br>
                <p class="align-self-center">{{exercise.description}}</p>
            </aside>     
            <aside style ="height:45%; background-color:gainsboro" class = "card border-solid justify-content-center">
                <p class="align-self-center">Données d'entrée:</p><br>
                <p class="align-self-center">{{exercise.testData}}</p>
            </aside>
        </b-col>
        <b-col cols="8">
        <b-form-select style ="height:6% " v-model="selected" :options="langs" @input="updatelang"></b-form-select>
        <div id='MonacoBox' style="height:80%" class = "border-solid">
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
            <b-button variant="success" id = "runButton" type = "button" @click="run"> Run </b-button>
            <b-button variant="info" id = "submitButton" type = "button" @click="submit"> Submit </b-button>
            <b-button variant="warning" id = "homeButton" type = "button" @click="home"> Home </b-button>
        </b-row>     
        </b-col> 
    </section>
</template>


<script>
import MonacoEditor from 'vue-monaco-editor';
import {editor} from 'monaco-editor';

export default {
  data () {
    return {
        exercise : { id: '00000',
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
          { value: "javascript", text: 'JavaScript' },
          { value: "python", text: 'Pyhton'}],
        monedit:null,
        h:0,
        w:0
    }
  },
  created(){
      alert('here we should get the exercise data from the api');
      this.w = 0.645*Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      this.h = 0.800*Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    },
  methods:{
  onCodeChange(edit) {
      this.code=edit.getValue();
  },
  onMounted(edit) {
      this.monedit=edit;
      document.getElementById("Monaco").setAttribute("Height",document.getElementById('MonacoBox').offsetHeight);
      document.getElementById("Monaco").setAttribute("Width",document.getElementById('MonacoBox').offsetWidth);
  
  },
  updatelang(){
      editor.setModelLanguage(this.monedit.getModel(), this.selected);
  },
    submit() {
        alert('submit for exercise'+this.exercise.id+'\n with code:'+this.code+'\n with example code:'+this.exercise.exampleCode+'\n and testdata : '+this.exercise.testData)
               
            },
    run(){
        alert('run for exercise'+this.exercise.id+'\n with code:'+this.code+'\n with example code:'+this.exercise.exampleCode+'\n and testdata : '+this.exercise.testData)

            },
    home(){
        alert('Go Home !')
    },
  },
  components: {
    MonacoEditor
  },
}
</script>

<style>
    #sandbox_container{
        position: absolute;
        height:100%;
        width: 100%;
        margin: 0%;
    }
</style>