import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { GraficoBarraComponent } from './componentes/grafico-barra/grafico-barra.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    BarraNavegacionComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    IniciarSesionComponent,
    GraficoBarraComponent,
    PortfolioComponent
        
  ],
  imports: [
    BrowserModule,    
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,    
    NgCircleProgressModule.forRoot({
      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showSubtitle: false,     
    }), AppRoutingModule,
      ReactiveFormsModule,
    
 
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
  
  
export class AppModule { }
