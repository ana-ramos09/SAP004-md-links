const axios = require('axios');

function validate (url) {
    var linkStatus;   
    return axios.get(url).status

        .then(function (res) {
            if (res.status == 200){
                linkStatus = 'valid'
                console.log(linkStatus);
            }
        })
        .catch(function (error) {
            linkStatus = 'invalid'
            console.log(linkStatus);
        })
};

module.exports = validate;