import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


interface Cliente {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})


export class PersonaComponent implements OnInit {
  nombre: string;
  correo: string;
  edad: number;
  clientes: any;
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
            .subscribe(response => {
              console.log(response);
              this.response = response;
            });
  }
  getCliente () {
    this.clientes =  this.api.getResource('cliente');
  }

}
