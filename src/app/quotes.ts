export class Quotes {
    showInfo!: boolean;
  completeDate!: Date;
    constructor(public id:number,public name:string,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
        this.showInfo=false;
      }
    

}






// export class Quotes {
//     public showDescription: boolean;
//     id :number;
//     quote :string;
//     author :string;
//     name :string;
//     downvotes :number;
//     upvotes :number;
//     // completeDate: number;
  
    
//     constructor (id:number,quote:string,name:string,author:string,downvotes:number,upvotes:number){
//         this.id=id;
//         this.quote=quote;
//         this.downvotes=downvotes;
//         this.upvotes=upvotes;
//         this.author=author;
//         this.name=name;
//         // this.completeDate=completeDate;
//         this.showDescription=false;

//     }
// }
