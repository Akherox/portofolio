
const ul = document.querySelector("#apiList") 

function getApiGitHub() {
    fetch("https://api.github.com/users/Akherox/repos")
        .then(async res => {
            if(!res.ok) {
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
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const mensagem = document.getElementById("mensagem")
const form = document.getElementById("form")
const paragrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let enter = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    paragrafo.innerHTML = ""
    if(nome.value.length <6){
        warnings +- `O nome não é valido <br>`
        enter = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)) {
        warnings +- `O email não é valido <br>`
        enter = true
    }
    if(mensagem.value.length <8){
        warnings +- `O mensagen não tem suficiente conteudo <br>`
        enter = true
    }
    if(enter){
        paragrafo.innerHTML = warnings
    }else{
        paragrafo.innerHTML = "Mensagen eviado"
    }
})