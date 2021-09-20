const {Router} = require("express")
const router = Router()

const calendarApiWelcome = (req, res) => {
  res.send('Bem-vindo - API CALENDAR!')
}

router
  .get('/', calendarApiWelcome)

  module.exports = router