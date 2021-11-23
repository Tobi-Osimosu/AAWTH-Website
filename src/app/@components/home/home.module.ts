import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeLandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
