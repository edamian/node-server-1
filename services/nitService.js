const axios = require("axios");

exports.findByNit = async (nit) => {
    return axios.get(`http://localhost:3000/api/nits/${nit}`);
}