document.addEventListener("DOMContentLoaded", () => {
  const categorias = [
    {
      id: "admin",
      title: "Administração e Gestão",
      icon: "bi-briefcase-fill",
      color: "text-danger",
      cursos: [
        "Gestão Empresarial",
        "Planejamento Estratégico",
        "Marketing Digital",
        "Finanças Corporativas"
      ]
    },
    {
      id: "alimentos",
      title: "Alimentos e Bebidas",
      icon: "bi-cup-hot-fill",
      color: "text-warning",
      cursos: [
        "Segurança Alimentar",
        "Panificação e Confeitaria",
        "Gestão de Produção de Alimentos",
        "Inovação Culinária"
      ]
    },
    {
      id: "metalurgia",
      title: "Metalurgia e Soldagem",
      icon: "bi-tools",
      color: "text-secondary",
      cursos: [
        "Soldagem MIG/MAG",
        "Metalurgia Industrial",
        "Inspeção de Solda",
        "Processos de Fabricação"
      ]
    },
    {
      id: "ti",
      title: "Tecnologia da Informação",
      icon: "bi-laptop-fill",
      color: "text-primary",
      cursos: [
        "Desenvolvimento Web",
        "Redes de Computadores",
        "Segurança da Informação",
        "Banco de Dados"
      ]
    }
  ];

  function renderCards() {
    const container = document.getElementById("cards-eventos");
    if (!container) return;

    categorias.forEach(cat => {
      const col = document.createElement("div");
      col.className = "col-10 col-md-5 col-lg-4";

      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm border-0 text-center";
      card.style.cursor = "pointer";
      card.setAttribute("data-bs-toggle", "modal");
      card.setAttribute("data-bs-target", `#modal-${cat.id}`);

      card.innerHTML = `
        <div class="card-body">
          <i class="bi ${cat.icon} fs-1 ${cat.color} mb-3"></i>
          <h5 class="card-title">${cat.title}</h5>
          <p class="card-text">Clique para ver os cursos disponíveis.</p>
        </div>
      `;

      col.appendChild(card);
      container.appendChild(col);

      renderModal(cat);
    });
  }

  function renderModal(cat) {
    const modalContainer = document.getElementById("modais-eventos");
    if (!modalContainer) return;

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = `modal-${cat.id}`;
    modal.tabIndex = -1;
    modal.setAttribute("aria-labelledby", `modalLabel-${cat.id}`);
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title" id="modalLabel-${cat.id}">${cat.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <ul class="list-group list-group-flush">
              ${cat.cursos.map(curso => `<li class="list-group-item">${curso}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;

    modalContainer.appendChild(modal);
  }

  renderCards();
});

function mostrarModal(nome, carga, inicio, termino, horario, local, valor, pago) {
  document.getElementById("modalCursoLabel").textContent = `Curso de ${nome}`;
  document.getElementById("carga").textContent = carga;
  document.getElementById("inicio").textContent = inicio;
  document.getElementById("termino").textContent = termino;
  document.getElementById("horario").textContent = horario;
  document.getElementById("local").textContent = local;
  document.getElementById("valor").textContent = valor;

  const pagamentoBtn = document.getElementById("botao-pagamento");
  pagamentoBtn.style.display = pago ? "block" : "none";

  const modal = new bootstrap.Modal(document.getElementById("modalCurso"));
  modal.show();
}
