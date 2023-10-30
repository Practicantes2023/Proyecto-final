import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personaje } from '../models/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        // La respuesta de la API puede contener más información que solo los personajes.
        // Puedes mapear los datos relevantes a tu interfaz Personaje aquí.
        return response.results.map((personaje: any) => {
          return {
            name: personaje.name,
            image: personaje.image,
          };
        });
      })
    );  
  }
}
