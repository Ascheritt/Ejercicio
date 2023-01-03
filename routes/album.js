const router = require("express").Router();
const albumRepository  = require("../repository/album");
const photoRepository = require("../repository/photo")

router.post("/", (req,res) =>{
    const { body : album } = req;
    res.status(200).send(album)
})


router.put("/:albumId" , (req,res) =>{
    const { params : {albumId}} = req
    const album = albumRepository.getById(albumId);
    if(album){
        res.status(200).send(album);
    }
    else{
        res.status(400).send();
    }
})
router.delete('/:albumId', (req, res) => {
    const { params : { albumId } } = req;

    //Buscamos al paciente
    const album = albumRepository.getById(albumId);

    // preguntamos si existe el recurso
    if(!album){
        return res.status(400).send();
    }
    res.status(200).send(album);

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