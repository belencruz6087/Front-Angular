import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Chart } from 'chart.js';

import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
   
    BarraNavegacionComponent
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
