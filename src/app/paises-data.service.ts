import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root, Root2 } from './list-paises/pais';
import { Observable, map } from 'rxjs';

const URL = 'https://restcountries.com/v3.1/all';

@Injectable({
  providedIn: 'root'
})
export class PaisesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Root2[]> {
    return this.http.get<Root2[]>(URL).pipe(map(paises => paises.sort((a, b) => a.name.common.localeCompare(b.name.common)))
    );
  }

}
