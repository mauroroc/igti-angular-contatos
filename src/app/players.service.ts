import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Player {
    "id": number,
    "nome": string,
    "posicao": string
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Player[]>(`${urlBase}/players?_sort=nome`);
  }

  list(id: number) {
    return this.http.get<Player>(`${urlBase}/players/${id}`);
  }

  create(player: Player) {
    return this.http.post<Player>(`${urlBase}/players`, player);
  }

  update(player: Player) {
    return this.http.put<Player>(`${urlBase}/players/${player.id}`, player);
  }

  delete(id: number) {
    return this.http.delete<Player>(`${urlBase}/players/${id}`);
  }

}
