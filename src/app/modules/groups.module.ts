import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from '../components/groups/groups.component';
import { GroupDetailsComponent } from '../components/groups/group-details/group-details.component';
import { ShareModule } from './share.module';
import { AppMaterialModule } from '../app-material.module';

const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: ':id', component: GroupDetailsComponent }
];

@NgModule({
  declarations: [
    GroupsComponent,
    GroupDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppMaterialModule,
    ShareModule
  ],
  exports: [RouterModule]
})
export class GroupsModule { }
