import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
  r: any;
  h: any;
  resultado: number = 0;
  constructor() { }
  formulaCilindro(){
    this.resultado = 3.14 * Math.pow(parseFloat(this.r),2) * parseFloat(this.h)   
  }

  ngOnInit(): void {
  }

}
