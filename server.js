const app = require('./app')
const port = 3030

app.listen(port, () => {
  console.log(`Servidor ativo na porta ${port}`)
})