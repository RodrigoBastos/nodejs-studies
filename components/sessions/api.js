const {Router} = require("express")
const router = Router()

const sessionApiWelcome = (req, res) => {
  res.send('Bem-vindo - API SESSION!')
}

router
  .get('/', sessionApiWelcome)

  module.exports = router