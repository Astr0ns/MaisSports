function updateUI() {
    const current_user_email = localStorage.getItem("email");
    const loginMessage = document.getElementById("loginMessage");
    const notification = document.querySelector(".notification");

    if (current_user_email === null) {
        // O valor do email no localStorage é igual a null, portanto, mostre a notificação
        notification.style.display = "block";

        // Exibir a mensagem de login
        loginMessage.style.display = "block";
    } else {
        // O usuário está logado, portanto, oculte a notificação
        notification.style.display = "none";

        // Ocultar a mensagem de login
        loginMessage.style.display = "none";
    }
}