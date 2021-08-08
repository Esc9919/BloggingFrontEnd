const axios = require('axios');


/* OBTEM TODOS OS USUÁRIOS NO BACKEND */ 
async function get() {
  return axios.get('https://bloggingapirest.herokuapp.com/user')
  .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

/* VERIFICA SE EMAIL É VÁLIDO NO BACKEND*/ 
async function isEmailValid(email) {
  return await axios.get('https://bloggingapirest.herokuapp.com/user/emailvalid?email=' + email)
  .then(function (response) {
      return true;
  })
  .catch(function (error) {
    return false;
  });
}

/* Autentica usuário existente */ 
async function autenticacao(usuario) {

  console.log(usuario.username)

  return await axios.post('https://bloggingapirest.herokuapp.com/auth', {
    username: usuario.username,
    password: usuario.password
  })
  .then(function (response) {
    console.log(response);
    console.log(JSON.parse(response))
      res = JSON.parse(response.data);
      return `${res.type} ${res.token}`;
  })
  .catch(function (error) {
    return null;
  });
}


module.exports = { get, isEmailValid, autenticacao }