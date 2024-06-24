import { Injectable } from '@angular/core';
import { Root2 } from './list-paises/pais';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private _visitadoList: Root2[] = [];

  visitadoList: BehaviorSubject<Root2[]> = new BehaviorSubject(this._visitadoList);

  constructor() { }

  addToVisitados(pais: Root2) {
    let item: Root2 | undefined = this._visitadoList.find((v1) => v1.name.common === pais.name.common);
    if (!item) {
      this._visitadoList.push({...pais});
      this.visitadoList.next(this._visitadoList);
    }
  }
}
