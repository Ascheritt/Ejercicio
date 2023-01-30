const ValidationError = require('../core/exceptions')

const savetodo = todo => {
    let {userId, title, completed} = todo;

    title = title.trim();
    completed = completed.trim();

    // Todos los campos son requeridos

    if(userId.length === 0 ) {
        throw new ValidationError("Debe contener un username")
    }

    if(title.length === 0 ) {
        throw new ValidationError("Debe contener un username")
    }

    if(completed.length === 0 ) {
        throw new ValidationError("Debe contener un email")
    }

    // Todos los campos de cadena de caracteres deben tener entre 10 y 50 caracteres

    if (title.length < 10 ) {
        throw new ValidationError("Debe ser mayor de 10 caracteres")
    }else if (title.length > 50 ){
        throw new ValidationError("Debe ser menor de 50 caracteres")
    }

    // El campo completed solo puede tomar valores booleanos

    if (typeof completed != Boolean) {
        throw new ValidationError("Debe ser booleano")
    }

}

module.exports = {
    savetodo
} 
