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
        
        /*object-fit:"contain",*/
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
        small: '../../assets/images/guruju image.png',
        medium: '../../assets/images/guruji image.png',
        big: '../../assets/images/guruji image.png'
      },
      {
        small: '../../assets/images/img1.jpg',
        medium: '../../assets/images/img1.jpg',
        big: '../../assets/images/img1.jpg'
      },
      {
        small: '../../assets/images/img2.jpg',
        medium: '../../assets/images/img2.jpg',
        big: '../../assets/images/img2.jpg'
      },
      {
        small: '../../assets/images/img3.jpg',
        medium: '../../assets/images/img3.jpg',
        big: '../../assets/images/img3.jpg'
      },
      {
        small: '../../assets/images/img4.jpg',
        medium: '../../assets/images/img4.jpg',
        big: '../../assets/images/img4.jpg'
      },
      {
        small: '../../assets/images/img5.jpg',
        medium: '../../assets/images/img5.jpg',
        big: '../../assets/images/img5.jpg'
      },
      {
        small: '../../assets/images/img6.jpg',
        medium: '../../assets/images/img6.jpg',
        big: '../../assets/images/img6.jpg'
      },
      {
        small: '../../assets/images/img7.jpg',
        medium: '../../assets/images/img7.jpg',
        big: '../../assets/images/img7.jpg'
      },
      {
        small: '../../assets/images/img8.jpg',
        medium: '../../assets/images/img8.jpg',
        big: '../../assets/images/img8.jpg'
      },
      {
        small: '../../assets/images/img10.jpg',
        medium: '../../assets/images/img10.jpg',
        big: '../../assets/images/img10.jpg'
      },
      {
        small: '../../assets/images/img11.jpg',
        medium: '../../assets/images/img11.jpg',
        big: '../../assets/images/img11.jpg'
      },
      {
        small: '../../assets/images/img12.jpg',
        medium: '../../assets/images/img12.jpg',
        big: '../../assets/images/img12.jpg'
      },
      {
        small: '../../assets/images/img13.jpg',
        medium: '../../assets/images/img13.jpg',
        big: '../../assets/images/img13.jpg'
      },
      {
        small: '../../assets/images/img17.jpg',
        medium: '../../assets/images/img17.jpg',
        big: '../../assets/images/img17.jpg'
      },
      {
        small: '../../assets/images/img18.jpg',
        medium: '../../assets/images/img18.jpg',
        big: '../../assets/images/img18.jpg'
      },
      {
        small: '../../assets/images/img15.jpg',
        medium: '../../assets/images/img15.jpg',
        big: '../../assets/images/img15.jpg'
      },
      {
        small: '../../assets/images/22.jpeg',
        medium: '../../assets/images/22.jpeg',
        big: '../../assets/images/22.jpeg'
      },
      {
        small: '../../assets/images/9.jpeg',
        medium: '../../assets/images/9.jpeg',
        big: '../../assets/images/9.jpeg'
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
        small: '../../assets/images/1.jpeg',
        medium: '../../assets/images/1.jpeg',
        big: '../../assets/images/1.jpeg'
      },
      {
        small: '../../assets/images/18.jpeg',
        medium: '../../assets/images/18.jpeg',
        big: '../../assets/images/18.jpeg'
      },
      {
        small: '../../assets/images/2.jpeg',
        medium: '../../assets/images/2.jpeg',
        big: '../../assets/images/2.jpeg'
      },
      {
        small: '../../assets/images/20.jpeg',
        medium: '../../assets/images/20.jpeg',
        big: '../../assets/images/20.jpeg'
      },
      {
        small: '../../assets/images/3.jpeg',
        medium: '../../assets/images/3.jpeg',
        big: '../../assets/images/3.jpeg'
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
        small: '../../assets/images/8.jpeg',
        medium: '../../assets/images/8.jpeg',
        big: '../../assets/images/8.jpeg'
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
        small: '../../assets/images/19.jpeg',
        medium: '../../assets/images/19.jpeg',
        big: '../../assets/images/19.jpeg'
      },
      {
        small: '../../assets/images/21.jpeg',
        medium: '../../assets/images/21.jpeg',
        big: '../../assets/images/21.jpeg'
      },
      {
        small: '../../assets/images/7.jpeg',
        medium: '../../assets/images/7.jpeg',
        big: '../../assets/images/7.jpeg'
      },

      {
        small: '../../assets/images/13.jpeg',
        medium: '../../assets/images/13.jpeg',
        big: '../../assets/images/13.jpeg'
      },
      {
        small: '../../assets/images/4.jpeg',
        medium: '../../assets/images/4.jpeg',
        big: '../../assets/images/4.jpeg'
      },
      {
        small: '../../assets/images/10.jpeg',
        medium: '../../assets/images/10.jpeg',
        big: '../../assets/images/10.jpeg'
      },
      /*{
        small: '../../assets/images/23.JPG',
        medium: '../../assets/images/23.JPG',
        big: '../../assets/images/23.JPG'
      },
      {
        small: '../../assets/images/24.JPG',
        medium: '../../assets/images/24.JPG',
        big: '../../assets/images/24.JPG'
      },
      {
        small: '../../assets/images/25.JPG',
        medium: '../../assets/images/25.JPG',
        big: '../../assets/images/25.JPG'
      },
      {
        small: '../../assets/images/26.JPG',
        medium: '../../assets/images/26.JPG',
        big: '../../assets/images/26.JPG'
      },
      {
        small: '../../assets/images/27.JPG',
        medium: '../../assets/images/27.JPG',
        big: '../../assets/images/27.JPG'
      },
      {
        small: '../../assets/images/28.JPG',
        medium: '../../assets/images/28.JPG',
        big: '../../assets/images/28.JPG'
      },
      {
        small: '../../assets/images/29.JPG',
        medium: '../../assets/images/29.JPG',
        big: '../../assets/images/29.JPG'
      },
      {
        small: '../../assets/images/30.JPG',
        medium: '../../assets/images/30.JPG',
        big: '../../assets/images/30.JPG'
      },{
        small: '../../assets/images/31.JPG',
        medium: '../../assets/images/31.JPG',
        big: '../../assets/images/31.JPG'
      },{
        small: '../../assets/images/32.JPG',
        medium: '../../assets/images/32.JPG',
        big: '../../assets/images/32.JPG'
      },{
        small: '../../assets/images/33.JPG',
        medium: '../../assets/images/33.JPG',
        big: '../../assets/images/33.JPG'
      },{
        small: '../../assets/images/34.JPG',
        medium: '../../assets/images/34.JPG',
        big: '../../assets/images/34.JPG'
      },{
        small: '../../assets/images/35.JPG',
        medium: '../../assets/images/35.JPG',
        big: '../../assets/images/35.JPG'
      },{
        small: '../../assets/images/36.JPG',
        medium: '../../assets/images/36.JPG',
        big: '../../assets/images/36.JPG'
      },{
        small: '../../assets/images/37.JPG',
        medium: '../../assets/images/37.JPG',
        big: '../../assets/images/37.JPG'
      },{
        small: '../../assets/images/38.JPG',
        medium: '../../assets/images/38.JPG',
        big: '../../assets/images/38.JPG'
      },{
        small: '../../assets/images/39.JPG',
        medium: '../../assets/images/39.JPG',
        big: '../../assets/images/39.JPG'
      },{
        small: '../../assets/images/40.JPG',
        medium: '../../assets/images/40.JPG',
        big: '../../assets/images/40.JPG'
      },*/
    ];
  }

}
