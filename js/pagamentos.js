document.addEventListener("DOMContentLoaded", () => {
  renderInscricoes();
});

function renderInscricoes() {
  const container = document.getElementById("lista-cursos");
  const totalSpan = document.getElementById("total");
  container.innerHTML = "";
  totalSpan.textContent = "";

  const dados = localStorage.getItem("inscricoes") || "";
  const cursos = dados.split(";").filter(c => c.trim() !== "");

  let total = 0;
  cursos.forEach((item, index) => {
    const [nome, valor] = item.split("|");
    const valorNum = parseFloat(valor);

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const texto = document.createElement("span");
    texto.textContent = nome;

    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill me-2";
    badge.textContent = `R$ ${valorNum.toFixed(2).replace(".", ",")}`;

    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-outline-danger";
    btn.innerHTML = "&times;";
    btn.onclick = () => removerCurso(index);

    const right = document.createElement("div");
    right.className = "d-flex align-items-center";
    right.appendChild(badge);
    right.appendChild(btn);

    li.appendChild(texto);
    li.appendChild(right);
    container.appendChild(li);

    if (valorNum > 0) total += valorNum;
  });

  totalSpan.textContent = `Total a pagar: R$ ${total.toFixed(2).replace(".", ",")}`;
}

function removerCurso(index) {
  const dados = localStorage.getItem("inscricoes") || "";
  let cursos = dados.split(";").filter(c => c.trim() !== "");
  cursos.splice(index, 1);
  localStorage.setItem("inscricoes", cursos.join(";") + (cursos.length ? ";" : ""));
  renderInscricoes();
}

function limparInscricoes() {
  if (confirm("Tem certeza que deseja limpar todas as inscrições?")) {
    localStorage.removeItem("inscricoes");
    renderInscricoes();
  }
}

function abrirCheckout() {
  const overlay = document.getElementById("checkout");
  const lista = document.getElementById("product-list");
  const totalSpan = document.getElementById("total-value");

  lista.innerHTML = "";
  totalSpan.textContent = "0,00";

  const dados = localStorage.getItem("inscricoes") || "";
  const cursos = dados.split(";").filter(c => c.trim() !== "");

  let total = 0;
  cursos.forEach(item => {
    const [nome, valor] = item.split("|");
    const valorNum = parseFloat(valor);

    const div = document.createElement("div");
    div.className = "d-flex justify-content-between border-bottom py-2";
    div.innerHTML = `<span>${nome}</span><strong>R$ ${valorNum.toFixed(2).replace(".", ",")}</strong>`;
    lista.appendChild(div);

    if (valorNum > 0) total += valorNum;
  });

  totalSpan.textContent = total.toFixed(2).replace(".", ",");
  overlay.classList.remove("d-none");
}

function fecharCheckout() {
  document.getElementById("checkout").classList.add("d-none");
}
function confirmarInscricao() {
  const forma = document.querySelector('input[name="pagamento"]:checked');
  if (!forma) {
    alert("Selecione uma forma de pagamento.");
    return;
  }

  alert(`Inscrição confirmada via ${forma.value.toUpperCase()}!`);

  // Limpa os dados de inscrição
  localStorage.removeItem("inscricoes");
  // Fecha o modal e atualiza a tela
  fecharCheckout();
  renderInscricoes();
} 
