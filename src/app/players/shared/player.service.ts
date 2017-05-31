import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player.model';

@Injectable()
export class PlayerService {

  private playersUrl = 'api/players'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersUrl)
      .toPromise()
      .then(response => response.json().data as Player[])
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Player)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    // TODO: add real error handling
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
