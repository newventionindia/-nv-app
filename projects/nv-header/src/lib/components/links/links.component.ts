import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nv-header-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  expenseClicked() {
    this.router.navigate(['', { outlets: {dynamicModules: 'expense'} }], { skipLocationChange: true });
  }

  invoiceClicked() {
    this.router.navigate(['', { outlets: {dynamicModules: 'invoice'} }], { skipLocationChange: true });
  }

}
