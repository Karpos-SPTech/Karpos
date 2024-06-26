function login() {


    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (senhaVar == "" || senhaVar == "") {
        div_paiAlertas.style.display = 'block';
        div_alertasValidacao.innerHTML = "PREENCHA TODOS <br> OS CAMPOS!"
    } else{

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);
    
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
    
            if (resposta.ok) {
                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;

                    div_paiAlertas.style.display = 'block';
                    div_alertasValidacao.innerHTML =
                        "Login Sucedido! Entrando na Dashboard...";
    
                    setTimeout(function () {
                        window.location = "dashboard.html";
                    }, 1000);
    
                });
    
            } else {
                div_paiAlertas.style.display = 'block';
                div_alertasValidacao.innerHTML = "Erro ao tentar realizar o login!"
                console.log("Houve um erro ao tentar realizar o login!");
    
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }
    
        }).catch(function (erro) {
            console.log(erro);
        })
    
        return false;
    }
    }



function sumirMensagem() {
    div_alertasValidacao.style.display = "none"
}
