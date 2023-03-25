import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent {

  @Input() paises: ICountry[] = [];

}
