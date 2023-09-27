import { NgModule } from '@angular/core';
import { LoadingComponent } from '../utils/loading/loading.component';

@NgModule({
  declarations: [
    LoadingComponent,
    // AlphabetOnlyDirective
  ],
  exports: [LoadingComponent]
})
export class ShareModule { }
