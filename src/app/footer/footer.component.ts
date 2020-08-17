import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public autor: any = {nombre : 'Edwin', apellido : 'Palacios'}; //Variable para interpolar|incrustrar en el template html

}
