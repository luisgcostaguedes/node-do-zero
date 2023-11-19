import { fastify } from "fastify";
import { databaseMemory } from "./database-memory.js";

const database = new databaseMemory();
const server = fastify();

//podemos usar o tradicional request e response; Mas por padrão no fastfy é usado REPLY
server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;
  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", (request) => {
  const search = request.query.search;
  const videos = database.list();
  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;
  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  database.delete(videoId);
  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
