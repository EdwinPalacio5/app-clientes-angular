import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent{

  listaCurso: string[]  = ['Typescript', 'Javascript', 'PHP', 'Java SE', 'Spring', 'CSS', 'HTML'];

  enable: boolean = false;
  
  setEnable():void{
    this.enable = (this.enable)? false: true;
  }

}
