import {Pais}from"./pais";
import {Departamento}from"./departamento";

export class Persona{
    idpersona!: number;
    nombres!: string;
    apellidos!: string;
    edad!: number;
    pais!:Pais;
    departamento!:Departamento;

}