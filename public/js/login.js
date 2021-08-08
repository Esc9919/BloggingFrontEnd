function login() {

    localStorage.setItem("Teste", "bla")

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username != ''){
        document.getElementById('error-msg').innerText = '';
        var xhr = new XMLHttpRequest();
        xhr.open("post", "http://localhost:3000/login", true);

        xhr.onload = () => {
            console.log(xhr.response)
            // sessionStorage.setItem("token", xhr.response)
        }

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.send(`user=${username}&password=${password}`);
    } else {
        document.getElementById('error-msg').innerText = 'O usário fornecido é inválido';
    }
}