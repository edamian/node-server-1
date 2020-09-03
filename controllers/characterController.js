const characterService = require('../services/characterService');
const nitService = require('../services/nitService');
const utils = require('../utils/utils');

exports.getById = async (req, res) => {
    const index = Math.floor(Math.random() * 10) + 1;
    const nit = utils.getNits(index);
    const { id } = req.params;

    characterService.findCharacter(id)
        .then((characterResponse) => {
            const person = {};
            person.nombre = characterResponse.data.name;
            person.estado = characterResponse.data.status;
            nitService.findByNit(nit)
                .then((nitResponse) => {
                    person.nit = nitResponse.data.nit;
                    res.send(person);
                })
                .catch((err) => {
                    res
                        .status(500)
                        .send({ message: err.message });
                });
        })
        .catch((err) => {
            res
                .status(500)
                .send({ message: err.message });
        });
};
