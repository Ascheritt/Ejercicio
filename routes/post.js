const router = require("express").Router();

const postRepository  = require("../repository/post");

router.post("/", (req,res) =>{
    const { body : post } = req;
    res.status(200).send(post)
})

router.put('/:postId', (req, res) => {
    const { params : { postId } } = req;

    // Buscamos al paciente
    const post = postRepository.getById(postId);

    // preguntamos si existe el recurso
    if(!post){
        return res.status(400).send();
    }
    res.status(200).send(post);
})

router.delete('/:postId', (req, res) => {
    const { params : { postId } } = req;

    //Buscamos al paciente
    const post = postRepository.getById(postId);

    // preguntamos si existe el recurso
    if(!post){
        return res.status(400).send();
    }
    res.status(200).send(post);

})

module.exports = router;