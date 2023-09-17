import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'temClientEnd';
  value = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.router.events
      .subscribe(event => {
        window.scroll({
          top: 0,
          // behavior: 'smooth'
        });
      });
  }


}
