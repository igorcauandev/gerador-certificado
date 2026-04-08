import { Routes } from '@angular/router';
import { CertficadosComponent } from './pages/certficados/certficados.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';

export const routes: Routes = [
  {
    path: '',
    component: CertficadosComponent
  },
  {
    path: 'certificados',
    component: CertficadosComponent
  },
  {
    path: 'certificados/novo',
    component: CertificadoFormComponent
  },
  {
    path: 'certificado/:id',
    component: CertificadoComponent
  }
];
