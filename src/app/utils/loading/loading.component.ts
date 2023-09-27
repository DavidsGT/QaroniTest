import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() isVisible?:boolean;
  @Input() color:string = 'white';
  @Input() text:string = 'Procesando..';
  constructor() { }

  ngOnInit(): void {
  }

}
