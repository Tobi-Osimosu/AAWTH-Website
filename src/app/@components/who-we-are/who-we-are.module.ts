import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WhoWeAreComponent } from './who-we-are.component';
import { WhoWeAreLandingComponent } from './who-we-are-landing/who-we-are-landing.component';
import { WhoWeAreOurStoryComponent } from './who-we-are-our-story/who-we-are-our-story.component';
import { WhoWeAreWeBelieveComponent } from './who-we-are-we-believe/who-we-are-we-believe.component';
import { WhoWeAreWhyWeExistComponent } from './who-we-are-why-we-exist/who-we-are-why-we-exist.component';
import { WhoWeAreFoundersComponent } from './who-we-are-founders/who-we-are-founders.component';
import { WhoWeAreReachUsComponent } from './who-we-are-reach-us/who-we-are-reach-us.component';

const routes: Routes = [
  {
    path: '',
    component: WhoWeAreComponent,
  },
];

@NgModule({
  declarations: [WhoWeAreComponent, WhoWeAreLandingComponent, WhoWeAreOurStoryComponent, WhoWeAreWeBelieveComponent, WhoWeAreWhyWeExistComponent, WhoWeAreFoundersComponent, WhoWeAreReachUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoWeAreModule {}
