import { Component } from '@angular/core';
import { Root2 } from './pais';
import { PaisesDataService } from '../paises-data.service';
import { PaisesServiceService } from '../paises-service.service';

@Component({
  selector: 'app-list-paises',
  templateUrl: './list-paises.component.html',
  styleUrl: './list-paises.component.scss'
})
export class ListPaisesComponent {
  paises: Root2[] = [];
  yaVisitado: Root2[] = [];

  constructor(private paisesService: PaisesDataService, private visitados: PaisesServiceService){

  };

  ngOnInit(): void {
    this.paisesService.getAll().subscribe(result =>  this.paises = result);
    this.visitados.visitadoList.subscribe(visitados => this.yaVisitado = visitados);
  }
  addVisitados(pais: Root2): void {
    this.visitados.addToVisitados(pais);
  }
  isVisitado(pais: Root2): boolean {
    return this.yaVisitado.some(v => v.name.common === pais.name.common);
  }
}
