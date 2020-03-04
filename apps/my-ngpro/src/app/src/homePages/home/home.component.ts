import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'myworkspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  username: string;
  password: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      // In a real app: dispatch action to load the details here.
    });
    console.log(this.username);
  }

}
