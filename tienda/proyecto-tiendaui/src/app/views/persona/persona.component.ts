import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona!: Persona[];

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.listar().subscribe(data=>this.persona=data);
  }

}
