import { Injectable } from '@angular/core';
import { Cliente}  from './cliente';
import { CLIENTE } from './cliente.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators'

@Injectable(
  /*
  {
    providedIn: 'root'
  }*/
  
)
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTE); // convertimos con OF a un observable

    //  Forma 1: Haciendo un casting dado que .get devuelve un observable<any[]>
    // return this.http.get<Cliente[]>(this.urlEndPoint); 

    // Forma 2: mediante map, con el que se logra realizar el casting dentro de la promesa al tipo que deseamos, en este caso a la lista de clientes
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  createCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.post(this.urlEndPoint, cliente, {headers:this.httpHeaders}).pipe(
      map( response => response as Cliente)
    );
  }

  getCliente(id: number) : Observable<Cliente>{
    return this.http.get(`${this.urlEndPoint}/${id}`).pipe(
      map( (response) => response as Cliente )
    );
  }

  updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders}).pipe(
      map( response => response as Cliente)
    );
  }

  deleteCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
