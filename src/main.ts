/// <reference types="../ext/monaco-editor/monaco.d.ts" />

const editor = monaco.editor.create(document.getElementById("container")!, {
  theme: "vs-dark",
  value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
  language: "typescript",
  lineNumbers: "on",
});
