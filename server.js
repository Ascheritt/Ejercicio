/* eslint-disable no-console */
const express = require('express')
const app = express()
const routes = require('./routes/routes')

app.use(express.json())
app.use(routes)

app.get('/ping', (req, res) => {
  res.send('Service is running')
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Servidor corriendo ${PORT}`)
})
