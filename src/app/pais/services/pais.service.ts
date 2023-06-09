import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICountry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = "https://restcountries.com/v3.1"

  constructor( private http: HttpClient ) {

  }

  buscarPais( termino: string ): Observable<ICountry[]>{

    const url = `${ this._apiUrl }/name/${ termino }`

    return this.http.get<ICountry[]>( url );
  }

  buscarCapital( termino: string ): Observable<ICountry[]> {
    
    const url = `${ this._apiUrl }/capital/${ termino }`
    return this.http.get<ICountry[]>( url );
  }

  getPaisPorAlpha( id: string ): Observable<ICountry[]> {
    
    const url = `${ this._apiUrl }/alpha/${ id }`
    return this.http.get<ICountry[]>( url );
  }

  buscarRegion( region: string ): Observable<ICountry[]> {
    
    const url = `${ this._apiUrl }/region/${ region }`
    return this.http.get<ICountry[]>( url );
  }

}
