import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';


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

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id === this.id);
    });
  }

  public downloadCertificadoAsPNG() {
    if (this.certificado == undefined){
      return;
    }

    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.png';
        link.click();
      }
    )
  }

}
