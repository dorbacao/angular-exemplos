import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario, IResponseUsuario } from '../services/usuarios.class';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  
  usuariosFiltrados: Observable<IResponseUsuario>;
  formGroup: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private formBuild: FormBuilder

    ) {
    
    
  }

  ngOnInit(): void {

    //Cria um form group a partir de form builder
    this.formGroup = this.formBuild.group({
      userInput: null
    });

    this.usuariosFiltrados = this.formGroup.get('userInput')
      .valueChanges
      .pipe(debounceTime(300), switchMap(value => this.usuariosService.search(value)))
      ;
  }

  displayFn(usuario: Usuario) {
    if (usuario) { return usuario.name; }
  }

}
