import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ViajeDTO } from './viaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ViajeServiceService {

  private urlBase = "http://localhost:8081/api/v1/SCV/listarViaticos?nombreMes=April"


  constructor(private clienteHttp: HttpClient) { }

  obtenerViaticosLista(): Observable<ViajeDTO[]>{
    return this.clienteHttp.get<ViajeDTO[]>(this.urlBase);
  }
  
}
