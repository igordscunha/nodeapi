const app = require("./app");
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta: http://localhost:${port}`)
})