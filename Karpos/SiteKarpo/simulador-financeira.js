function limpar() {
    quantidade_perdas_input.value = ""
    faturamento_input.value = ""
    nome_empresa.value = ""
}

function calcular() {


    const faturamentoAnual = Number(faturamento_input.value)
    const qtdPerda = Number(quantidade_perdas_input.value)
    let valorLiquido = faturamentoAnual - qtdPerda
    let aumentoLiquido = valorLiquido * 1.75
    let aumentoLiquidoAnual = aumentoLiquido * 12
    let qtdPerdaAnual = qtdPerda * 12
    let valorLiquidoAnual = valorLiquido * 12


    //formatando as variáveis de números
    let formatFaturamentoAnual = faturamentoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let formatqtdPerda = qtdPerda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let formatvalorLiquido = valorLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let formataumentoLiquido = aumentoLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let formatvalorLiquidoAnual = valorLiquidoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let formatqtdPerdaAnual = qtdPerdaAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let formataumentoLiquidoAnual = aumentoLiquidoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
   

    const botaoSimular = document.querySelector('.botaoSimular');
    const resultadoSimulacao = document.querySelector('#resultadoSimulacao');

    botaoSimular.addEventListener('click', () => {
        resultadoSimulacao.classList.add('ativa');
    });

    const botaoFechar = document.querySelector('.fecharSimulacao');

    botaoFechar.addEventListener('click', () => {
        resultadoSimulacao.classList.remove('ativa');
    });

    const cartaoPossibilidade = document.querySelector('.cartao:nth-child(1)');
    const cartaoPerda = document.querySelector('.cartao:nth-child(2)');
    const cartaoOportunidade = document.querySelector('.cartao:nth-child(3)');
    const nomeEmpresaa = document.querySelector('.empresaNome');

    // nomeEmpresaa.querySelector('p').textContent = `Olá ${nomeEmpresa} aqui está a sua simulação de perdas e o quanto você pode lucrar com a nossa solução`
    nomeempresa.innerHTML = `Olá ${nome_empresa.value} aqui está a sua simulação de perdas e o quanto você pode lucrar com a nossa solução <p>A análise que fizemos sobre os seus resultados revelou alguns insights cruciais: Devido a <span class="italico">falta de monitoramento de temperatura e umidade</span>, o fungo pode estar comprometendo o seu faturamento anual e a qualidade do seu produto<p/>
        <p>De acordo com uma pesquisa feita pela  <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1112910/1/BOL100ManchaRamularia.pdf" target="blank">Embrapa</a>, uma plantação de algodão pode ser prejudicada <span class="destaque">em até 75%</span> devido a presença do fungo Mancha de Ramulária (o principal fungo das plantações de algodão).</p>                                                         `

    cartaoPossibilidade.querySelector('h2').textContent = 'Possibilidade de Lucro Atual';
    cartaoPossibilidade.querySelector('p').textContent = `Anual: ${formatvalorLiquidoAnual} \nMensal: ${formatvalorLiquido}`;

    cartaoPerda.querySelector('h2').textContent = 'Perda por Fungo';
    cartaoPerda.querySelector('p').textContent = `Anual: ${formatqtdPerdaAnual}`;

    cartaoOportunidade.querySelector('h2').textContent = 'Oportunidade';
    cartaoOportunidade.querySelector('p').textContent = `Faturamento Anual: ${formataumentoLiquidoAnual} \nFaturamento Mensal: ${formataumentoLiquido}`;
}