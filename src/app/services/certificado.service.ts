import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificados } from '../models/certificados.interface';




@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private apiUrl = ' http://localhost:3000/inconvenientes_certificados/';

  constructor(private http: HttpClient) { }

  postCertificado(nuevoCertificado: Certificados): Observable<Certificados> {
    return this.http.post<Certificados>(this.apiUrl, nuevoCertificado);
  }

  private apiUrl2 = ' http://localhost:3000/inconvenientes_certificados';

  // updateCertificado(updateCertificado: Certificados, id: string): Observable<Certificados> {
  //   return this.http.put<Certificados>(this.apiUrl2 + `${id}`, updateCertificado);
  // }

  updateEstadoCertificado(
    id: number,
    certificadoData: Certificados
  ): Observable<any> {
    const url = `${this.apiUrl2}/${id}`;
    return this.http.put(url, certificadoData);
  }
}




