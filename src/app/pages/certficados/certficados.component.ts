import { Component } from '@angular/core';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';

@Component({
  selector: 'app-certficados',
  imports: [
    SecundaryButtonComponent,
    ItemCertificadoComponent
  ],
  templateUrl: './certficados.component.html',
  styleUrl: './certficados.component.css'
})
export class CertficadosComponent {

}
