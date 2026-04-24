import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';


@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})

export class CertificadoComponent implements OnInit {

  certificado: Certificado | undefined;
  id: string | null = null;
  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id === this.id);
      console.log('Certificado:', this.certificado);
    });
  }
}
