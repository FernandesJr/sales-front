import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.scss']
})
export class SalesmanComponent implements OnInit {

  public menu: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public settings(): void {
    this.router.navigate(['salesman/settings']);
  }

  public closeMenu(): void {
    this.menu = true;
  }

  public showMenu():void {
    this.menu = !this.menu;
  }

  public logout():void {
    this.router.navigate(['']);
  }

}
