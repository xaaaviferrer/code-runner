let htmlEditor, cssEditor, jsEditor;

 const editors = {
  html: CodeMirror.fromTextArea(document.getElementById('html'), {
    mode: 'xml',
    lineNumbers: true,
    theme: 'default'
  }),
  css: CodeMirror.fromTextArea(document.getElementById('css'), {
    mode: 'css',
    lineNumbers: true,
    theme: 'default'
  }),
  js: CodeMirror.fromTextArea(document.getElementById('js'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'default'
  })
};


    document.querySelectorAll('textarea.code-tab').forEach(el => {
      const id = el.id;
      editors[id] = CodeMirror.fromTextArea(el, {
        mode: modes[id],
        lineNumbers: true,
        theme: 'default'
      });
    });

function showTab(tab) {
  Object.keys(editors).forEach(key => {
    const wrapper = editors[key].getWrapperElement();
    wrapper.classList.toggle('hidden', key !== tab);
  });

  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab-button[data-tab="${tab}"]`).classList.add('active');
}



    function runCode() {
      const html = editors['html'].getValue();
      const css = `<style>${editors['css'].getValue()}</style>`;
      const js = `<script>${editors['js'].getValue()}<\/script>`;

      const output = html + css + js;
      const iframe = document.getElementById('preview');
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(output);
      doc.close();
    }

   document.querySelectorAll('textarea.code-tab').forEach(el => {
  const id = el.id;
  editors[id] = CodeMirror.fromTextArea(el, {
    mode: modes[id],
    lineNumbers: true,
    theme: 'default'
  });

  const wrapper = editors[id].getWrapperElement();
  if (id === 'html') {
    wrapper.classList.add('visible');
  } else {
    wrapper.classList.remove('visible');
  }
});

