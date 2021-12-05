import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeWhyWeExistComponent } from './home-why-we-exist/home-why-we-exist.component';
import { HomeWhatWeDoComponent } from './home-what-we-do/home-what-we-do.component';
import { HomeTheEndGoalComponent } from './home-the-end-goal/home-the-end-goal.component';
import { HomeHowWeBehaveComponent } from './home-how-we-behave/home-how-we-behave.component';
import { HomeBrandPersonalityComponent } from './home-brand-personality/home-brand-personality.component';
import { HomeWhoWeAreComponent } from './home-who-we-are/home-who-we-are.component';
import { HomeWhoWeServeComponent } from './home-who-we-serve/home-who-we-serve.component';
import { HomeBlogPostComponent } from './home-blog-post/home-blog-post.component';
import { HomeNewsletterComponent } from './home-newsletter/home-newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeLandingComponent,
    HomeWhyWeExistComponent,
    HomeWhatWeDoComponent,
    HomeTheEndGoalComponent,
    HomeHowWeBehaveComponent,
    HomeBrandPersonalityComponent,
    HomeWhoWeAreComponent,
    HomeWhoWeServeComponent,
    HomeBlogPostComponent,
    HomeNewsletterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
