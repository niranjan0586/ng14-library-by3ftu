import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { Test2Module } from '@tools/mylibrary/package2';

@NgModule({
  declarations: [TestComponent],
  imports: [Test2Module],
  exports: [],
})
export class TestModule {}
