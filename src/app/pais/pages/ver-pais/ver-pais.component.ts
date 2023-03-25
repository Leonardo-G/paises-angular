import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: ICountry;

  constructor( 
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap( ({ id }): Observable<ICountry[]> => this.paisService.getPaisPorAlpha( id ) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais[0] )

      // .subscribe( ({ id }) => {
        
      //   this.paisService.getPaisPorAlpha( id as string )
      //     .subscribe( pais => {
      //       console.log( pais );
      //     })

      // } )
  }
}
