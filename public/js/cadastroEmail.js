function verifyEmail() {

    var email = document.getElementById('email').value;

    if(email != ''){
        if(email.includes('@') && email.includes('.com')) {
            document.getElementById('error-msg').innerText = '';
            var xhr = new XMLHttpRequest();
            xhr.open("get", "http://localhost:3000/cadastroemail/isemailvalid?email=" + email);

            xhr.onload = () => {
                let isValid = xhr.response;

                console.log(isValid)

                // SE É VALIDO REDIRECIONA PARA O INDEX PEDINDO A SENHA
                // SE NÃO É VÁLIDO REDIRECIONA PARA A TELA DE CADASTRO
                if(isValid === true) {
                    window.location.href = 'http://localhost:3000'
                } else {
                    window.location.href = 'http://localhost:3000/cadastro'
                }
            }

            xhr.send();
        } else {
            document.getElementById('error-msg').innerText = 'O email fornecido é inválido';
        }
    } else {
        document.getElementById('error-msg').innerText = 'O campo email é obrigatório';
    }
}