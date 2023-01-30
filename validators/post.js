const ValidationError = require('../core/exceptions')

const savepost = post => {
    let {userId, title, body} = post;

    title = title.trim();
    body = body.trim();

    // Nombres

    if(userId.length === 0 ) {
        throw new ValidationError("Debe contener un username")
    }

    if(title.length === 0 ) {
        throw new ValidationError("Debe contener un username")
    }

    if(body.length === 0 ) {
        throw new ValidationError("Debe contener un email")
    }

    // Todos los campos de cadena de caracteres deben tener entre 10 y 50 caracteres

    if (title.length < 100 ) {
        throw new ValidationError("Debe ser mayor de 10 caracteres")
    }else if (title.length > 500 ){
        throw new ValidationError("Debe ser menor de 50 caracteres")
    }

    if (body.length < 100 ) {
        throw new ValidationError("Debe ser mayor de 100 caracteres")
    }else if (body.length > 500 ){
        throw new ValidationError("Debe ser menor de 500 caracteres")
    }

}

module.exports = {
    savepost
} 