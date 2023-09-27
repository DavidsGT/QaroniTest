import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from './share.module';
import { AppMaterialModule } from '../app-material.module';
import { PersonsComponent } from '../components/persons/persons.component';
import { PersonDetailsComponent } from '../components/persons/person-details/person-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyAlphabetDirective } from '../validations/alphabet-only.directive';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: ':accion', component: PersonDetailsComponent },
  { path: ':accion/:id', component: PersonDetailsComponent }
];

@NgModule({
  declarations: [
    PersonsComponent,
    PersonDetailsComponent,
    OnlyAlphabetDirective
  ],
  imports: [ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    AppMaterialModule,
    ShareModule
  ],
  exports: [RouterModule]
})
export class PersonsModule { }
