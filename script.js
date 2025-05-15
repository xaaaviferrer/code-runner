let htmlEditor, cssEditor, jsEditor;

window.onload = function () {
  // Inicializar los editores de CodeMirror
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

  // Mostrar solo el editor HTML por defecto
  showEditor('html');

  // Configurar los botones para cambiar entre lenguajes
  const buttons = document.querySelectorAll('.language-buttons button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      showEditor(lang);
    });
  });

  // Configurar el botón de ejecutar código
  document.getElementById("runBtn").addEventListener("click", runCode);
};

// Función para mostrar solo el editor seleccionado
function showEditor(lang) {
  const sections = document.querySelectorAll('.editor-section');
  sections.forEach(section => section.classList.remove('active'));

  if (lang === 'html') {
    document.getElementById('htmlEditorSection').classList.add('active');
  } else if (lang === 'css') {
    document.getElementById('cssEditorSection').classList.add('active');
  } else if (lang === 'js') {
    document.getElementById('jsEditorSection').classList.add('active');
  }
}

// Función para ejecutar el código
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
