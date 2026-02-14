import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from './_components/primary-botton/primary-button.component';
import { SecundaryButtonComponent } from './_components/secundary-button/secundary-button.component';
import { ItemCertificadoComponent } from './_components/item-certificado/item-certificado.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    PrimaryButtonComponent, 
    SecundaryButtonComponent,
    ItemCertificadoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
