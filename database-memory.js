import { randomUUID } from "node:crypto";

export class databaseMemory {
  #videos = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
      });
  }

  create(video) {
    const videoId = randomUUID();
    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}

//Tudo aqui foi uma implementação de um banco de dados em memória, ou seja toda vez que a aplicação é reiniciada os valores são perdidos. Uma vantagem de se fazer um banco de dados em memória é a velocidade de que os acessos e inserção dos dados é feita.
