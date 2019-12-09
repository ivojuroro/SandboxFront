<template>
<div class = "h-100">
        <aside class = "container h-100 card border-solid"> 
            <div class = "container border-solid justify-content-center align-self-center">
                Description:<br>
                {{exercise.description}}
            </div>     
            <div class= "container border-solid justify-content-center">
                Données d'entrée:<br>
                {{exercise.testData}}
            </div>
        </aside>
        <div>
        <b-form-select v-model="selected" :options="langs" @input="updatelang"></b-form-select>
        <MonacoEditor
                height="300"
                width="1200"
                :language="selected"
                :code="code"
                :editorOptions="options"
                @mounted="onMounted"
                @codeChange="onCodeChange"
                >
        </MonacoEditor>
        </div>
    <div class="bobblockbuttons">
    <b-button id = "runButton" type = "button" @click="run"> Run </b-button>
    <b-button id = "submitButton" type = "button" @click="submit"> Submit </b-button>    
    </div>
  </div>
</template>

<script>
import MonacoEditor from 'vue-monaco-editor';
import {editor} from 'monaco-editor';

export default {
  data () {
    return {
        exercise : { id: '00000',
                    name: 'test',
                    description: 'Une description',
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
    }
  },
  created(){
      alert('here we should get the exercise data from the api')
  },
  methods:{
  onCodeChange(edit) {
      this.code=edit.getValue();
  },
  onMounted(edit) {
      this.monedit=edit;
  },
  updatelang(){
      editor.setModelLanguage(this.monedit.getModel(), this.selected);
  },
    submit() {
        alert('submit for exercise'+this.exercise.id+'\n with code:'+this.code+'\n with example code:'+this.exercise.exampleCode+'\n and testdata : '+this.exercise.testData)
               
            },
    run(){
        alert('run for exercise'+this.exercise.id+'\n with code:'+this.code+'\n with example code:'+this.exercise.exampleCode+'\n and testdata : '+this.exercise.testData)

            }
  },
  components: {
    MonacoEditor
  },
}
</script>

<style>
    .container {
        height: 100px;
        margin-top: 8%;
    }

    .bobblockbuttons {
        height: 38px;
    }
</style>