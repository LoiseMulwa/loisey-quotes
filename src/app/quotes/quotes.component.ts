// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
// import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  // templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
  
})
export class QuotesComponent implements OnInit {

  quote: Quotes[] =[
    new Quotes( 1,"name","hardwork pays","Loise",new Date(2019,7,12),0,0),
    new Quotes(2,"name","Never give up","Mulwa",new Date(2019,7,12),0,0),
    new Quotes(3,"name","Work hard","Essy",new Date(2019,7,12),0,0)
  ]
  get myQuotes(){
  return this.quote.sort((a,b)=>{
    return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
  });
} 

quoteAdded (quotes:Quotes){
  let arraysize = this.quote.length;
  quotes.id = arraysize + 1;
  quotes.completeDate = new Date(quotes.completeDate)
  this.quote.push(quotes)
}

// quoteAdded(quotes: Quotes){
//   let arraysize = this.quote.length;
//   this.quote.id = arraysize+1;
//   quotes.completeDate = new Date(quotes.completeDate)
//   this.quote.push(quotes)
//    }


   quotedelete(isRead: boolean, index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quote.splice(index,1);
      }
      
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
