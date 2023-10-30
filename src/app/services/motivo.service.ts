import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motivo } from '../models/motivo.interface';


@Injectable({
  providedIn: 'root'
})
export class MotivoService {
  private apiUrl = 'http://localhost:3000/motivos_inconvenientes';
  private newURl = 'http://localhost:3000/inconvenientes_certificados/';



  constructor(private http: HttpClient) { }

  getMotivo(): Observable<Motivo[]> {
    return this.http.get<Motivo[]>(this.apiUrl);
  }


}