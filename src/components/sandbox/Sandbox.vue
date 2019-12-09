<template>
  <div id="app">
    <MonacoEditor
                height="300"
                width="1200"
                theme='vsc'
                :language="initlang"
                :code="initcode"
                :editorOptions="options"
                @mounted="onMounted"
                @codeChange="onCodeChange"
                >
        </MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from 'vue-monaco-editor';
import {editor} from 'monaco-editor';

export default {
  data () {
    return {
      initcode: '//type here',
      initlang:"javascript",
      options: {
        selectOnLineNumbers: true,
      }
    }
  },
  methods:{
  onCodeChange(monedit) {
      alert(monedit.getValue());
  },
  onMounted(monedit) {
      editor.setModelLanguage(monedit.getModel(), "python");
      alert(monedit.getModel().getModeId());
  },
  },
  components: {
    MonacoEditor
  },
}
</script>