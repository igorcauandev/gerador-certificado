import { Component } from '@angular/core';
import { CertificadoFormComponent } from '../certificado-form/certificado-form.component';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";

@Component({
  selector: 'app-certificado',
  imports: [CertificadoFormComponent, SecundaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})

export class CertificadoComponent {

}
