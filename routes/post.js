const router = require("express").Router();

const postRepository  = require("../repository/post");
const commentRepository = require("../repository/comment");

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

//

router.get("/:postId/comments", (req,res) =>{
    const { params : {postId}} = req
    const comment = commentRepository.getIdC(postId);
    //si es distinto de vacio 
    if(!comment){
        return res.status(400).send();
    }
    res.status(200).send(comment);
})

module.exports = router;