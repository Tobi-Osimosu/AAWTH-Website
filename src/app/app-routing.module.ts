import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'about-us',
  //   pathMatch: 'full',
  // },

  {
    path: '',
    loadChildren: () =>
      import('src/app/@components/home/home.module').then((m) => m.HomeModule),
  },

  // { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 65], // [x, y]
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
