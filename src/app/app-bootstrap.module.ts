import { NgModule} from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@NgModule({
  exports: [
    CollapseModule,
    ModalModule,
    BsDatepickerModule,
    TooltipModule
  ],
  imports:[
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class AppBootstrapModule {}