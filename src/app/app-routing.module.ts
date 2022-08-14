import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KalarichikitsaComponent } from './kalarichikitsa/kalarichikitsa.component';
import { KalaripatutrainingComponent } from './kalaripatuTraining/kalaripatutraining.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'marmachikitsa', component: AchievementsComponent },
  { path: 'kalarichikitsa', component: KalarichikitsaComponent },
  { path: 'kalaritraining', component: KalaripatutrainingComponent },
  { path: 'contact', component: ContactComponent },
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
