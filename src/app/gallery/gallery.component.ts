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
    ];
  }

}
