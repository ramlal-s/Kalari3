import { Component, OnInit,AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    margin:10,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    lazyLoad : false,
    navSpeed: 700,
    autoplayHoverPause: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 5000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
    
  }
 // public ngAfterViewInit(): void {window.dispatchEvent(new Event('resize'));}
 
}
