import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificados } from '../models/certificados.interface';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private apiUrl = 'http://localhost:3000/inconvenientes_certificados';

  constructor(private http: HttpClient) {}

  getCertificados(): Observable<Certificados[]> {
    return this.http.get<Certificados[]>(this.apiUrl);
  }
}
