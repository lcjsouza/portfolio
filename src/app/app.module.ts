import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent,
    ExperienciasComponent,
    HabilidadesComponent,
    ContatosComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
