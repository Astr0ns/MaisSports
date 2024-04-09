if (localStorage.getItem('name') == null) {
    var paragrafo = document.getElementById('aviso')
    paragrafo.innerHTML = "Logue para Acessar suas informações!";

    const mobOgButton = document.querySelector(".sair-btn");
    const wellcomeMsg = document.querySelector(".wllc");
    mobOgButton.style.display = "none";
    wellcomeMsg.style.display = "none";

} else {
    document.write(localStorage.getItem('name'));

    const mobOgButton = document.querySelector(".sair-btn");
    const loginBtn = document.querySelector(".login-btn");
    mobOgButton.style.display = "block";
    loginBtn.style.display = "none";
}