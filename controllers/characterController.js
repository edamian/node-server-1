const axios = require('axios');
const characterService = require('../services/characterService');
const nitService = require('../services/nitService');
const utils = require('../utils/utils');

exports.getById = async (req, res) => {
    const index = Math.floor(Math.random() * 10) + 1;
    const nit = utils.getNits(index);
    const { id } = req.params;

    const characterRequest = characterService.findCharacter(id);
    const nitRequest = nitService.findByNit(nit);

    axios.all([characterRequest, nitRequest]).then(
        axios.spread((...responses) => {
            const person = {};
            const characterResponses = responses[0].data;
            const nitResponse = responses[1].data;

            person.nombre = characterResponses.name;
            person.estado = characterResponses.status;
            person.nit = nitResponse.nit;
            res.send(person);
        })
    )
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
};
