import { Component, OnInit } from '@angular/core';
import { Test2Service } from '@tools/mylibrary/package2';

@Component({
  selector: 'lib-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor(private serv: Test2Service) {}

  ngOnInit(): void {}
}
