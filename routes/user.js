const router = require('express').Router();
const userRepository = require('../repository/user');
const userValidator = require('../validators/users');
const ValidationError = require('../core/exceptions')
const postRepository  = require("../repository/post");
const albumRepository  = require("../repository/album");
const todoRepository  = require("../repository/todo");


router.post('/', (req, res) => {

    const { body : user } = req;

    try {
        userValidator.save(user);
        res.status(201).send({id : 1, ...user});
    } catch(error){
        console.log("error", error)
    if(error instanceof ValidationError.ValidatonError){
        res.status(400).send({error : error.message})
        return;
    }

        // Cualquier otro error, es 500
        res.status(500).send()
    }
    

});

router.get('/', (req, res) => {
      //  req: Objeto que representa el Request (peticion) hecho por el cliente
      //  res: Objeto que representa el Response (respuesta) hecha por el servidor
    
    res.send(userRepository.getAll());
})

router.put('/:userId', (req, res) => {
    const { params : { userId } } = req;

    // Buscamos al paciente
    const user = userRepository.getById(userId);

    // preguntamos si existe el recurso
    if(!user){
        return res.status(400).send();
    }
    res.status(200).send(user);
})

router.get('/:userId', (req, res) => {
    // Accedemos al objeto "req"
    // const pacienteId = req.params.pacienteId;
    const { params : { userId } } = req

    const user = userRepository.getById(userId);

    // Preguntamos si existe el recurso
    if(!user){
        return res.status(400).send();
    }
    res.status(200).send(user);
})

router.delete('/:userId', (req, res) => {
    const { params : { userId } } = req;

    //Buscamos al paciente
    const user = userRepository.getById(userId);

    // preguntamos si existe el recurso
    if(!user){
        return res.status(400).send();
    }
    res.status(200).send(user);

})

// Get a otras tablas ----- Problema actual, solo llamo 1 archivo

router.get("/:userId/post", (req,res) =>{
    const { params : {userId}} = req
    const post = postRepository.getIdP(userId);
    //si es distinto de vacio 
    if(!post){
        return res.status(400).send();
    }
    res.status(200).send(post);
})

router.get("/:userId/albums", (req,res) =>{
    const { params : {userId}} = req
    const album = albumRepository.getIdA(userId);
    //si es distinto de vacio 
    if(!album){
        return res.status(400).send();
    }
    res.status(200).send(album);
})

router.get("/:userId/todos", (req,res) =>{
    const { params : {userId}} = req
    const todo = todoRepository.getIdT(userId);
    //si es distinto de vacio 
    if(!todo){
        return res.status(400).send();
    }
    res.status(200).send(todo);
    console.log(todo);
})

//--------------------------

module.exports = router;