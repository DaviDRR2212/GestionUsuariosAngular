import { Injectable } from '@angular/core';

@Injectable()
export class PersistService {

  constructor() { }

  saveData(key:string='data', value:any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key:string='data'):Promise<any> {
    return Promise.resolve(JSON.parse(localStorage.getItem(key)));
  }
}
