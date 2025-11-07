<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sobre o SENAI-SP</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .sidebar {
      background-color: #fa0101;
      min-height: 100vh;
      margin-top: 70px;
    }
    .content-area {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 70px);
      padding: 2rem;
    }
    header {
      height: 70px;
    }
    .search-bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .search-bar input {
      width: 200px;
    }
  </style>
</head>
<body>

  <!-- Cabeçalho fixo com logo SENAI e barra de pesquisa -->
  <header class="navbar navbar-dark fixed-top shadow-sm px-3" style="background:#fa0101;">
    <div class="d-flex align-items-center justify-content-between w-100">
      <!-- Logo SENAI com sombra branca -->
      <div class="senai-logo bg-white p-1 rounded shadow-sm" style="height: 45px;">
        <img src="../img/SENAI_São_Paulo_logo.png" alt="Logo SENAI" style="height: 100%; object-fit: contain;">
      </div>
      <!-- Barra de pesquisa no canto direito -->
      <div class="search-bar me-2">
        <i class="bi bi-search text-white"></i>
        <input type="text" class="form-control" placeholder="Buscar...">
      </div>
    </div>
  </header>

  <!-- Layout principal -->
  <div class="container-fluid">
    <div class="row">

      <!-- Menu lateral -->
      <aside class="col-12 col-md-3 col-lg-2 sidebar text-white p-4">
        <nav class="nav flex-column gap-3">
          <a class="nav-link text-white" href="#">Home</a>
          <a class="nav-link text-white" href="#">Eventos</a>
          <a class="nav-link text-white" href="#">Sobre</a>
        </nav>
      </aside>

      <!-- Conteúdo centralizado -->
      <main class="col-12 col-md-9 col-lg-10 content-area">
        <section class="text-center px-3" style="max-width: 800px;">
          <h2 class="mb-4">Conheça o SENAI-SP 🏴🏳️</h2>
          <p>
            O SENAI-SP é uma instituição que há mais de 80 anos transforma vidas por meio da educação profissional, tecnologia e inovação. Com mais de 90 unidades e dezenas de escolas móveis espalhadas pelo estado, ele oferece cursos que vão da formação inicial à pós-graduação, sempre com foco na prática, na empregabilidade e na excelência. Além disso, promove projetos de pesquisa e desenvolvimento, aceleração de startups e programas de empreendedorismo que ajudam empresas a crescer e inovar.
          </p>
          <p>
            Como aluno, posso dizer que estudar aqui é fazer parte de algo maior. O SENAI-SP tem uma missão clara de fortalecer a indústria brasileira com educação de qualidade, e seus valores — como integridade, inclusão, inovação e reconhecimento — estão presentes no nosso dia a dia. Se você busca aprendizado real, oportunidades concretas e um ambiente que valoriza o conhecimento, o SENAI-SP é o lugar certo para começar essa jornada.
          </p>
        </section>
      </main>

    </div>
  </div>

</body>
</html>
