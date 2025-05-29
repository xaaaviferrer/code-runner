const editors = {};

window.onload = () => {
  editors.html = CodeMirror.fromTextArea(document.getElementById('html'), {
    mode: 'xml',
    lineNumbers: true
  });

  editors.css = CodeMirror.fromTextArea(document.getElementById('css'), {
    mode: 'css',
    lineNumbers: true
  });

  editors.js = CodeMirror.fromTextArea(document.getElementById('js'), {
    mode: 'javascript',
    lineNumbers: true
  });

  showTab('html');
};

function showTab(tab) {
  Object.keys(editors).forEach(key => {
    const wrapper = editors[key].getWrapperElement();
    wrapper.classList.toggle('hidden', key !== tab);
  });

  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab-button[onclick*="${tab}"]`).classList.add('active');
}

function runCode() {
  const html = editors.html.getValue();
  const css = `<style>${editors.css.getValue()}</style>`;
  const js = `<script>${editors.js.getValue()}<\/script>`;

  const output = html + css + js;
  const iframe = document.getElementById('preview');
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(output);
  doc.close();
}


