import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    let players = [
      { id: 11, name: 'Joshua'},
      { id: 12, name: 'Bob'},
      { id: 13, name: 'Davis'},
      { id: 14, name: 'Sandee'},
      { id: 15, name: 'Peter'},
      { id: 16, name: 'Nick'},
    ];
    return {players};
  }
}