import { Component } from '@angular/core';
import { Root2 } from '../list-paises/pais';
import { Observable } from 'rxjs';
import { PaisesServiceService } from '../paises-service.service';

@Component({
  selector: 'app-paises-visitados',
  templateUrl: './paises-visitados.component.html',
  styleUrl: './paises-visitados.component.scss'
})
export class PaisesVisitadosComponent {
  visitadosList$: Observable<Root2[]>;

  constructor(private visitados:PaisesServiceService){
    this.visitadosList$ = visitados.visitadoList.asObservable();
  }
}
