const router = require("express").Router();
const albumRepository  = require("../repository/album");

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

module.exports = router;