import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ABC = new Quotes(0,"","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quotes>();
  // quotesForm: any;
  addQuote(){
    this.add.emit(this.ABC);
    this.ABC = new Quotes(0,"","","",new Date(),0,0);

      }

  constructor() { }

  ngOnInit(): void {
  }

}
