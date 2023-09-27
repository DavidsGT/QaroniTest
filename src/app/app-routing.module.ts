import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppMaterialModule } from './app-material.module';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch : 'full'},
  { path: 'login', loadChildren: () => import('./modules/login.module').then(m => m.LoginModule) },
  { path: 'news', loadChildren: () => import('./modules/news.module').then(m => m.NewsModule) },
  { path: 'home',canActivate:[AuthGuard], loadChildren: () => import('./modules/home.module').then(m => m.HomeModule) },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    AppBootstrapModule,
    AppMaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
