import { fastify } from "fastify";
import { databaseMemory } from "./database-memory.js";

const database = new databaseMemory();
const server = fastify();

//podemos usar o tradicional request e response; Mas por padrão no fastfy é usado REPLY
server.post("/videos", (request, reply) => {
  database.create({
    title: "Video 01",
    description: "Este é o vídeo 01",
    duration: 100,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  return "Hello World";
});

server.put("/videos/:id", () => {
  return "Hello World";
});

server.delete("/videos/:id", () => {
  return "Hello World";
});

server.listen({
  port: 3333,
});
