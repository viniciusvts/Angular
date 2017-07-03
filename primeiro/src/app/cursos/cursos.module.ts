import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent
    ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
