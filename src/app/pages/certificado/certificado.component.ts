import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { Router, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';


@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})

export class CertificadoComponent implements OnInit {

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    console.log('Certificados:', this.certificadoService.certificados);
  }
}
