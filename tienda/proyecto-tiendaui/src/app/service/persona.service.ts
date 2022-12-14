import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

private url : string = 'http://localhost:8080/persona'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Persona[]>(this.url);
  }
}
