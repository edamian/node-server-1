const axios = require('axios');

exports.findCharacter = async (id) => axios.get(`https://rickandmortyapi.com/api/character/${id}`);
