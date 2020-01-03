<template>
  <div>
    <div class="border radius-t-2 p-4 border-gray-2">
      <div v-html="content"></div>
    </div>

    <div ref="editor" class="border border-t-0 radius-b-2 color-gray-2"></div>
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
  height: auto;
}
</style>
