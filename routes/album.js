const router = require("express").Router();
const albumRepository  = require("../repository/album");

router.post("/", (req,res) =>{
    const { body : album } = req;
    res.status(200).send(album)
})

router.get("/", (req,res) =>{
    res.send(albumRepository.getAll());
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


module.exports = router;