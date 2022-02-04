import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heores: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeEliminado: string = '';

  borrarHeroe () {
    console.log('Borrando...');
    this.heroeEliminado = this.heores.shift() || '';
  }
}
