import { randomUUID } from "node:crypto";

export class databaseMemory {
  #videos = new Map();

  list() {
    return this.#videos.values();
  }

  create(video) {
    const videoId = randomUUID();
    this.#videos.set(video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}

//Tudo aqui foi uma implementação de um banco de dados em memória, ou seja toda vez que a aplicação é reiniciada os valores são perdidos. Uma vantagem de se fazer um banco de dados em memória é a velocidade de que os acessos e inserção dos dados é feita.
