import { Component, OnInit } from '@angular/core';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

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
export class CertficadosComponent implements OnInit {

  certificadosList: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificadosList = this.certificadoService.certificados;
  }

}
