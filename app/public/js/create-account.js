function saveData() {
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email && v.password == password && !(v.name == "") && !(v.password == "") && !(v.email == "")

    })) {
        let valid = document.getElementById('valid-sucess');
        let stro = "<section class='validation-sucess'><h4>Conta criada com sucesso!!</h4></section> "
        valid.innerHTML = stro;
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