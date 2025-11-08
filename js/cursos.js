document.addEventListener("DOMContentLoaded", () => {
  let cursos = [
    // Administração e Gestão
    { id: 1, titulo: "Gestão Empresarial", categoria: "Administração e Gestão", carga: "100 horas", inicio: "05/08/2023", termino: "30/09/2023", horario: "18h às 22h", local: "SENAI Campinas — Rua da Produção, 100", valor: "R$ 120,00", pago: true },
    { id: 2, titulo: "Planejamento Estratégico", categoria: "Administração e Gestão", carga: "80 horas", inicio: "10/09/2023", termino: "20/10/2023", horario: "08h às 12h", local: "SENAI São Paulo — Av. Central, 200", valor: "R$ 0,00", pago: true },
    { id: 3, titulo: "Marketing Digital", categoria: "Administração e Gestão", carga: "60 horas", inicio: "01/10/2023", termino: "15/11/2023", horario: "19h às 21h", local: "SENAI Online", valor: "R$ 90,00", pago: true },

    // Alimentos e Bebidas
    { id: 4, titulo: "Panificação", categoria: "Alimentos e Bebidas", carga: "160 horas", inicio: "24/07/2023", termino: "21/09/2023", horario: "13h às 17h", local: "Massa Caseira — Rua Santos Dumont, 14-71, Vila Lemos", valor: "R$ 80,00", pago: true },
    { id: 5, titulo: "Confeitaria", categoria: "Alimentos e Bebidas", carga: "120 horas", inicio: "02/10/2023", termino: "30/11/2023", horario: "14h às 18h", local: "SENAI Bauru — Rua das Rosas, 55", valor: "R$ 0,00", pago: true },
    { id: 6, titulo: "Segurança Alimentar", categoria: "Alimentos e Bebidas", carga: "100 horas", inicio: "10/08/2023", termino: "15/09/2023", horario: "08h às 12h", local: "SENAI Santo Amaro — Av. Brasil, 1000", valor: "R$ 0,00", pago: true },

    // Metalurgia e Soldagem
    { id: 7, titulo: "Soldagem MIG/MAG", categoria: "Metalurgia e Soldagem", carga: "80 horas", inicio: "05/08/2023", termino: "30/09/2023", horario: "18h às 22h", local: "SENAI Betim — Rua da Indústria, 500", valor: "R$ 100,00", pago: true },
    { id: 8, titulo: "Metalurgia Industrial", categoria: "Metalurgia e Soldagem", carga: "100 horas", inicio: "10/09/2023", termino: "20/10/2023", horario: "08h às 12h", local: "SENAI Contagem — Av. Metalúrgicos, 1200", valor: "R$ 0,00", pago: true },
    { id: 9, titulo: "Inspeção de Solda", categoria: "Metalurgia e Soldagem", carga: "60 horas", inicio: "01/10/2023", termino: "15/11/2023", horario: "19h às 21h", local: "SENAI Online", valor: "R$ 90,00", pago: true },

    // Tecnologia da Informação
    { id: 10, titulo: "Desenvolvimento Web", categoria: "Tecnologia da Informação", carga: "100 horas", inicio: "05/08/2023", termino: "30/09/2023", horario: "18h às 22h", local: "SENAI Campinas — Rua da Tecnologia, 101", valor: "R$ 150,00", pago: true },
    { id: 11, titulo: "Redes de Computadores", categoria: "Tecnologia da Informação", carga: "80 horas", inicio: "10/09/2023", termino: "20/10/2023", horario: "08h às 12h", local: "SENAI São Paulo — Av. Digital, 200", valor: "R$ 0,00", pago: true },
    { id: 12, titulo: "Segurança da Informação", categoria: "Tecnologia da Informação", carga: "60 horas", inicio: "01/10/2023", termino: "15/11/2023", horario: "19h às 21h", local: "SENAI Online", valor: "R$ 90,00", pago: true }
  ];

  function renderCards() {
    const container = document.getElementById("cards-eventos");
    if (!container) return;
    container.innerHTML = "";

    cursos.forEach(curso => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm";

      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${curso.titulo}</h5>
          <p class="card-text"><strong>Categoria:</strong> ${curso.categoria}</p>
          <p class="card-text"><strong>Início:</strong> ${curso.inicio}</p>
          <p class="card-text"><strong>Local:</strong> ${curso.local}</p>
          <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-outline-primary btn-sm" onclick="mostrarModal('${curso.titulo}', '${curso.carga}', '${curso.inicio}', '${curso.termino}', '${curso.horario}', '${curso.local}', '${curso.valor}', ${curso.pago})">Detalhes</button>
            <button class="btn btn-outline-warning btn-sm" onclick="abrirModalGerenciar(${curso.id})">Editar</button>
          </div>
        </div>
      `;

      col.appendChild(card);
      container.appendChild(col);
    });
  }

  function abrirModalGerenciar(id = null) {
    const modal = new bootstrap.Modal(document.getElementById("modalGerenciar"));
    const curso = cursos.find(c => c.id === id);

    document.getElementById("cursoId").value = curso?.id || "";
    document.getElementById("titulo").value = curso?.titulo || "";
    document.getElementById("categoria").value = curso?.categoria || "";
    document.getElementById("carga").value = curso?.carga || "";
    document.getElementById("inicio").value = curso?.inicio || "";
    document.getElementById("termino").value = curso?.termino || "";
    document.getElementById("horario").value = curso?.horario || "";
    document.getElementById("local").value = curso?.local || "";
    document.getElementById("valor").value = curso?.valor || "";
    document.getElementById("pago").checked = curso?.pago || false;

    modal.show();
  }

  window.salvarCurso = function (e) {
    e.preventDefault();
    const id = document.getElementById("cursoId").value;
    const novoCurso = {
      id: id ? parseInt(id) : Date.now(),
      titulo: document.getElementById("titulo").value,
      categoria: document.getElementById("categoria").value,
      carga: document.getElementById("carga").value,
      inicio: document.getElementById("inicio").value,
      termino: document.getElementById("termino").value,
      horario: document.getElementById("horario").value,
      local: document.getElementById("local").value,
      valor: document.getElementById("valor").value,
      pago: document.getElementById("pago").checked
    };

    const index = cursos.findIndex(c => c.id === novoCurso.id);
    if (index >= 0) {
      cursos[index] = novoCurso;
    } else {
      cursos.push(novoCurso);
    }

    bootstrap.Modal.getInstance(document.getElementById("modalGerenciar")).hide();
    renderCards();
  };

  window.excluirCurso = function () {
    const id = parseInt(document.getElementById("cursoId").value);
    if (confirm("Deseja excluir este curso?")) {
      cursos = cursos.filter(c => c.id !== id);
      bootstrap.Modal.getInstance(document.getElementById("modalGerenciar")).hide();
      renderCards();
    }
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
  pagamentoBtn.innerHTML = `
    <button class="btn btn-success" onclick="inscreverCurso('${nome}', '${valor}')">Inscrever-se</button>
  `;

  const modal = new bootstrap.Modal(document.getElementById("modalCurso"));
  modal.show();
}

function inscreverCurso(nome, valor) {
  const valorNumerico = parseFloat(valor.replace("R$", "").replace(",", ".")).toFixed(2);
  let dados = localStorage.getItem("inscricoes") || "";
  dados += `${nome}|${valorNumerico};`;
  localStorage.setItem("inscricoes", dados);
  alert(`Você se inscreveu no curso: ${nome}`);
  window.location.href = "../pagamentos/pagamentos.html";
}
