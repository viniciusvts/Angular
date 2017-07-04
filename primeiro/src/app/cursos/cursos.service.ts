import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  
  constructor() { }

  getCursos(){
    return [
    "Java Básico",
    "Java Intermediário",
    "Swift Básico",
    "Angular"
    ];
  }
}
