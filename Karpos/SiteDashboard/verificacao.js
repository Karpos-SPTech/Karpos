function registrar() {
    const senha = input_senha.value
    const telefone = Number(input_telefone.value)
    const email = input_email.value
    const senhaConfirmada = input_senhaConfirmada.value
    const documento = input_documento.value
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
        div_alertasValidacao.innerHTML += "PREENCHA TODOS OS CAMPOS"
    }
    // verificação de senha
    else if (senha) {
        if (senha < 8) {
            alert("A senha tem que ter no minimo 8 caracteres")
        } 
        // verificação de caracter especial + letra maiuscula + for
        else {
            for (let senhaVerificiar = 0; senhaVerificiar < senha.length; senhaVerificiar++) {
                let char = senha[senhaVerificiar]
                if (caracteresEspeciais.indexOf(char) !== -1) {
                    verificarCaracterEspecial = true;
                }
                if (letrasMaiusculas.indexOf(char) !== -1) {
                    verificarLetraMaiuscula = true;
                }
            }
            if (verificarCaracterEspecial && verificarLetraMaiuscula) {
                senhaValidada = true
            }

            if (senhaValidada == false) {
                // alert("Digite um senha com caracteres especial e letra maiscula")
            }
        }
    }
    // verificação telefone
    else if (telefone < 12) {
        alert("Telefone não esta completo")
    }
    // verificação senha igual
    else if (senha != senhaConfirmada) {
        alert("as senhas tem que ser ingual")
    }
    // verificação email
    else if (email.indexOF("@") == -1 || email.indexOF(".") == -1) {
        alert("digite um email valido")
    }
}