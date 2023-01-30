const ValidationError = require('../core/exceptions')

const savecomment = comment => {
  let { postId, name, email, body } = comment

  name = name.trim()
  email = email.trim()
  body = body.trim()

  if (postId.length === 0) {
    throw new ValidationError('Debe contener un name')
  }

  if (name.length === 0) {
    throw new ValidationError('Debe contener un name')
  }

  if (email.length === 0) {
    throw new ValidationError('Debe contener un email')
  }

  if (body.length === 0) {
    throw new ValidationError('Debe contener un phone')
  }

  // Todos los campos de cadena de caracteres deben tener entre 10 y 50 caracteres

  if (name.length < 100) {
    throw new ValidationError('Debe ser mayor de 100 caracteres')
  } else if (name.length > 500) {
    throw new ValidationError('Debe ser menor de 500 caracteres')
  }

  if (email.length < 20) {
    throw new ValidationError('Debe ser mayor de 100 caracteres')
  } else if (email.length > 100) {
    throw new ValidationError('Debe ser menor de 500 caracteres')
  }

  if (body.length < 100) {
    throw new ValidationError('Debe ser mayor de 100 caracteres')
  } else if (body.length > 500) {
    throw new ValidationError('Debe ser menor de 500 caracteres')
  }

  // El email debe tener formato adecuado y terminar solo en “.com” o “.cl”

  if (email.match('.cl') !== null) {
    throw new ValidationError('Los correos deben tener .cl')
  }
}

module.exports = {
  savecomment
}
