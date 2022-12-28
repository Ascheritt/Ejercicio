const router = require("express").Router();

const todoRepository  = require("../repository/todo");

router.post("/", (req,res) =>{
    const { body : todo } = req;
    res.status(200).send(todo)
})

router.put('/:todoId', (req, res) => {
    const { params : { todoId } } = req;

    // Buscamos al paciente
    const todo = todoRepository.getById(todoId);

    // preguntamos si existe el recurso
    if(!todo){
        return res.status(400).send();
    }
    res.status(200).send(todo);
})

router.delete('/:todoId', (req, res) => {
    const { params : { todoId } } = req;

    //Buscamos al paciente
    const todo = todoRepository.getById(todoId);

    // preguntamos si existe el recurso
    if(!todo){
        return res.status(400).send();
    }
    res.status(200).send(todo);

})

module.exports = router;