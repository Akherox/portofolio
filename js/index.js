
const ul = document.querySelector("#apiList")

function getApiGitHub() {
    fetch("https://api.github.com/users/Akherox/repos")
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            var data = await res.json()

            data.map(item => {
                let li = document.createElement("li")

                li.innerHTML = `
                <strong>${item.name.toUpperCase()}</strong>
                <span>URL: ${item.url}</span>
                <span>Data Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}<span>
                `
                ul.appendChild(li)
            })
        })
        .catch(e => console.log(e))
}
getApiGitHub()

/* VALIDAÇÂO CONTATO *////////////////////////////////////////////////////////////////////////////////////////
function validForm() {

    var nome = document.form.nome;
    var email = document.form.email;
    var mensagem = document.form.mensagem;

    if (nome.value.length < 6) {
        nome.nextElementSibling.style.display = "block";
        nome.style.border = "2px solid #0f35df";
        return false
    } else {
        nome.nextElementSibling.style.display = "none";
        nome.style.border = "2px solid white";
    }
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) || email.value == "") {
        email.nextElementSibling.style.display = "block";
        email.style.border = "2px solid #0f35df";
        return false
    } else {
        email.nextElementSibling.style.display = "none";
        email.style.border = "2px solid white";
    }
    if (mensagem.value.length < 8) {
        mensagem.nextElementSibling.style.display = "block";
        mensagem.style.border = "2px solid #0f35df";
        return false
    } else {
        mensagem.nextElementSibling.style.display = "none";
        mensagem.style.border = "2px solid white";
    }
}