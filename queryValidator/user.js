const ValidationError = require('../core/exceptions')
const VALUES = ['post', 'albums']

const validate = ({ fields }) => {
  const params = fields.split(',')

  if (params.length === 0) {
    throw new ValidationError('Fields debe ser no vacio')
  }

  for (const param in params) {
    if (!VALUES.includes(param)) {
      throw new ValidationError('Fields debe ser [ post | albums ]')
    }
  }
}

module.exports = {
  validate
}
