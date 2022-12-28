const router = require("express").Router();

const photoRepository  = require("../repository/photo");

router.post("/", (req,res) =>{
    const { body : photo } = req;
    res.status(200).send(photo)
})

router.put('/:photoId', (req, res) => {
    const { params : { photoId } } = req;

    // Buscamos al paciente
    const photo = photoRepository.getById(photoId);

    // preguntamos si existe el recurso
    if(!photo){
        return res.status(400).send();
    }
    res.status(200).send(photo);
})

router.delete('/:photoId', (req, res) => {
    const { params : { photoId } } = req;

    //Buscamos al paciente
    const photo = photoRepository.getById(photoId);

    // preguntamos si existe el recurso
    if(!photo){
        return res.status(400).send();
    }
    res.status(200).send(photo);

})

module.exports = router;