import { Component, OnInit } from '@angular/core';
import { Certificados } from 'src/app/models/certificados.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
})
export class NuevoComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
  
  }
  // cert: Certificados[] = [
  //   {
  //     nombre_asegurado: 'Dany Ariel Rodriguez Perez',
  //     no_identidad: '0707-1999-00080',
  //     no_certificado: '3854451',
  //     observacion: 'Solamente tiene 1 Cotizacion / Art.80',
  //   },
  //   {
  //     nombre_asegurado: 'Erick Ramon Paz Elvir',
  //     no_identidad: '0801-1985-23862',
  //     no_certificado: '4044191',
  //     observacion: 'Accidente de Trabajo',
  //   },
  //   {
  //     nombre_asegurado: 'Francsico Yovanny Canales Casco',
  //     no_identidad: '0801-1982-04137',
  //     no_certificado: '3389835',
  //     observacion: 'Art74.4 / Consumo de Drogas',
  //   },
  //   {
  //     nombre_asegurado: 'Freddy Diaz',
  //     no_identidad: '0801-1980-17050',
  //     no_certificado: '3986310',
  //     observacion: 'Escalafon de Maestros.',
  //   },
  //   {
  //     nombre_asegurado: 'Hector Alfredo Lanza',
  //     no_identidad: '0801-1964-03470',
  //     no_certificado: '3985731',
  //     observacion: 'Art.4 / No estaba activo laborando.',
  //   },
  //   {
  //     nombre_asegurado: 'Henry Jose Escoto Rodriguez',
  //     no_identidad: '0801-1999-00633',
  //     no_certificado: '4150964',
  //     observacion: 'Accidente de Trabajo',
  //   },
  //   {
  //     nombre_asegurado: 'Jose Alejandro Oliva',
  //     no_identidad: '0703-1974-00995',
  //     no_certificado: 'No.34292',
  //     observacion: 'Prescrita.',
  //   },
  //   {
  //     nombre_asegurado: 'Jose Enrique Salina Matute',
  //     no_identidad: '1501-1963-00898',
  //     no_certificado: '128735 / 4068210',
  //     observacion: 'Falta la primera incapacidad / Prorrogas',
  //   },
  //   {
  //     nombre_asegurado: 'Jose Narciza Galo Sosa',
  //     no_identidad: '0801-1983-11952',
  //     no_certificado: 'F',
  //     observacion: 'Art.112',
  //   },
  //   {
  //     nombre_asegurado: 'Keydi Gabriela Osorio Linarez',
  //     no_identidad: '0801-1993-02128',
  //     no_certificado: '3871895',
  //     observacion: 'Incapacidad a nombre de la Secretaria de Salud.',
  //   },
  //   {
  //     nombre_asegurado: 'Melissa Carolina Andino Castillo',
  //     no_identidad: '0801-1995-21796',
  //     no_certificado: '3853890',
  //     observacion: 'Prescrita.',
  //   },
  //   {
  //     nombre_asegurado: 'Ricardo Melendez Berrios',
  //     no_identidad: '3804-1985-00353',
  //     no_certificado: '3866884',
  //     observacion: 'Secretaria de Educacion',
  //   },
  //   {
  //     nombre_asegurado: 'Sagrario de Lourdes Montano',
  //     no_identidad: '0801-1970-08875',
  //     no_certificado: '3873744',
  //     observacion: 'Secretaria de Educacion',
  //   },
  //   {
  //     nombre_asegurado: 'Wendy Alejandra Sevilla Cuvas',
  //     no_identidad: '0801-1994-02445',
  //     no_certificado: '3367556',
  //     observacion: 'Memorandum / Entro extemporanea al IHSS.',
  //   },
  //   {
  //     nombre_asegurado: 'Ana Celeste Caceres Borjas',
  //     no_identidad: '0801-1997-24565',
  //     no_certificado: '3873382',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Belkis Janeth Maldonado Lezama',
  //     no_identidad: '0801-1988-20544',
  //     no_certificado: '3986531',
  //     observacion: 'Mora ',
  //   },
  //   {
  //     nombre_asegurado: 'Elinson Ricardo Gomez Galvez',
  //     no_identidad: '0801-1999-03622',
  //     no_certificado: '4150940',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Fany Carolina Valerio Morales',
  //     no_identidad: '0801-1986-03435',
  //     no_certificado: '4043366',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Josselyn Maribel Salgado Rivera',
  //     no_identidad: '0801-1991-09826',
  //     no_certificado: '127507',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Leonel Wilman Mondragon',
  //     no_identidad: '0605-1974-00126',
  //     no_certificado: '3853792',
  //     observacion: 'Mora / Prescrita.',
  //   },
  //   {
  //     nombre_asegurado: 'Melissa Maria Discua Buezo',
  //     no_identidad: '0301-1982-01388',
  //     no_certificado: '3871363',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Nereida Nohemi Gonzalez Lezama',
  //     no_identidad: '0801-1988-16219',
  //     no_certificado: '4151027',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Oscar Omar Barrientos Melendez',
  //     no_identidad: '0801-1984-18551',
  //     no_certificado: '4151086',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Raul Montecinos Rivera',
  //     no_identidad: '0801-1975-07809',
  //     no_certificado: '4043318',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Selvin Xavier Caceres Avila',
  //     no_identidad: '0814-1990-00318',
  //     no_certificado: '3986302',
  //     observacion: 'Mora',
  //   },
  //   {
  //     nombre_asegurado: 'Adalila Amaya Orellana',
  //     no_identidad: '1302-1991-00053',
  //     no_certificado: '3002164',
  //     observacion: 'No ha presentado incapacidad Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Ana Ruth Casto Lopez',
  //     no_identidad: '0801-1993-17101',
  //     no_certificado: '3871803',
  //     observacion: 'Art.45 (No tiene las 10 cotizaciones)',
  //   },
  //   {
  //     nombre_asegurado: 'Andrea Berenice Rodriguez Castro',
  //     no_identidad: '0801-1995-08207',
  //     no_certificado: '3873889',
  //     observacion: 'No tiene las 10 Cotizaciones / Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Andrea Rene Handal Suarez',
  //     no_identidad: '0801-1990-03467',
  //     no_certificado: '3866820',
  //     observacion: 'No tiene las 10 Cotizaciones.',
  //   },
  //   {
  //     nombre_asegurado: 'Angie Lisbeth Rodriguez',
  //     no_identidad: '0801-1997-06492',
  //     no_certificado: '3871376',
  //     observacion: 'Art.45 (No tiene las 10 cotizaciones)',
  //   },
  //   {
  //     nombre_asegurado: 'Enid Arlet Sosa Fonseca',
  //     no_identidad: '0801-2002-17924',
  //     no_certificado: '4068176',
  //     observacion: 'Art.45 (No tiene las 10 cotizaciones)',
  //   },
  //   {
  //     nombre_asegurado: 'Enma Dayanira Andino Machado',
  //     no_identidad: '0306-1993-00802',
  //     no_certificado: '3126822',
  //     observacion: 'Fecha de parto Incorrecta / Prescrita.',
  //   },
  //   {
  //     nombre_asegurado: 'Fernanda Maria Erazo Soto',
  //     no_identidad: '0801-2001-11954',
  //     no_certificado: '4142329',
  //     observacion: 'No tiene las 10 Cotizaciones.',
  //   },
  //   {
  //     nombre_asegurado: 'Keydy Solonge Amaya Ordoñez',
  //     no_identidad: '0801-1984-18010',
  //     no_certificado: '4127828',
  //     observacion: 'No ha presentado incapacidad Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Krissel Yameli Andino',
  //     no_identidad: '0801-1988-01869',
  //     no_certificado: '3377515',
  //     observacion: 'No tiene las 10 Cotizaciones.',
  //   },
  //   {
  //     nombre_asegurado: 'Lesbia Gabriela Garcia Garcia',
  //     no_identidad: '0801-1993-05485',
  //     no_certificado: '2204772',
  //     observacion: 'No ha presentado incapacidad Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Mahli Vanessa Caceres Murillo',
  //     no_identidad: '0309-1982-00091',
  //     no_certificado: '127532',
  //     observacion: 'No ha presentado incapacidad Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Maria Jose Pagoaga Portilla',
  //     no_identidad: '0801-1995-17569',
  //     no_certificado: '2340820',
  //     observacion: 'No tiene las 10 Cotizaciones.',
  //   },
  //   {
  //     nombre_asegurado: 'Sendi Jasmin Aleman Ramos',
  //     no_identidad: '0801-1991-02366',
  //     no_certificado: '3871856',
  //     observacion: 'No ha presentado incapacidad Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Yesica Nicol Hernandez Cruz',
  //     no_identidad: '0801-2004-04758',
  //     no_certificado: '3871530',
  //     observacion: 'No ha presentado incapacidad Pre-Natal',
  //   },
  //   {
  //     nombre_asegurado: 'Yessenia Melissa Espinal Aguilar',
  //     no_identidad: '0714-1984-00001',
  //     no_certificado: '398535',
  //     observacion: 'Art.45 (No tiene las 10 cotizaciones)',
  //   },
  //   {
  //     nombre_asegurado: 'Ana Margarita Garcia Alvarenga',
  //     no_identidad: '0801-1990-06803',
  //     no_certificado: '4011885',
  //     observacion: 'Art.39 / Refrendo Post-Natal Extemporaneo',
  //   },
  //   {
  //     nombre_asegurado: 'Christhian Moises Elvir Villalovos',
  //     no_identidad: '0826-1998-00277',
  //     no_certificado: '2040396',
  //     observacion: 'Art58.3 / Refrendo Extemporaneo',
  //   },
  //   {
  //     nombre_asegurado: 'Claudia Gabriela Irula Zuniga',
  //     no_identidad: '0801-1985-21191',
  //     no_certificado: '127533',
  //     observacion: 'Art.39 / Refrendo Post-Natal Extemporaneo',
  //   },
  //   {
  //     nombre_asegurado: 'Dubila Seltzerly Rodriguez Duron',
  //     no_identidad: '0801-1997-08837',
  //     no_certificado: '2676973',
  //     observacion: 'Art.59',
  //   },
  //   {
  //     nombre_asegurado: 'Isis Rosibel Palencia Flores',
  //     no_identidad: '0801-2000-04013',
  //     no_certificado: '4127814',
  //     observacion: 'Art.58 / Refrendo Extemporaneo.',
  //   },
  //   {
  //     nombre_asegurado: 'Karla Patricia Guillen Salinas',
  //     no_identidad: '0801-1987-04354',
  //     no_certificado: '3871287',
  //     observacion: 'Art.39 / Refrendo Post-Natal Extemporaneo',
  //   },
  //   {
  //     nombre_asegurado: 'Lynda Rocio Alvarado Cruz',
  //     no_identidad: '0801-1996-21877',
  //     no_certificado: '3368895 / 3367258',
  //     observacion: 'Art. 59',
  //   },
  //   {
  //     nombre_asegurado: 'Nidia Loany Robledo Sanchez',
  //     no_identidad: '0201-1996-00224',
  //     no_certificado: '81189',
  //     observacion: 'Sin derecho, declarado en refrendo.',
  //   },
  //   {
  //     nombre_asegurado: 'Rafael Eduardo Chavez Aguilar',
  //     no_identidad: '0501-1951-02489',
  //     no_certificado: '3371022',
  //     observacion: 'Art.58.3 / Refrendo Extemporaneo.',
  //   },
  //   {
  //     nombre_asegurado: 'Yesica Patricia Avila Lopez',
  //     no_identidad: '1709-1989-00239',
  //     no_certificado: '2381914',
  //     observacion: 'Art.39 / Refrendo Post-Natal Extemporaneo',
  //   },
  // ];
  
}
