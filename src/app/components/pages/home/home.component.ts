import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdbService/tmdb.service';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(): void {
    this.router.navigate(['/films']);
  }
}
