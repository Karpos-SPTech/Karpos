function registrar() {
    const senha = input_senha.value
    const telefone = input_telefone.value
    const email = input_email.value
    const senhaConfirmada = input_senhaConfirmada.value
    const documento = input_documento.value
    const documentacao = select_doc.value
    let verificarLetraMaiuscula = false
    let verificarCaracterEspecial = false
    let caracteresEspeciais = "!@#$%^&*(),.?/:{}|<>"
    let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let senhaValidada = false



    // verificação de campos
    if (email == "" ||
        senha == "" ||
        telefone == "" ||
        senhaConfirmada == "" ||
        documento == "") {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "PREENCHA TODOS OS CAMPOS!"

    }
    // verificação telefone
    else if (telefone.length < 11 || telefone.length > 11) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O telefone não esta completo!"
    }
    // verificação senha igual
    else if (senha != senhaConfirmada) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "As senhas precisam ser iguais!"
    }
    // verificação email
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "Digite um e-mail válido!"
    } else if (documentacao == "cpf" && documento.length < 11) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O CPF deve ter no mínimo 11 dígitos";
    } else if (documentacao == "rg" && documento.length < 9) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O RG deve ter no mínimo 9 dígitos";
    } else if (documentacao == "cnpj" && documento.length < 14) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O CNPJ deve ter no mínimo 14 dígitos";
    } else if (documentacao == "rne" && documento.length < 7) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O RNE deve ter no mínimo 7 dígitos";
    }
    // verificação de senha
    else if (senha.length < 8) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "A senha tem que ter no minimo 8 caracteres"
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
            div_alertasValidacao.innerHTML = "Digite um senha com caracteres especial e letra maiscula"
        } else {
            window.location.href = "login.html";
        }
    }
}

function login() {
    window.location.href = "index.html";
}

function exit() {
    window.location.href = "tela_inicial_dashb.html";
}