function saveData() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email && v.password == password
    })) {
        let valid = document.getElementById('valid-sucess');
        let stro = "<section class='validation-sucess'><h4>Logado com sucesso!!</h4></section> "
        valid.innerHTML = stro;

        let current_user = user_records.filter((v) => {
            return v.email == email && v.password == password
        })[0]

        localStorage.setItem("email", current_user.email);
        localStorage.setItem("name", current_user.name);
        window.location.href = "profile.html";

    }
    else {
        let valid = document.getElementById('valid');
        let stro = "<section class='validation-error'><h4>Senha ou email incorretos!!</h4></section> "
        valid.innerHTML = stro;
    }

}

document.addEventListener("keydown", () => {
    if (event.keyCode === 13) {
      saveData()
    }
})