import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Chart } from 'chart.js';

import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
   
    BarraNavegacionComponent,
        EncabezadoComponent,
        AcercaDeComponent,
        ExperienciaComponent,
        EducacionComponent,
        SkillsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
  
export class AppModule { }
