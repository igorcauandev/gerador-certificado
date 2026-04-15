import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-botton/primary-button.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButtonComponent, PrimaryButtonComponent, FormsModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})

export class CertificadoFormComponent {
  nome: string = '';

  atividade: string = '';

  list_atividades: string[] = [`Atividade 1`, `Atividade 2`, `Atividade 3`];
}
