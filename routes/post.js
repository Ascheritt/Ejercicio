const router = require("express").Router();
const ValidationError = require('../core/exceptions')
const postRepository  = require("../repository/post");
const postValidator = require('../validators/post');

const commentRepository = require("../repository/comment");

router.post('/', async (req, res) => {
    const { body : post } = req;

    try {
        postValidator.savepost(post);
        newPost = await postRepository.savepost(post);
        res.status(201).send(newPost);
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

router.put('/:postId', async (req, res) => {
    const { params : { postId } } = req;

    // Buscamos al paciente
    const post = await postRepository.postById(postId);

    // Preguntamos si existe el recurso
    if(post) {
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(post);
    } else {
        res.status(404).send();
    }
})

router.delete('/:postId', async (req, res) => {
    const { params : { postId } } = req;

    // Buscamos al post
    const post = await postRepository.postById(postId);

    // Preguntamos si existe el recurso
    if(post) {
        const postRemoved = await postRepository.delete(postId);
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(postRemoved);
    } else {
        res.status(404).send();
    }

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