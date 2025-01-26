import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-server',
  imports: [FormsModule, CommonModule],
  templateUrl: './server.component.html',
  styles: [`
    .fifth{
    background-color: blue;
    color: white;
    }
    `]
})
export class ServerComponent {
//  name = "well";
//  isEnabled = true;
//  status = "nope";
//  opacity = "checkbox";
//  changestatus = true;
//  typedValue="Nothing";
//  constructor(){
//   //setTimeout(() => {
//     this.isEnabled  = false;
//     this.opacity = "radio";
//   //}, 3000);
//  }
//  OnButtonClick(){
//   // console.log("status");
//   //this.status = "Sike";
//   this.changestatus?  this.status = "sike" : this.status = "Nope";
//   this.changestatus = !this.changestatus;
//  }
//  OnInput(event: Event){
//   this.typedValue = (<HTMLInputElement>event.target).value;
//  }
// username = "";
// disabled = true;
// number = 0;
// OnInput(event: Event){
//   this.username = (<HTMLInputElement>event.target).value
//   this.disabled  = false;
// }
// onButtonClick(){
//   this.username = "";
//   this.disabled = true;
// }
// random(){
//  this.number = Math.random();
//    return this.number > 0.5 ? 'green' : 'blue';
// }


showParagraph = true;
click :Date[] = [];
onButtonClick(){
  this.showParagraph = !this.showParagraph;
  this.click.push(new Date());
}
getIndex(Date: Date){
  return this.click.lastIndexOf(Date);
}

}
