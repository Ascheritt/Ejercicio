const router = require('express').Router();
const userRepository = require('../repository/user');
const userValidator = require('../validators/users');
const ValidationError = require('../core/exceptions')
const postRepository  = require("../repository/post");
const albumRepository  = require("../repository/album");
const todoRepository  = require("../repository/todo");


router.post('/', async (req, res) => {
  const { body : user } = req;

  try {
      userValidator.save(user);
      newUser = await userRepository.save(user);
      res.status(201).send(newUser);
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

  

router.get('/', async (req, res) => {
    /*
        req: Objeto que representa el Request (peticion) hecho por el cliente
        res: Objeto que representa el Response (respuesta) hecha por el servidor
    */
  
    res.send(await userRepository.getAll())
  })

  router.put('/:userId', async (req, res) => {
    const { params : { userId } } = req;

    // Buscamos al paciente
    const user = await userRepository.userById(userId);

    // Preguntamos si existe el recurso
    if(user) {
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(user);
    } else {
        res.status(404).send();
    }
})

router.delete('/:userId', async (req, res) => {
    const { params : { userId } } = req;

    // Buscamos al user
    const user = await userRepository.userById(userId);

    // Preguntamos si existe el recurso
    if(user) {
        const userRemoved = await userRepository.delete(userId);
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(userRemoved);
    } else {
        res.status(404).send();
    }

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