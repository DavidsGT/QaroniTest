import { NgModule } from '@angular/core';
import { LoadingComponent } from '../utils/loading/loading.component';
import { AlphabetOnlyDirective } from '../validations/alphabet-only.directive';
import { UppercaseDirective } from '../validations/uppercase.directive';

@NgModule({
  declarations: [
    LoadingComponent,
    AlphabetOnlyDirective,
    UppercaseDirective
  ],
  exports: [LoadingComponent]
})
export class ShareModule { }
