import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario, IResponseUsuario } from './usuarios.class';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "http://demo9608387.mockable.io/";

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<IResponseUsuario>{
    var result = new Array<Usuario>();
    result.push(new Usuario(1,"Marcus"));
    result.push(new Usuario(2,"Vinicius"));
    result.push(new Usuario(3,"Carreira"));

    var response = {
      total:4,
      results:result
    };

    return of(response);    
  }

  search(name: string): Observable<IResponseUsuario>{

    let urlGet = `${ this.url }usuarios`;
    //let requestPromisse = this.httpClient.get<IResponseUsuario>(urlGet);
    let requestPromisse = this.getAllData();
    return requestPromisse.pipe(
      tap((response: IResponseUsuario) => {
        response.results = response.results
          .map(user => new Usuario(user.id, user.name))
          .filter(user => user.name.includes(name))
          ;

        return response;
      })
      );

  }


}
