// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

monaco.editor.create(document.getElementById("container"), {
    theme: "vs-dark",
    value: [
        "function x() {",
        '\tconsole.log("Hello world!");',
        "}"
    ].join("\n"),
    language: "typescript",
    lineNumbers: "on"
});
