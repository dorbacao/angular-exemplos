import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  nome: string;
  id: number;
  dataNascimento: string;
  telefone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome: 'Marcus',   dataNascimento: '18/06/1986', telefone: 'H'},
  {id: 1, nome: 'Vinicius', dataNascimento: '18/06/1986', telefone: 'H'},
  {id: 2, nome: 'Carreira', dataNascimento: '18/06/1986', telefone: 'He'},
  {id: 3, nome: 'Dorbação', dataNascimento: '18/06/1986', telefone: 'Li'},
  {id: 4, nome: 'Lucas',    dataNascimento: '18/06/1986', telefone: 'Be'},
  {id: 5, nome: 'José',     dataNascimento: '18/06/1986', telefone: 'B'},
  {id: 6, nome: 'Antônio',  dataNascimento: '18/06/1986', telefone: 'C'},
];

@Component({
  selector: 'app-colunas-dinamicas',
  templateUrl: './colunas-dinamicas.component.html',
  styleUrls: ['./colunas-dinamicas.component.css']
})
export class ColunasDinamicasComponent implements OnInit {

  combo: FormControl = new FormControl();
  opcoes: string[] =["nome", "telefone", "dataNascimento", "id"];
  colunasSelecionadas: string[] = this.opcoes.slice();
  constructor(){
  }
  
  onSelectChanged(event){
    this.colunasSelecionadas.splice(0);
    event.map(item=>this.colunasSelecionadas.push(item));
  }

  dataSource = ELEMENT_DATA;  
  title = 'primeiro-projeto do dorba';

  ngOnInit(): void {
  }

}
