import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Certificados } from 'src/app/models/certificados.interface';
import { CertificadoService } from 'src/app/services/certificado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  cert: Certificados[] = [];
  paginaActual = 1; // Página actual
  elementosPorPagina = 8;

  constructor(
    private datosService: DatosService,
    private CertificadoService: CertificadoService
  ) {}

  // ... (resto de tu código)
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas()) {
      this.paginaActual++;
    }
  }

  totalPaginas() {
    return Math.ceil(this.cert.length / this.elementosPorPagina);
  }





  ngOnInit(): void {
    this.datosService.getCertificados().subscribe((data) => {
      console.log(data);
      this.cert = data;
    });
  }

  confirmacion(id: number) {
    Swal.fire({
      title: '¿Estás seguro de desactivar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Actualiza la fuente de datos (cert) en el componente
        const certificadoIndex = this.cert.findIndex((cert) => cert.id === id);
        if (certificadoIndex !== -1) {
          this.cert.splice(certificadoIndex, 1); // Elimina el elemento de la matriz (cambiar a marcar como desactivado según sea necesario)
          
          // También puedes llamar a eliminarCertificado si es necesario
          // this.eliminarCertificado(id);
  
          Swal.fire(
            'Listo',
            'Certificado desactivado',
            'success'
          );
        }
      }
    });
  }
  
  
  eliminarCertificado(id: number) {
    // Obtén el certificado que deseas actualizar
    const certificado = this.cert.find((cert) => cert.id === id);
    const fecha = new Date();

    Swal.fire('¿Esta seguro que desea desactivar?', '', );
    

    // Obtiene el año, mes y día de la fecha
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 al mes porque en JavaScript los meses comienzan desde 0
    const day = fecha.getDate().toString().padStart(2, '0');

    // Formatea la fecha en el formato 'YYYY-MM-DD'
    const fechaMySQL = `${year}-${month}-${day}`;

    if (certificado) {
      // Actualiza el estado y la fecha_modificación como desees
      certificado.estado = 0; // Actualiza el estado
      certificado.fecha_modificacion = fechaMySQL; // Actualiza la fecha de modificación

      // Llama al servicio para actualizar el certificado
      this.CertificadoService.updateEstadoCertificado(
        certificado.id,
        certificado
      ).subscribe((data) => {
        // Realiza acciones adicionales si es necesario
        console.log(data);
      
        
      });
      
    }
    
  }

  
}


