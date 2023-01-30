const router = require("express").Router();
const ValidationError = require('../core/exceptions')
const commentValidator = require('../validators/comment');
const commentRepository  = require("../repository/comment");

router.post('/', async (req, res) => {
    const { body : comment } = req;

    try {
        commentValidator.savecomment(comment);
        newComment = await commentRepository.savecomment(comment);
        res.status(201).send(newComment);
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

router.put('/:commentId', async (req, res) => {
    const { params : { commentId } } = req;

    // Buscamos al paciente
    const comment = await commentRepository.commentById(commentId);

    // Preguntamos si existe el recurso
    if(comment) {
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(comment);
    } else {
        res.status(404).send();
    }
})

router.delete('/:commentId', async (req, res) => {
    const { params : { commentId } } = req;

    // Buscamos al comment
    const comment = await commentRepository.commentById(commentId);

    // Preguntamos si existe el recurso
    if(comment) {
        const commentRemoved = await commentRepository.delete(commentId);
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(commentRemoved);
    } else {
        res.status(404).send();
    }

})

module.exports = router;