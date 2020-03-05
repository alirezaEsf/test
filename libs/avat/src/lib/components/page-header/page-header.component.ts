import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avt-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  titre: string;
  @Input()
  surtitre: string;

  constructor() { }

  ngOnInit() {
  }

}
