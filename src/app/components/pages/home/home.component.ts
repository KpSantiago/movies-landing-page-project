import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgs = [
    '../../../../../assets/tv.svg',
    '../../../../../assets/food.svg',
    '../../../../../assets/cine.svg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
