import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/models/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor(private rickAndMortyService: PersonajesService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getPersonajes().subscribe((personajes) => {
      this.personajes = personajes;
    });
  }

}
