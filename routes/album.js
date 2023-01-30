const router = require("express").Router();
const ValidationError = require('../core/exceptions')
const albumValidator = require('../validators/album');
const albumRepository  = require("../repository/album");

const photoRepository = require("../repository/photo")

router.post('/', async (req, res) => {
    const { body : album } = req;

    try {
        albumValidator.savealbum(album);
        newAlbum = await albumRepository.savealbum(album);
        res.status(201).send(newAlbum);
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


router.put('/:albumId', async (req, res) => {
    const { params : { albumId } } = req;

    // Buscamos al paciente
    const album = await albumRepository.albumById(albumId);

    // Preguntamos si existe el recurso
    if(album) {
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(album);
    } else {
        res.status(404).send();
    }
})

router.delete('/:albumId', async (req, res) => {
    const { params : { albumId } } = req;

    // Buscamos al album
    const album = await albumRepository.albumById(albumId);

    // Preguntamos si existe el recurso
    if(album) {
        const albumRemoved = await albumRepository.delete(albumId);
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(albumRemoved);
    } else {
        res.status(404).send();
    }

})

//

router.get("/:albumId/photo", (req,res) =>{
    const { params : {albumId}} = req
    const photo = photoRepository.getIdPh(albumId);
    //si es distinto de vacio 
    if(!photo){
        return res.status(400).send();
    }
    res.status(200).send(photo);
})

module.exports = router;