import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'guitarrilheiro.com';
  valorInput: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }

  getBoolean(){
    return true;
  }

  getUrlImage():string{
    return "https://lorempixel.com/400/200/";
  }

  botaoClicado(){
    alert("O botão foi clicado!");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOver(){
    this.isMouseOver = true;
  }
  onMouseOut(){
    this.isMouseOver = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
