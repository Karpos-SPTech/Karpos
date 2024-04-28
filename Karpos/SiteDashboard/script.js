document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

  // Adiciona um listener de eventos para os itens do menu
//   var sideItems = document.querySelectorAll('.side-item');

//   sideItems.forEach(function (item) {
//       item.addEventListener('click', function (event) {
//           // Evita o comportamento padrão de clicar em um link
//           event.preventDefault();

//           // Remove a classe 'active' de todos os itens do menu
//           sideItems.forEach(function (el) {
//               el.classList.remove('active');
//           });

//           // Adiciona a classe 'active' ao item de menu clicado
//           item.classList.add('active');

//           // Obtém o ID da seção correspondente ao item de menu clicado
//           var sectionId = item.querySelector('a').getAttribute('data-section');
 
//           // Mostra a seção correspondente e oculta as outras
//           mostrarSeccao(sectionId);

          
//       });
//   });

//   function mostrarSeccao(sectionId) {
//       // Oculta todas as seções
//       var secoes = document.querySelectorAll('main section');
//       secoes.forEach(function (secao) {
//           secao.style.display = 'none';
//       });

//       // Mostra a seção correspondente
//       var secaoSelecionada = document.getElementById(sectionId);
//       if (secaoSelecionada) {
//           secaoSelecionada.style.display = 'block';
//       }
//   }

/* -- dht11Umidade -- */
var contextoDht11Umidade = document.getElementById('dht11Umidade').getContext('2d');
contextoDht11Umidade.canvas.width = 1000;
contextoDht11Umidade.canvas.height = 300;
var dht11Umidade = new Chart(
    contextoDht11Umidade,
    {
        type: 'column',
        data: {

            datasets: [{
                data: [Math.random],
                label: 'Umidade (%)',
                type: 'line',
                borderColor: ['#45b3e7'],
                backgroundColor: ['#89cff0']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Umidade'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    }
);
lm35Temperatura
var contextoLm35Temperatura = document.getElementById('lm35Temperatura').getContext('2d');
contextoLm35Temperatura.canvas.width = 1000;
contextoLm35Temperatura.canvas.height = 300;
var lm35Temperatura = new Chart(
    contextoLm35Temperatura,
    {
        type: 'line',
        data: {
            datasets: [{
                data :[Math.random],
                label: 'Temperatura (°C)',
                type: 'line',
                borderColor: ['#ffd902'],
                backgroundColor: ['#ffe135']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatura'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    }
);

var paginacao = {};
var tempo = {};
function obterDados(grafico, endpoint) {
    var http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3300/sensores/' + endpoint, false);
    http.send(null);
    var valores = JSON.parse(http.responseText);
    if (paginacao[endpoint] == null) {
        paginacao[endpoint] = 0;
    }
    if (tempo[endpoint] == null) {
        tempo[endpoint] = 0;
    }
    // Exibir à partir do último elemento exibido anteriormente
    var ultimaPaginacao = paginacao[endpoint];
    paginacao[endpoint] = valores.length;
    var valores = valores.slice(ultimaPaginacao);
    valores.forEach((valor) => {
        //Máximo de 60 itens exibidos no gráfico
        if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
            grafico.data.labels.shift();
            grafico.data.datasets[0].data.shift();
        }
        grafico.data.labels.push(tempo[endpoint]++);
        grafico.data.datasets[0].data.push(parseFloat(valor));
        grafico.update();
    })
}

// setInterval(() => {
//     obterDados(dht11Umidade, 'dht11/umidade');
//     obterDados(lm35Temperatura, 'lm35/temperatura');
// }, 1000);