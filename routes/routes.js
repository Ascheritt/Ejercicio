const express = require('express')
const app = express()

const API_VERSION = 'v1'

app.use(`/${API_VERSION}/user`, require('./user'))
app.use(`/${API_VERSION}/post`, require('./post'))
app.use(`/${API_VERSION}/albums`, require('./album'))
app.use(`/${API_VERSION}/comments`, require('./comment'))
app.use(`/${API_VERSION}/photos`, require('./photo'))
app.use(`/${API_VERSION}/todos`, require('./todo'))

module.exports = app
