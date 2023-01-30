const router = require("express").Router();
const ValidationError = require('../core/exceptions')
const todoValidator = require('../validators/todo');
const todoRepository  = require("../repository/todo");

router.post('/', async (req, res) => {
    const { body : todo } = req;

    try {
        todoValidator.savetodo(todo);
        newTodo = await todoRepository.savetodo(todo);
        res.status(201).send(newTodo);
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

router.put('/:todoId', async (req, res) => {
    const { params : { todoId } } = req;

    // Buscamos al paciente
    const todo = await todoRepository.todoById(todoId);

    // Preguntamos si existe el recurso
    if(todo) {
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(todo);
    } else {
        res.status(404).send();
    }
})

router.delete('/:todoId', async (req, res) => {
    const { params : { todoId } } = req;

    // Buscamos al todo
    const todo = await todoRepository.todoById(todoId);

    // Preguntamos si existe el recurso
    if(todo) {
        const todoRemoved = await todoRepository.delete(todoId);
        // Junto con la data, podemos indicar un codigo HTTP de respuesta
        res.status(200).send(todoRemoved);
    } else {
        res.status(404).send();
    }

})

module.exports = router;