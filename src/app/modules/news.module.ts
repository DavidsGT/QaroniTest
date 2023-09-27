import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../components/news/news.component';
import { NewDetailsComponent } from '../components/news/new-details/new-details.component';
import { AppMaterialModule } from '../app-material.module';
import { LoadingComponent } from '../utils/loading/loading.component';
import { ShareModule } from './share.module';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: ':id', component: NewDetailsComponent }
];

@NgModule({
  declarations: [
    NewsComponent,
    NewDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    AppMaterialModule
  ],
  exports: [RouterModule]
})
export class NewsModule { }
