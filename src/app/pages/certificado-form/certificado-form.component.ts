import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-botton/primary-button.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})

export class CertificadoFormComponent {

  constructor(private certificadoService: CertificadoService) { }

  certificado: Certificado = {
    nome: '',
    atividades: [],
    dataEmissao: '',
  } as Certificado;

  atividade: string = '';

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formValido(){
    return this.certificado.nome.length > 0 && this.certificado.atividades.length > 0;
  }

  adicionarAtividade(){
    if(this.atividade.length > 0){
      this.certificado.atividades.push(this.atividade);
      this.atividade = '';
    }
    this.atividade = '';
  }

  removerAtividade(index: number){
    this.certificado.atividades.splice(index, 1);
  }

  submit(){
    if(!this.formValido()){
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);

  }

  dataAtual(){
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}
