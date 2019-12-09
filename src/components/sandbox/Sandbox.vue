<template>
  <div id="app">
    <MonacoEditor
                height="300"
                width="1200"
                language="javascript"
                :code="code"
                :editorOptions="options"
                @mounted="onMounted"
                @codeChange="onCodeChange"
                >
        </MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from 'vue-monaco-editor';

export default {
  data () {
    return {
      code: '//Hello World !',
      options: {
        selectOnLineNumbers: true
      }
    }
  },
  onCodeChange() {
      alert(this.code);
  },
  components: {
    MonacoEditor
  },
}
</script>