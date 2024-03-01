function updateUI() {
    const current_user_email = localStorage.getItem("email");

    if (current_user_email) {
        // O usuário está logado, portanto, oculte os botões "mob-og" e "pc-og"
        const mobOgButton = document.querySelector(".mob-og");
        const pcOgButton = document.querySelector(".pc-og");
        const profButton = document.querySelector(".prof");
        mobOgButton.style.display = "none";
        pcOgButton.style.display = "none";
        profButton.style.display = "block";

        // Mostre o botão "Log Out"
        const logOutButton = document.querySelector(".log-out");
        logOutButton.style.display = "block";
    } else {
        // O usuário não está logado, portanto, mostre os botões "mob-og" e "pc-og"
        const mobOgButton = document.querySelector(".mob-og");
        const pcOgButton = document.querySelector(".pc-og");
        const profButton = document.querySelector(".prof");
        mobOgButton.style.display = "none";
        profButton.style.display = "none";
        pcOgButton.style.display = "block";

        // Oculte o botão "Log Out"
        const logOutButton = document.querySelector(".log-out");
        logOutButton.style.display = "none";
    }
}

// Chame a função de atualização da interface quando a página for carregada
window.onload = updateUI;

