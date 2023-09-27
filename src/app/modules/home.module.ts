import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AppMaterialModule } from '../app-material.module';
import { ShareModule } from './share.module';

const routes: Routes = [
  { path: '', component: HomeComponent , children: [
    { path: '', redirectTo: '/home/groups', pathMatch : 'full'},
      { path: 'groups', loadChildren: () => import('../modules/groups.module').then(m => m.GroupsModule) },
      { path: 'persons', loadChildren: () => import('../modules/persons.module').then(m => m.PersonsModule) }
    ]
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    AppMaterialModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
