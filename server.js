import { createServer } from "node:http";
const server = createServer((request, response) => {
  response.write("Olá mundo");
  return response.end();
});
server.listen(3333);
// Aqui já temos em pleno funcionamento um servidor HTTP rodando.
