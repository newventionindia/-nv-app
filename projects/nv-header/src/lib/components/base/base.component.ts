import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  title = 'New Vention India';

  constructor() { }

  ngOnInit() {
  }

}
