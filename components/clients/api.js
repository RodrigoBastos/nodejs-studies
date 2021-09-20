const {Router} = require("express")
const router = Router()

const clientApiWelcome = (req, res) => {
  res.send('Bem-vindo - API CLIENT!')
}

router
  .get('/', clientApiWelcome)

  module.exports = router