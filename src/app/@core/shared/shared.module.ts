import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWhoWeServeComponent } from '../../@components/home/home-who-we-serve/home-who-we-serve.component';

const modules = [CommonModule];

const components = [HomeWhoWeServeComponent];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [modules, components],
})
export class SharedModule {}
