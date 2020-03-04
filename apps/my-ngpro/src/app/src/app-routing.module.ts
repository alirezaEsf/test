import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './homePages/home/home.component';

const appRoutes: Route[] = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule) },
  { path: 'home/:username', component: HomeComponent }
  // {
  //   path: 'home', children: [
  //     // {
  //     //   path: 'dashboard',
  //     //   loadChildren: () => import('./dashboard/dashboard.module').then(d => d.DashboardModule)
  //     // },
  //     // {path: 'cif', loadChildren: () => import('./cif/cif.module').then(c => c.CifModule)},
  //     // {
  //     //   path: 'systemBasic',
  //     //   loadChildren: () => import('./system-basic-data/system-basic-data.module').then(s => s.SystemBasicDataModule)
  //     // },
  //   ]
  //
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule {
}
