import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "etn";
  user:string = "guney";
  product:any= {id:1,productCode:1,productName:"Bardak"}
}
