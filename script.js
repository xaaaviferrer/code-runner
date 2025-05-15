let htmlEditor, cssEditor, jsEditor;

window.onload = function () {
  htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlEditor"), {
    mode: "xml",
    lineNumbers: true,
    theme: "default"
  });

  cssEditor = CodeMirror.fromTextArea(document.getElementById("cssEditor"), {
    mode: "css",
    lineNumbers: true,
    theme: "default"
  });

  jsEditor = CodeMirror.fromTextArea(document.getElementById("jsEditor"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default"
  });

  document.getElementById("runBtn").addEventListener("click", runCode);
};

function runCode() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const result = `
    <html>
      <head><style>${css}</style></head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  const outputFrame = document.getElementById("output");
  outputFrame.srcdoc = result;
}
