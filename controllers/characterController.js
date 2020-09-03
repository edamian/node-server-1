const characterService = require("../services/characterService");
const nitService = require("../services/nitService");
const utils = require("../utils/utils");

exports.getById = async (req, res) => {
    let index = Math.floor(Math.random() * 10 ) + 1;
    let nit = utils.getNits(index);
    let id = req.params.id;
    
    characterService.findCharacter(id)
        .then((characterResponse) => {
            let person = {};
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
                    .send({message: err.message});
                });
        })
        .catch((err) => {
            res
                .status(500)
                .send({message: err.message});
        });
}