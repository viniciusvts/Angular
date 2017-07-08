import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'guitarrilheiro.com';

  getValor(){
    return 1;
  }

  getBoolean(){
    return true;
  }

  getUrlImage():string{
    return "lorempixel.com/400/200/";
  }
  constructor() { }

  ngOnInit() {
  }

}
