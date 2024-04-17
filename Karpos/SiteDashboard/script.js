document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

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
                label: 'Umidade',
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
/* -- dht11Temperatura -- */
// var contextoDht11Temperatura = document.getElementById('dht11Temperatura').getContext('2d');
// contextoDht11Temperatura.canvas.width = 1000;
// contextoDht11Temperatura.canvas.height = 300;
// var dht11Temperatura = new Chart(
//     contextoDht11Temperatura,
//     {
//         type: 'line',
//         data: {
//             datasets: [{
//                 label: "Temperatura",
//                 type: 'line',
//                 borderColor: ['#ff3232'],
//                 backgroundColor: ['#ff7f7f']
//             }]
//         },
//         options: {
//             scales: {
//                 xAxes: [{
//                     distribution: 'series',
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }],
//                 yAxes: [{
//                     scaleLabel: {
//                         display: true,
//                         labelString: 'Luminosidade'
//                     },
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             },
//             animation: {
//                 duration: 0
//             }
//         }
//     }
// );
/* -- luminosidade -- */
// var contextoLuminosidade = document.getElementById('luminosidade').getContext('2d');
// contextoLuminosidade.canvas.width = 1000;
// contextoLuminosidade.canvas.height = 300;
// var luminosidade = new Chart(
//     contextoLuminosidade,
//     {
//         type: 'line',
//         data: {
//             datasets: [{
//                 label: 'Luminosidade',
//                 type: 'line',
//                 borderColor: ['#ffd902'],
//                 backgroundColor: ['#ffe135']
//             }]
//         },
//         options: {
//             scales: {
//                 xAxes: [{
//                     distribution: 'series',
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }],
//                 yAxes: [{
//                     scaleLabel: {
//                         display: true,
//                         labelString: 'Luminosidade'
//                     },
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             },
//             animation: {
//                 duration: 0
//             }
//         }
//     }
// );
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
                label: 'Temperatura',
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
/* -- chave */
// var contextoChave = document.getElementById('chave').getContext('2d');
// contextoChave.canvas.width = 1000;
// contextoChave.canvas.height = 300;
// var chave = new Chart(
//     contextoChave,
//     {
//         type: 'line',
//         data: {
//             datasets: [{
//                 label: 'Chave',
//                 type: 'line',
//                 borderColor: ['#ffd902'],
//                 backgroundColor: ['#ffe135']
//             }]
//         },
//         options: {
//             scales: {
//                 xAxes: [{
//                     distribution: 'series',
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }],
//                 yAxes: [{
//                     scaleLabel: {
//                         display: true,
//                         labelString: 'Chave'
//                     },
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             },
//             animation: {
//                 duration: 0
//             }
//         }
//     }
// );

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

setInterval(() => {
    obterDados(dht11Umidade, 'dht11/umidade');
    // obterDados(dht11Temperatura, 'dht11/temperatura');
    // obterDados(luminosidade, 'luminosidade');
    obterDados(lm35Temperatura, 'lm35/temperatura');
    // obterDados(chave, 'chave');
}, 1000);