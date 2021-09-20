
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const clientApi = require('./components/clients/api')
const sessionApi = require('./components/sessions/api')
const calendarApi = require('./components/calendar/api')
app.use(bodyParser.json())
app.use('/api/client', clientApi)
app.use('/api/session', sessionApi)
app.use('/api/calendar', calendarApi)

app.get('/', (req, res) => {
  res.send('Bem-vindo!')
})

module.exports = app