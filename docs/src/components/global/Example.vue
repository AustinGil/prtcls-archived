<template>
  <div class="grid columns-2 gap-3 shadow-1 border border-gray-1 radius-2 p-4">
    <div ref="editor"></div>

    <div class="grid align-center overflow-auto border-1 border-gray-3 p-4">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
// import * as Monaco from "monaco-editor";
// import "monaco-editor/min/vs/editor/editor.main.css";
let CodeMirror;
if (typeof window !== "undefined") {
  CodeMirror = require("codemirror");
  require("codemirror/mode/htmlmixed/htmlmixed.js");
}
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

export default {
  name: "PExample",

  props: ["html"],

  data() {
    return {
      content: this.html
    };
  },

  mounted() {
    // const editor = Monaco.editor.create(this.$refs.editor, {
    //   value: "const i = 2;"
    // });

    const editor = CodeMirror(this.$refs.editor, {
      lineNumbers: true,
      mode: "htmlmixed",
      value: this.content,
      theme: "monokai"
    });

    editor.on("change", cm => {
      this.content = cm.getValue();
    });
  }
};
</script>

<style lang="scss">
.CodeMirror {
  height: 100%;
}
</style>
