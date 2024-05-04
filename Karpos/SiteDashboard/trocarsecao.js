var usuario = document.getElementById("section_areaDoUsuario");
  var temperatura = document.getElementById("section_temperatura");
  var umidade = document.getElementById("section_umidade");
  var tabelas = document.getElementById("section_tabelas");

  var areaUsuario = document.getElementById("btnAreaUsuario");
  var areaTemperatura = document.getElementById("btnAreaTemperatura");
  var areaUmidade = document.getElementById("btnAreaUmidade");
  var areaTabelas = document.getElementById("btnAreaTabelas");

  // Adicionar um evento de clique a cada botão
  areaUsuario.addEventListener("click", function () {
    usuario.style.display = "block";
    temperatura.style.display = "none";
    umidade.style.display = "none";
    tabelas.style.display = "none";
    

    temperatura.classList.remove("fade");
    umidade.classList.remove("fade");
    tabelas.classList.remove("fade");
    usuario.classList.add("fade");
    areaUmidade.classList.remove("active");
    areaTemperatura.classList.remove("active");
    areaUsuario.classList.add("active");
    areaTabelas.classList.remove("active");
  });

  areaTemperatura.addEventListener("click", function () {
    usuario.style.display = "none";
    temperatura.style.display = "block";
    umidade.style.display = "none";
    tabelas.style.display = "none";
    // filtro.style.zIndex = '10';
    // referencia.style.zIndex = '10';
    // // filtro.style.position = 'relative';
    // referencia.style.position = 'relative';

    temperatura.classList.add("fade");
    umidade.classList.remove("fade");
    tabelas.classList.remove("fade");
    usuario.classList.remove("fade");

    areaTemperatura.classList.add("active");
    areaUmidade.classList.remove("active");
    areaTabelas.classList.remove("active");
    areaUsuario.classList.remove("active");
  });

  areaUmidade.addEventListener("click", function () {
    usuario.style.display = "none";
    temperatura.style.display = "none";
    umidade.style.display = "block";
    tabelas.style.display = "none";
    // filtro.style.zIndex = '10';
    // referencia.style.zIndex = '10';
    // // filtro.style.position = 'relative';
    // referencia.style.position = 'relative';

    // areaRelatorio.classList.remove("fade");
    // areaUmidade.classList.remove("fade");
    // areaSuporte.classList.remove("fade");
    // areaTemperatura.classList.add("fade");
    temperatura.classList.remove("fade");
    umidade.classList.add("fade");
    tabelas.classList.remove("fade");
    usuario.classList.remove("fade");
    areaUmidade.classList.add("active");
    areaTemperatura.classList.remove("active");
    areaUsuario.classList.remove("active");
    areaTabelas.classList.remove("active")
  });

  areaTabelas.addEventListener("click", function () {
    usuario.style.display = "none";
    temperatura.style.display = "none";
    umidade.style.display = "none";
    tabelas.style.display = "block";
    // filtro.style.zIndex = '10';
    // referencia.style.zIndex = '10';
    // // filtro.style.position = 'relative';
    // referencia.style.position = 'relative';

    // areaRelatorio.classList.remove("fade");
    // areaUmidade.classList.remove("fade");
    // areaSuporte.classList.remove("fade");
    // areaTemperatura.classList.add("fade");
    temperatura.classList.remove("fade");
    umidade.classList.remove("fade");
    tabelas.classList.add("fade");
    usuario.classList.remove("fade");
    areaTabelas.classList.add("active");
    areaUmidade.classList.remove("active");
    areaTemperatura.classList.remove("active");
    areaUsuario.classList.remove("active");
  });