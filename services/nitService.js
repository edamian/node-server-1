const axios = require('axios');

exports.findByNit = async (nit) => axios.get(`http://localhost:3000/api/nits/${nit}`);
