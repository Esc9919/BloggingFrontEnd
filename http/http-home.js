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

module.exports = { get, isEmailValid }