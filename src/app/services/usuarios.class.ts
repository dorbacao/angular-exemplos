export class Usuario{
    constructor(public id:number, public name:string){
        
    }
}

export interface IResponseUsuario {
    total: number;
    results: Usuario[];
  }