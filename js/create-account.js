function saveData() {
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email
    })) {
        alert("Casdastrado com sucesso! Vá para a pagina de login para acessar seu perfil!");
    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }


}