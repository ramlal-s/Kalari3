import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      { "imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
      {
        width: '800px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../assets/images/1.jpeg',
        medium: '../../assets/images/1.jpeg',
        big: '../../assets/images/1.jpeg'
      },
      {
        small: '../../assets/images/2.jpeg',
        medium: '../../assets/images/2.jpeg',
        big: '../../assets/images/2.jpeg'
      },
      {
        small: '../../assets/images/3.jpeg',
        medium: '../../assets/images/3.jpeg',
        big: '../../assets/images/3.jpeg'
      },
      {
        small: '../../assets/images/4.jpeg',
        medium: '../../assets/images/4.jpeg',
        big: '../../assets/images/4.jpeg'
      },
      {
        small: '../../assets/images/5.jpeg',
        medium: '../../assets/images/5.jpeg',
        big: '../../assets/images/5.jpeg'
      },
      {
        small: '../../assets/images/6.jpeg',
        medium: '../../assets/images/6.jpeg',
        big: '../../assets/images/6.jpeg'
      },
      {
        small: '../../assets/images/7.jpeg',
        medium: '../../assets/images/7.jpeg',
        big: '../../assets/images/7.jpeg'
      },
      {
        small: '../../assets/images/8.jpeg',
        medium: '../../assets/images/8.jpeg',
        big: '../../assets/images/8.jpeg'
      },
      {
        small: '../../assets/images/9.jpeg',
        medium: '../../assets/images/9.jpeg',
        big: '../../assets/images/9.jpeg'
      },
      {
        small: '../../assets/images/10.jpeg',
        medium: '../../assets/images/10.jpeg',
        big: '../../assets/images/10.jpeg'
      },
      {
        small: '../../assets/images/11.jpeg',
        medium: '../../assets/images/11.jpeg',
        big: '../../assets/images/11.jpeg'
      },
      {
        small: '../../assets/images/12.jpeg',
        medium: '../../assets/images/12.jpeg',
        big: '../../assets/images/12.jpeg'
      },
      {
        small: '../../assets/images/13.jpeg',
        medium: '../../assets/images/13.jpeg',
        big: '../../assets/images/13.jpeg'
      },
      {
        small: '../../assets/images/14.jpeg',
        medium: '../../assets/images/14.jpeg',
        big: '../../assets/images/14.jpeg'
      },
      {
        small: '../../assets/images/15.jpeg',
        medium: '../../assets/images/15.jpeg',
        big: '../../assets/images/15.jpeg'
      },
      {
        small: '../../assets/images/16.jpeg',
        medium: '../../assets/images/16.jpeg',
        big: '../../assets/images/16.jpeg'
      },
      {
        small: '../../assets/images/17.jpeg',
        medium: '../../assets/images/17.jpeg',
        big: '../../assets/images/17.jpeg'
      },
      {
        small: '../../assets/images/18.jpeg',
        medium: '../../assets/images/18.jpeg',
        big: '../../assets/images/18.jpeg'
      },
      {
        small: '../../assets/images/19.jpeg',
        medium: '../../assets/images/19.jpeg',
        big: '../../assets/images/19.jpeg'
      },
      {
        small: '../../assets/images/20.jpeg',
        medium: '../../assets/images/20.jpeg',
        big: '../../assets/images/20.jpeg'
      },
      {
        small: '../../assets/images/21.jpeg',
        medium: '../../assets/images/21.jpeg',
        big: '../../assets/images/21.jpeg'
      },
      {
        small: '../../assets/images/22.jpeg',
        medium: '../../assets/images/22.jpeg',
        big: '../../assets/images/22.jpeg'
      },
      {
        small: '../../assets/images/23.jpeg',
        medium: '../../assets/images/23.jpeg',
        big: '../../assets/images/23.jpeg'
      },
      {
        small: '../../assets/images/24.jpeg',
        medium: '../../assets/images/24.jpeg',
        big: '../../assets/images/24.jpeg'
      },
      {
        small: '../../assets/images/25.jpeg',
        medium: '../../assets/images/25.jpeg',
        big: '../../assets/images/25.jpeg'
      },
      {
        small: '../../assets/images/26.jpeg',
        medium: '../../assets/images/26.jpeg',
        big: '../../assets/images/26.jpeg'
      },
      {
        small: '../../assets/images/27.jpeg',
        medium: '../../assets/images/27.jpeg',
        big: '../../assets/images/27.jpeg'
      },
      {
        small: '../../assets/images/28.jpeg',
        medium: '../../assets/images/28.jpeg',
        big: '../../assets/images/28.jpeg'
      },
      {
        small: '../../assets/images/29.jpeg',
        medium: '../../assets/images/29.jpeg',
        big: '../../assets/images/29.jpeg'
      },
      {
        small: '../../assets/images/30.jpeg',
        medium: '../../assets/images/30.jpeg',
        big: '../../assets/images/30.jpeg'
      },{
        small: '../../assets/images/31.jpeg',
        medium: '../../assets/images/31.jpeg',
        big: '../../assets/images/31.jpeg'
      },{
        small: '../../assets/images/32.jpeg',
        medium: '../../assets/images/32.jpeg',
        big: '../../assets/images/32.jpeg'
      },{
        small: '../../assets/images/33.jpeg',
        medium: '../../assets/images/33.jpeg',
        big: '../../assets/images/33.jpeg'
      },{
        small: '../../assets/images/34.jpeg',
        medium: '../../assets/images/34.jpeg',
        big: '../../assets/images/34.jpeg'
      },{
        small: '../../assets/images/35.jpeg',
        medium: '../../assets/images/35.jpeg',
        big: '../../assets/images/35.jpeg'
      },{
        small: '../../assets/images/36.jpeg',
        medium: '../../assets/images/36.jpeg',
        big: '../../assets/images/36.jpeg'
      },{
        small: '../../assets/images/37.jpeg',
        medium: '../../assets/images/37.jpeg',
        big: '../../assets/images/37.jpeg'
      },{
        small: '../../assets/images/38.jpeg',
        medium: '../../assets/images/38.jpeg',
        big: '../../assets/images/38.jpeg'
      },{
        small: '../../assets/images/39.jpeg',
        medium: '../../assets/images/39.jpeg',
        big: '../../assets/images/39.jpeg'
      },{
        small: '../../assets/images/40.jpeg',
        medium: '../../assets/images/40.jpeg',
        big: '../../assets/images/40.jpeg'
      },
    ];
  }

}
