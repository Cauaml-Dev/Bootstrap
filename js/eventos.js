document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("eventos")) {
    const eventoInicial = "Mundo SENAI|Durante os dias 05 e 06 junho, diversas unidades do SENAI-SP estarão com programações especiais, como visitas guiadas, palestras, oficinas e exposições interativas sobre educação, inovação e tecnologia. O evento foi criado para que você conheça de perto as opções de formação profissional do SENAI e como podemos te ajudar a conquistar mais oportunidades de carreira.|../img/mundo-senai.avif";
    localStorage.setItem("eventos", eventoInicial + ";");
  }
  renderEventos();
});
 
 
let eventos = [];
 
function renderEventos() {
  const container = document.getElementById("lista-eventos");
  container.innerHTML = "";
 
  const dados = localStorage.getItem("eventos") || "";
  eventos = dados
    .split(";")
    .filter(e => e.trim() !== "")
    .map((item, index) => {
      const [nome, descricao, imagem] = item.split("|");
      return {
        id: index,
        nome,
        descricao,
        imagem: imagem || "../img/eventos.webp"
      };
    });
 
  eventos.forEach(evento => {
    const col = document.createElement("div");
    col.className = "col-md-6";
 
    const card = document.createElement("div");
    card.className = "card shadow-sm h-100";
 
    const img = document.createElement("img");
    img.src = evento.imagem;
    img.className = "card-img-top";
    img.alt = evento.nome;
    card.appendChild(img);
 
    const body = document.createElement("div");
    body.className = "card-body d-flex flex-column";
 
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = evento.nome;
 
    const desc = document.createElement("p");
    desc.className = "card-text flex-grow-1";
    desc.textContent = evento.descricao;
 
    const btnDetalhes = document.createElement("button");
    btnDetalhes.className = "btn btn-outline-primary me-2";
    btnDetalhes.textContent = "Detalhes";
    btnDetalhes.onclick = () => alert(` ${evento.nome}\n\n${evento.descricao}`);
 
    const btnEditar = document.createElement("button");
    btnEditar.className = "btn btn-outline-secondary";
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => abrirModal(evento);
 
    const btnGroup = document.createElement("div");
    btnGroup.className = "mt-3";
    btnGroup.appendChild(btnDetalhes);
    btnGroup.appendChild(btnEditar);
 
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(btnGroup);
    card.appendChild(body);
    col.appendChild(card);
    container.appendChild(col);
  });
}
 
function abrirModal(evento = null) {
  const modal = new bootstrap.Modal(document.getElementById("modalEvento"));
  document.getElementById("form-evento").reset();
  document.getElementById("evento-id").value = evento ? evento.id : "";
  document.getElementById("evento-nome").value = evento ? evento.nome : "";
  document.getElementById("evento-descricao").value = evento ? evento.descricao : "";
  document.getElementById("btn-excluir").style.display = evento ? "inline-block" : "none";
  document.getElementById("modalTitulo").textContent = evento ? "Editar Evento" : "Criar Evento";
  modal.show();
}
 
function salvarEvento(e) {
  e.preventDefault();
  const id = document.getElementById("evento-id").value;
  const nome = document.getElementById("evento-nome").value.trim();
  const descricao = document.getElementById("evento-descricao").value.trim();
  const imagemPadrao = "../img/eventos.webp";
 
  if (!nome || !descricao) return;
 
  if (id === "") {
    eventos.push({ nome, descricao, imagem: imagemPadrao });
  } else {
    eventos[id] = { ...eventos[id], nome, descricao };
  }
 
  salvarEventos();
  bootstrap.Modal.getInstance(document.getElementById("modalEvento")).hide();
  renderEventos();
}
 
function excluirEvento() {
  const id = document.getElementById("evento-id").value;
  if (id !== "" && confirm("Deseja realmente excluir este evento?")) {
    eventos.splice(id, 1);
    salvarEventos();
    bootstrap.Modal.getInstance(document.getElementById("modalEvento")).hide();
    renderEventos();
  }
}
 
function salvarEventos() {
  const dados = eventos
    .map(e => `${e.nome}|${e.descricao}|${e.imagem}`)
    .join(";") + (eventos.length ? ";" : "");
  localStorage.setItem("eventos", dados);
}
 