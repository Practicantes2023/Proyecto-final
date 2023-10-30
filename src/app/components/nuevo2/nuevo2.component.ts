import { Component, OnInit } from '@angular/core';
import { MotivoService } from 'src/app/services/motivo.service';
import { Motivo } from 'src/app/models/motivo.interface';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CertificadoService } from 'src/app/services/certificado.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo2',
  templateUrl: './nuevo2.component.html',
  styleUrls: ['./nuevo2.component.css']
})
export class Nuevo2Component implements OnInit {

  motivos: Motivo[] = [];

  constructor(private motivo: MotivoService, private certificadoNuevo: CertificadoService) { }

  ngOnInit(): void {
    this.motivo.getMotivo().subscribe((data) => {
      console.log(data);
      this.motivos = data;
    });
  }
  datosForm = new FormGroup({
    id_motivo_inconveniente: new FormControl(''),
    nombre_asegurado: new FormControl(''),
    identidad: new FormControl(''),
    numero_certificado: new FormControl(''),
    observaciones: new FormControl('')

  })
  enviarDatos() {
    const formulario = this.datosForm.value;
    this.certificadoNuevo.postCertificado(formulario).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Sus datos han sido ingresados', '', 'success');
        console.log('Sus datos han sido ingresados');
      },
      (error) => {
        console.error('Error al insertar datos en el servidor:', error);
        Swal.fire('Error', 'Falto insertar uno de sus datos.', 'error');
      }
    );
  }

 
}
