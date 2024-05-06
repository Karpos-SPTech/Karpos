function registrar() {
    const senha = input_senha.value
    const telefone = input_telefone.value
    const email = input_email.value
    const senhaConfirmada = input_senhaConfirmada.value
    const documento = input_documento.value
    const documentacao = select_doc.value
    const select = select_doc.value
    const token = token_input.value
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
        documento == "" ||
        select == "#" ||
        token == ""
    ) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "PREENCHA TODOS <br> OS CAMPOS!"

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
    } else if (documentacao == "cpf" && documento.length < 11) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O CPF deve ter no mínimo 11 dígitos";
    } else if (documentacao == "rg" && documento.length < 9) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O RG deve ter no mínimo 9 dígitos";
    } else if (documentacao == "rne" && documento.length < 7) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "O RNE deve ter no mínimo 7 dígitos";
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
        } else {
            window.location.href = "login.html";
        }
    }
}

function login() {
    const email = input_email.value
    const senha = input_senha.value

    if (senha == "" || email == "") {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "PREENCHA TODOS <br> OS CAMPOS!" 
    } else if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "DIGITE O E-MAIL CORRETO"
    } else if(senha != 1){
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "DIGITE A SENHA CORRETA"
    } else {
        window.location.href = "index.html";
    }
}

function exit() {
    window.location.href = "tela_inicial_dashb.html";
}

