import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public mensaje: string = "Mensaje de error 1";
  public color: string = "red";

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError( campo: string): boolean {
    return (this.miFormulario.get(campo)?.invalid || false) && this.miFormulario.controls[campo].touched;
  }

  cambiarNombre(){
    //this.mensaje = 'Mensaje de error 2';
    this.mensaje = Math.random().toString();
  }

  cambiarColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    //this.color = "green";
  }

}
