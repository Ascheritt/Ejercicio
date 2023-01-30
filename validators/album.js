const ValidationError = require('../core/exceptions')

const savealbum = album => {
    let {userId, title} = album;

    title = title.trim();

    // Todos los campos son requeridos

    if(userId.length === 0 ) {
        throw new ValidationError("Debe contener un userId")
    }

    if(title.length === 0 ) {
        throw new ValidationError("Debe contener un title")
    }

    // Todos los campos de cadena de caracteres deben tener entre 10 y 50 caracteres

    if (title.length < 10 ) {
        throw new ValidationError("Debe ser mayor de 10 caracteres")
    }else if (title.length > 50 ){
        throw new ValidationError("Debe ser menor de 50 caracteres")
    }

}

module.exports = {
    savealbum
} 