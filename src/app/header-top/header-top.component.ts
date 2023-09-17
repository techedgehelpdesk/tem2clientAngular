import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit,DoCheck {
  myControl = new FormControl();
  options: string[] = ['Packaging tools', 'spare parts', 'products'];
  filteredOptions!: Observable<string[]>;
  hello!: boolean;
  pageScrollHeight:any;
  category_image_show = true;
  curr_user:any;
  only_header:boolean = false;

  constructor(private router: Router, private activated_route:ActivatedRoute) { }

  @HostListener('window:scroll', ['$event'])
  WindowScrollEvent(event: KeyboardEvent) {
    this.pageScrollHeight = window.scrollY;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  ngDoCheck(): void {
    if(this.router.url != '/'){
      this.category_image_show = false;
    }else{
      this.category_image_show = true;
    }
    if(this.router.url === '/cart' || this.router.url === '/order'){
      this.only_header = true;
    }else{
      this.only_header = false;
    }
    let userRAW = localStorage.getItem('curr_user')
    this.curr_user = userRAW ? JSON.parse(userRAW):null;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  login(){
    let user = {"name":"Pradipan Das"};
    localStorage.setItem('curr_user',JSON.stringify(user))
  }

  signout(){
    localStorage.removeItem('curr_user');
    this.router.navigateByUrl('/');
  }

}
