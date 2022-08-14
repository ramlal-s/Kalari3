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
        width: '600px',
        height: '400px',
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
        small: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        medium: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        big: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg',
        medium: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg',
        big: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg'    },
      {
        small: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg',
        medium: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg',
        big: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg'
      },{
        small: 'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg',
        medium: 'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg',
        big: 'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
        medium: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
        big: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg'
      }
    ];
  }

}
