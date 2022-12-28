const router = require("express").Router();

const commentRepository  = require("../repository/comment");

router.post("/", (req,res) =>{
    const { body : comment } = req;
    res.status(200).send(comment)
})

router.put('/:commentId', (req, res) => {
    const { params : { commentId } } = req;

    // Buscamos al paciente
    const comment = commentRepository.getById(commentId);

    // preguntamos si existe el recurso
    if(!comment){
        return res.status(400).send();
    }
    res.status(200).send(comment);
})

router.delete('/:commentId', (req, res) => {
    const { params : { commentId } } = req;

    //Buscamos al paciente
    const comment = commentRepository.getById(commentId);

    // preguntamos si existe el recurso
    if(!comment){
        return res.status(400).send();
    }
    res.status(200).send(comment);

})

module.exports = router;