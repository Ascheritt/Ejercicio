const ValidationError = require('../core/exceptions')

const savephoto = photo => {
    let {albumId, title, url, thumbnailUrl} = photo;

    title = title.trim();
    url = url.trim();
    thumbnailUrl = thumbnailUrl.trim();

    // Todos los campos son requeridos

    if(albumId.length === 0 ) {
        throw new ValidationError("Debe contener un name")
    }

    if(title.length === 0 ) {
        throw new ValidationError("Debe contener un username")
    }

    if(url.length === 0 ) {
        throw new ValidationError("Debe contener un email")
    }

    if(thumbnailUrl.length === 0 ) {
        throw new ValidationError("Debe contener un phone")
    }

    // Todos los campos de cadena de caracteres deben tener entre 10 y 50 caracteres

    if (title.length < 10 ) {
        throw new ValidationError("Debe ser mayor de 10 caracteres")
    }else if (title.length > 50 ){
        throw new ValidationError("Debe ser menor de 50 caracteres")
    }

    if (url.length < 10 ) {
        throw new ValidationError("Debe ser mayor de 10 caracteres")
    }else if (url.length > 50 ){
        throw new ValidationError("Debe ser menor de 50 caracteres")
    }

    if (thumbnailUrl.length < 10 ) {
        throw new ValidationError("Debe ser mayor de 10 caracteres")
    }else if (thumbnailUrl.length > 50 ){
        throw new ValidationError("Debe ser menor de 50 caracteres")
    }

    // Las URL’s deben empezar con https://


}

module.exports = {
    savephoto
} 