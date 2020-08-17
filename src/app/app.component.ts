import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiendo Angular';
  curso:string = 'Angular y Spring';
  estudiante:string = 'Edwin Palacios';
}
