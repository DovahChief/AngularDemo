import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})


export class PersonaComponent implements OnInit {
  nombre: string;
  edad: number;
  clientes: any;
  range = Array.from(Array(100).keys());
  response: Cliente;
  data: Cliente;

  constructor(private api: ApicallService) { }

  ngOnInit() {

  }

  cambiaNombre() {
    this.nombre = 'Nombre cambiado';
  }

  onSubmit() {
    if ( this.nombre == null || this.edad == null) {
      console.log('---Forma incompleta---');
      return;
    }
    console.log('Submit -----');
    this.data = {
      id: null,
      nombre : this.nombre,
      edad : this.edad
    };

    this.api.postData('cliente', this.data)
    .subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => console.log('Exito' , data),
      error => console.log('Se presentó un error', error)
    );
  }
  getCliente () {
    this.api.getResource('cliente')
    .subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => this.clientes =  data,
      error => console.log('Se presentó un error', error)
    );
  }

}
