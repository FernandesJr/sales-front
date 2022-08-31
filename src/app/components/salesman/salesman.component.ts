import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.scss']
})
export class SalesmanComponent implements OnInit {

  public menu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public showMenu():void {
    this.menu = !this.menu;
  }

}
