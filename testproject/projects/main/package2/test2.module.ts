import { NgModule } from '@angular/core';
import { Test2Component } from './test2.component';
import { Test2Service } from './test2.service';

@NgModule({
  declarations: [Test2Component],
  imports: [],
  providers: [Test2Service],
  exports: [Test2Component],
})
export class Test2Module {}
