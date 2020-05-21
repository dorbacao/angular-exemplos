import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario, IResponseUsuario } from './usuarios.class';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "http://demo9608387.mockable.io/";

  constructor(private httpClient: HttpClient) { }

  search(name: string): Observable<IResponseUsuario>{

    let urlGet = `${ this.url }usuarios`;
    let requestPromisse = this.httpClient.get<IResponseUsuario>(urlGet);
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
