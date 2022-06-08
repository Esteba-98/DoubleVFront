import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonsModule } from './Persons/persons.module';
import { routingApplication, applicationRoutingProvider } from './app.routing';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuariosModule } from './Usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonsModule,
    routingApplication,
    HomeModule,
    HttpClientModule,
    FormsModule,
    UsuariosModule
  ],
  providers: [applicationRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
