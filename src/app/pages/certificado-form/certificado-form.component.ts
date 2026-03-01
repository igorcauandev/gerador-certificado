import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-botton/primary-button.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})

export class CertificadoFormComponent {

}
