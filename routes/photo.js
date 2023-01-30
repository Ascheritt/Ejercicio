const router = require("express").Router();
const ValidationError = require('../core/exceptions')
const photoValidator = require('../validators/photo');
const photoRepository  = require("../repository/photo");

router.post('/', async (req, res) => {
    const { body : photo } = req;

    try {
        photoValidator.savephoto(photo);
        newPhoto = await photoRepository.savephoto(photo);
        res.status(201).send(newPhoto);
    } catch(error) {
        // Si es error de validacion, devolvemos 400
        if(error instanceof ValidationError) {
            res.status(400).send({error : error.message})
            return
        }

        // Cualquier otro error, es 500
        console.log(error)
        res.status(500).send()
    }
});

router.put('/:photoId', async (req, res) => {
    const { params : { photoId } } = req;

    // Buscamos al paciente
    const photo = await photoRepository.photoById(photoId);

    // Preguntamos si existe el recurso
    if(photo) {
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(photo);
    } else {
        res.status(404).send();
    }
})

router.delete('/:photoId', async (req, res) => {
    const { params : { photoId } } = req;

    // Buscamos al photo
    const photo = await photoRepository.photoById(photoId);

    // Preguntamos si existe el recurso
    if(photo) {
        const photoRemoved = await photoRepository.delete(photoId);
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(photoRemoved);
    } else {
        res.status(404).send();
    }

})

module.exports = router;