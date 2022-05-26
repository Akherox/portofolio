function enviarCorreo() {
    let form = document.querySelector("#fContato")
    form.addEventListener("submit", function (ev) {
        ev.preventDefault()
    })

    var email = $("#in-email").val();
    var mensagen = $("#in-mensagem").val();
    console.log(email)
    console.log(mensagen)

}