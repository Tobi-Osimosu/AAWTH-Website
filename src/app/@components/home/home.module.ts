import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeWhyWeExistComponent } from './home-why-we-exist/home-why-we-exist.component';
import { HomeWhatWeDoComponent } from './home-what-we-do/home-what-we-do.component';
import { HomeTheEndGoalComponent } from './home-the-end-goal/home-the-end-goal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, HomeLandingComponent, HomeWhyWeExistComponent, HomeWhatWeDoComponent, HomeTheEndGoalComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
