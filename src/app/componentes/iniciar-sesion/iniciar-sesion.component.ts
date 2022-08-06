import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group(
      {
        
      }
    )
  }

  ngOnInit(): void {
  }

}
