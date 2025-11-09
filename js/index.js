const paginas = {
  home: '../home/home.html',
  cursos: '../cursos/cursos.html',
  sobre: '../sobre/sobre.html',
  admin: '../cursos/admin.html',
  alimentos: '../cursos/alimentos.html',
  metalurgia: '../cursos/metalurgia.html',
  ti: '../cursos/ti.html',
  pagamentos: '../pagamentos/pagamentos.html',
  eventos: '../eventos/eventos.html'
};

// Mapeamento de mensagens recebidas para páginas
const mensagensParaPaginas = {
  'abrir-eventos': { url: paginas.eventos, id: 'eventos' },
  'abrir-admin': { url: paginas.admin },
  'abrir-alimentos': { url: paginas.alimentos },
  'abrir-metalurgia': { url: paginas.metalurgia },
  'abrir-ti': { url: paginas.ti }
};

function abrirPagina(url, idAtivo = null) {
  const iframe = document.getElementById("project-frame");
  if (!iframe) return;
  iframe.src = url || "";
  iframe.scrollIntoView({ behavior: "smooth", block: "start" });

  Object.keys(paginas).forEach(id => {
    const botao = document.getElementById(id);
    if (botao) botao.classList.remove("active");
  });

  if (idAtivo) {
    const botaoAtivo = document.getElementById(idAtivo);
    if (botaoAtivo) botaoAtivo.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  abrirPagina(paginas.home, "home");

  Object.keys(paginas).forEach(id => {
    const botao = document.getElementById(id);
    if (botao) {
      botao.addEventListener("click", (e) => {
        e.preventDefault();
        abrirPagina(paginas[id], id);
      });
    }
  });

  window.addEventListener("message", (event) => {
    const destino = mensagensParaPaginas[event.data];
    if (destino) {
      abrirPagina(destino.url, destino.id);
    }
  });
});
