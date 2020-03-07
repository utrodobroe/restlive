import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  homePage = {
  image: '/assets/images/The_world_50.jpg'
  }

  ngOnInit(): void {
  }

}
