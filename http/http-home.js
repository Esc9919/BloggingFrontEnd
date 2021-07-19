const axios = require('axios');

function get() {
  
  axios.get('https://bloggingapirest.herokuapp.com/user')
  .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = { get }