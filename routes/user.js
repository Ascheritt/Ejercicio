const router = require('express').Router();
const userRepository = require('../repository/user');
const userValidator = require('../validators/users');
const ValidationError = require('../core/exceptions')
const albumRepository  = require("../repository/album");


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

router.put('/:userId/albums', (req, res) => {
    const { params : { userId } } = req;
    const album = albumRepository.getIdU(userId);

    // preguntamos si existe el recurso
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

router.get("/:userId/albums", (req,res) =>{
    const { params : {userId}} = req
    const album = albumRepository.getIdU(userId);
    //si es distinto de vacio 
    if(!album){
        return res.status(400).send();
    }
    res.status(200).send(album);
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

module.exports = router;