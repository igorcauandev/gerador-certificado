import { Component } from '@angular/core';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certficados',
  imports: [
    ItemCertificadoComponent,
    SecundaryButtonComponent,
    RouterLink
],
  templateUrl: './certficados.component.html',
  styleUrl: './certficados.component.css'
})
export class CertficadosComponent {

}
