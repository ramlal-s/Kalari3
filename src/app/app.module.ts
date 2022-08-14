import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { KalarichikitsaComponent } from './kalarichikitsa/kalarichikitsa.component';
import { KalaripatutrainingComponent } from './kalaripatuTraining/kalaripatutraining.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    HomeComponent,
    BranchesComponent,
    AchievementsComponent,
    ContactComponent,
    CarouselComponent,
    GalleryComponent,
    AboutComponent,
    KalarichikitsaComponent,
    KalaripatutrainingComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
