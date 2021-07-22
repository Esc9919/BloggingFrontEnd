const axios = require('axios');

async function get() {
  return axios.get('https://bloggingapirest.herokuapp.com/user')
  .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = { get }