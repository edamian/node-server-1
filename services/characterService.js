const axios = require("axios");

exports.findCharacter = async (id) => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
}