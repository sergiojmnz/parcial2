import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial2';
  r: any;
  h: any;
  resultado: number = 0;
  constructor(){ }
  formulaCilindro(){
    this.resultado = 3.14 * Math.pow(parseFloat(this.r),2) * parseFloat(this.h)   
  }
}