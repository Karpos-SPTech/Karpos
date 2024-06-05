function registrar() {
  

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    const nome = input_nome.value
    const senha = input_senha.value
    const telefone = input_telefone.value
    const email = input_email.value
    const senhaConfirmada = input_senhaConfirmada.value
    const documento = input_documento.value
    const token = token_input.value
    let verificarLetraMaiuscula = false
    let verificarCaracterEspecial = false
    let caracteresEspeciais = "!@#$%^&*(),.?/:{}|<>"
    let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let senhaValidada = false

    if (email == "" ||
        senha == "" ||
        telefone == "" ||
        senhaConfirmada == "" ||
        documento == "" ||
        token == "" ||
        nome == ""
    ) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = `PREENCHA TODOS OS CAMPOS!`
    }
    // verificação telefone
    else if (telefone.length < 11 || telefone.length > 11) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O TELEFONE NÃO ESTA COMPLETO!"
    }
    // verificação senha igual
    else if (senha != senhaConfirmada) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "AS SENHAS PRECISAM SER IGUAIS!"
    }
    // verificação email
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "DIGITE UM E-MAIL VÁLIDO!"
    } else if (documento.length < 14) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O CPF deve ter no mínimo 11 dígitos";
    }
    // verificação de senha
    else if (senha.length < 8) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "A SENHA TEM QUE TER NO MINIMO 8 CARACTERES"
    }
    // verificação de caracter especial + letra maiuscula + for
    else {
        for (let senhaVerificiar = 0; senhaVerificiar < senha.length; senhaVerificiar++) {
            let char = senha[senhaVerificiar]
            if (caracteresEspeciais.indexOf(char) != -1) {
                verificarCaracterEspecial = true;
            }
            if (letrasMaiusculas.indexOf(char) != -1) {
                verificarLetraMaiuscula = true;
            }
        }
        if (verificarCaracterEspecial && verificarLetraMaiuscula) {
            senhaValidada = true
        }

        if (senhaValidada == false) {
            div_paiAlertas.style.display = 'block';
            div_alertasValidacao.innerHTML = "DIGITE UMA SENHA COM CARACTER ESPECIAL E LETRA MAISCULA"
        } 
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            documentoServer: documento,
            telefoneServer: telefone,
            empresaServer: token
           
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                div_alertasValidacao.style.display = "block";

                div_alertasValidacao.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                limparFormulario();
            
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
         
        });

    return false;
}

function listar() {
    fetch("/empresas/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((empresas) => {
                empresas.forEach((empresa) => {
                    token_input.innerHTML += `<option value='${empresa.token}'>${empresa.cnpj}</option>`;
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function sumirMensagem() {
    div_alertasValidacao.style.display = "none";
}