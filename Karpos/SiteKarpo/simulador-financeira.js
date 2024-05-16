let myChart;

document.addEventListener("DOMContentLoaded", function () {
    const botaoSimular = document.querySelector('.botaoSimular');
    const resultadoSimulacao = document.querySelector('#resultadoSimulacao');
    const conteudoContato = document.querySelector('.conteudo-contato');
    const botaoFechar = document.querySelector('.fecharSimulacao');

    botaoSimular.addEventListener('click', () => {
        resultadoSimulacao.classList.add('ativa');
        conteudoContato.classList.add('ativa');
    });

    botaoFechar.addEventListener('click', () => {
        resultadoSimulacao.classList.remove('ativa');
        conteudoContato.classList.remove('ativa');
    });
});

function limpar() {
    [quantidade_perdas_input.value, plantioMedio_input.value, nome_empresa.value] = ["", "", ""];

    document.querySelector('.titulo').textContent = "Bem vindo!";
    document.querySelector('.subtitulo').textContent = "Preencha o formulário abaixo e faremos um orçamento para a sua empresa";
}

function calcular() {
    const quantidade_perdas = Number(quantidade_perdas_input.value);
    const plantio_medio = Number(plantioMedio_input.value);
    const porcentagem_recuperacao = (quantidade_perdas / plantio_medio) * 100;


    const formatCurrency = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.querySelector('.titulo').textContent = "Simulação Pronta!";
    document.querySelector('.subtitulo').textContent = "Aqui está a sua simulação de perdas e o quanto você pode lucrar com a nossa solução";

    document.querySelector('.cartao:nth-child(1) h2').textContent = 'Custo total do Plantio';
    document.querySelector('.cartao:nth-child(1) p').innerHTML = `<b>${formatCurrency(plantio_medio)}</b>`;

    document.querySelector('.cartao:nth-child(2) h2').textContent = 'Média de perda por ciclo';
    document.querySelector('.cartao:nth-child(2) p').innerHTML = `<b style="color:red;">${formatCurrency(quantidade_perdas)}</b>`;

    document.querySelector('.cartao:nth-child(3) h2').textContent = 'Oportunidade';
    document.querySelector('.cartao:nth-child(3) p').innerHTML = `Olá <b>${nome_empresa.value}</b>, Com base nos dados informados anteriormente, nosso projeto <br>será capaz de <b>reduzir</b> sua perda em até <b>${porcentagem_recuperacao.toFixed(2)}%</b>`;

    const total = 100 - porcentagem_recuperacao;

    if (!myChart) {
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Custo Total do Plantios(%)', 'Média de Perda por Ciclo(%)'],
                datasets: [{
                    data: [total, porcentagem_recuperacao],
                    backgroundColor: ['#a17f6c', '#805b46'],
                    borderColor: ['#745c4f', '#50392c'],
                    borderWidth: 2
                }]
            },
            options: { plugins: { legend: { labels: { color: 'black' } } }, scales: { y: { beginAtZero: true, display: false } } }
        });
    } else {
        myChart.data.datasets[0].data = [total, porcentagem_recuperacao];
        myChart.update();
    }
}
