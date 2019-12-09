<template>
    <div class = "container h-100">
        <aside class = "container h-100 card border-solid"> 
            <div class = "container border-solid justify-content-center align-self-center">
                Ceci est l'énoncé de l'exercice
            </div>     
            <div class= "container border-solid justify-content-center">
                Ceci sont les données d'entrée
            </div>
        </aside>

        <div id = "container"></div>
    <button id = "runButton" type = "button"> Run </button>
    <button id = "submitButton" type = "button"> Submit </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                exercise : { id: '',
                    name: '',
                    description: '',
                    exampleCode: '',
                    testData: []
                    },
                code:''
            }
        },
        created() {
        var script1 = document.createElement('script');
        var script2 = document.createElement('script');    
    
        script1.setAttribute("src","../../../node_modules/monaco-editor/min/vs/loader.js");
        script2.onload = function() {
            alert('hi');
            require.config({ paths: { 'vs': '../../../node_modules/monaco-editor/min/vs' }});
            require(['vs/editor/editor.main.js'], function() {
                var editor = editor.create(document.getElementById('container'), {
                    value: "",
                    language: 'javascript',
                    theme: ''
            });
            editor.getModel().onDidChangeContent(()=>{this.code=editor.getValue()});
        });
        }
        document.body.appendChild(script1);
        document.body.appendChild(script2);
           //initialize the exercise
        },
        methods: {
            submit() {
               
            },
            run(){

            }
        }
    }
</script>

<style>
    .container {
        text-align: center;
        height: 100px;
        margin-top: 8%;
    }
</style>