let myChart; // Variável global para armazenar o gráfico

document.addEventListener("DOMContentLoaded", function () {
    const botaoSimular = document.querySelector('.botaoSimular');
    const resultadoSimulacao = document.querySelector('#resultadoSimulacao');
    const conteudoContato = document.querySelector('.conteudo-contato');
    const botaoFechar = document.querySelector('.fecharSimulacao');

    botaoSimular.addEventListener('click', () => {
        resultadoSimulacao.classList.add('ativa'); // Mostra o resultado da simulação
        conteudoContato.classList.add('ativa'); // Oculta o conteúdo de contato
    });

    botaoFechar.addEventListener('click', () => {
        resultadoSimulacao.classList.remove('ativa'); // Esconde o resultado da simulação
        conteudoContato.classList.remove('ativa'); // Mostra o conteúdo de contato
    });
});

function limpar() {
    quantidade_perdas_input.value = "";
    plantioMedio_input.value = "";
    nome_empresa.value = "";
    const tituloPaginaContato = document.querySelector('.titulo');
    const subtituloPaginaContato = document.querySelector('.subtitulo');

    tituloPaginaContato.textContent = "Bem vindo!";
    subtituloPaginaContato.textContent = "Preencha o formulário abaixo e faremos um orçamento para a sua empresa";
}

function calcular() {
    let perdaFungoCiclo = Number(quantidade_perdas_input.value);
    let custoPlantioCiclo = Number(plantioMedio_input.value);
    let porcentagemRecuperacao = (perdaFungoCiclo / custoPlantioCiclo) * 100;

    let formatCustoPlantioCiclo = custoPlantioCiclo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let formatPerdaFungoCiclo = perdaFungoCiclo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const tituloPaginaContato = document.querySelector('.titulo');
    const subtituloPaginaContato = document.querySelector('.subtitulo');

    tituloPaginaContato.textContent = "Simulação Pronta!";
    subtituloPaginaContato.textContent = "Aqui está a sua simulação de perdas e o quanto você pode lucrar com a nossa solução";

    const cartaoCustoPlantio = document.querySelector('.cartao:nth-child(1)');
    const cartaoPerda = document.querySelector('.cartao:nth-child(2)');
    const cartaoOportunidade = document.querySelector('.cartao:nth-child(3)');

    cartaoCustoPlantio.querySelector('h2').textContent = 'Custo total do Plantio';
    cartaoCustoPlantio.querySelector('p').innerHTML = `<b>${formatCustoPlantioCiclo}</b>`;

    cartaoPerda.querySelector('h2').textContent = 'Média de perda por ciclo';
    cartaoPerda.querySelector('p').innerHTML = `<b style="color:red;">${formatPerdaFungoCiclo}</b>`;

    cartaoOportunidade.querySelector('h2').textContent = 'Oportunidade';
    cartaoOportunidade.querySelector('p').innerHTML = `Olá ${nome_empresa.value}, Com base nos dados informados anteriormente, nosso projeto <br>será capaz de <b>reduzir</b> sua perda em até <b>${porcentagemRecuperacao.toFixed(2)}%</b>`;

    const total = 100 - porcentagemRecuperacao;

    // Verifica se o gráfico já foi criado
    if (!myChart) {
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Custo Total do Plantio', 'Média de Perda por Ciclo'],
                datasets: [{
                    label: 'Valores',
                    data: [total, porcentagemRecuperacao],
                    backgroundColor: [
                        '#a17f6c',
                        '#805b46'
                    ],
                    borderColor: [
                        '#745c4f',
                        '#50392c'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'black' // Define a cor das labels como vermelho
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false
                    }
                }
            }
        });
    } else {
        // Atualiza os valores dos dados com os novos valores
        myChart.data.datasets[0].data = [total, porcentagemRecuperacao];
        // Atualiza o gráfico
        myChart.update();
    }
}
