var usuario = document.getElementById("section_areaDoUsuario");
var temperatura = document.getElementById("section_temperatura");
var dashboard = document.getElementById("section_dashboard");
var tabelas = document.getElementById("section_tabelas");
var ajuda = document.getElementById("section_ajuda")

var areaUsuario = document.getElementById("btnAreaUsuario");
var areaDashboard = document.getElementById("btnAreaDashboard");
var areaTabelas = document.getElementById("btnAreaTabelas");
var areaAjuda = document.getElementById("btnAreaAjuda")

// Adicionar um evento de clique a cada botão
areaUsuario.addEventListener("click", function () {
  usuario.style.display = "block";
  dashboard.style.display = "none";
  tabelas.style.display = "none";
  ajuda.style.display = "none";

  dashboard.classList.remove("fade");
  tabelas.classList.remove("fade");
  usuario.classList.add("fade");
  areaDashboard.classList.remove("active");
  areaUsuario.classList.add("active");
  areaTabelas.classList.remove("active");
});

// Adicionar um evento de clique a cada botão
areaAjuda.addEventListener("click", function () {
  usuario.style.display = "none";
  dashboard.style.display = "none";
  tabelas.style.display = "none";
  ajuda.style.display = "block";

  dashboard.classList.remove("fade");
  tabelas.classList.remove("fade");
  usuario.classList.remove("fade");
  ajuda.classList.add("fade");
  areaDashboard.classList.remove("active");
  areaUsuario.classList.remove("active");
  areaTabelas.classList.remove("active");
  areaAjuda.classList.add("active");
});


areaDashboard.addEventListener("click", function () {
  usuario.style.display = "none";
  dashboard.style.display = "block";
  tabelas.style.display = "none";
  ajuda.style.display="none";


  dashboard.classList.add("fade");
  tabelas.classList.remove("fade");
  usuario.classList.remove("fade");
  areaDashboard.classList.add("active");
  areaUsuario.classList.remove("active");
  areaTabelas.classList.remove("active")
  areaAjuda.classList.remove("active");
});

areaTabelas.addEventListener("click", function () {
  usuario.style.display = "none";
  dashboard.style.display = "none";
  tabelas.style.display = "block";
  ajuda.style.display="none";

  dashboard.classList.remove("fade");
  tabelas.classList.add("fade");
  usuario.classList.remove("fade");
  areaTabelas.classList.add("active");
  areaDashboard.classList.remove("active");
  areaUsuario.classList.remove("active");
  areaAjuda.classList.remove("active");
});


/*---------------------- Icones dos Lotes -------------------------------*/

iconTemp1.addEventListener("click", function () {
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
  areaAjuda.classList.remove("active");
});

iconTemp2.addEventListener("click", function () {
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
  areaAjuda.classList.remove("active");
});

iconTemp3.addEventListener("click", function () {
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
  areaAjuda.classList.remove("active");
});

iconTemp4.addEventListener("click", function () {
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

iconUmi1.addEventListener("click", function () {
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

iconUmi2.addEventListener("click", function () {
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

iconUmi3.addEventListener("click", function () {
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

iconUmi4.addEventListener("click", function () {
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

function exit() {
  window.location.href = "index.html";
}
