import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { Films } from 'src/app/interfaces/films';
import { TmdbService } from 'src/app/services/tmdbService/tmdb.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit, AfterViewInit {
  @ViewChild('svg') svg!: ElementRef<HTMLElement>;

  imgUrl = environment.imgUrl;
  randomFilm!: Films;
  filmsUpcoming!: Films[];
  filmsNowPlaying!: Films[];
  filmsTopRated!: Films[];
  filmsPopulars!: Films[];

  constructor(private tmdbService: TmdbService, private router: Router) {}
  ngOnInit(): void {
    this.tmdbService.upComingMovies().subscribe((data) => {
      let items: Films[] = data.results;
      items = items.map((d: Films) => {
        d.release_date! = new Date(d.release_date!).toLocaleDateString('pt-BR');
        return d;
      });

      this.filmsUpcoming = items;
    });

    this.tmdbService.nowPlaying().subscribe((data) => {
      let items: Films[] = data.results;
      items = items.map((d: Films) => {
        d.release_date! = new Date(d.release_date!).toLocaleDateString('pt-BR');
        return d;
      });

      this.filmsNowPlaying = items;
    });

    this.tmdbService.topRated().subscribe((data) => {
      let items: Films[] = data.results;
      items = items.map((d: Films) => {
        d.release_date! = new Date(d.release_date!).toLocaleDateString('pt-BR');
        return d;
      });

      this.filmsTopRated = items;
    });

    this.tmdbService.populars().subscribe((data) => {
      let items: Films[] = data.results;
      items = items.map((d: Films) => {
        d.release_date! = new Date(d.release_date!).toLocaleDateString('pt-BR');
        return d;
      });

      this.filmsPopulars = items;
    });

    this.tmdbService.randomFilm().subscribe((data) => {
      const randomFilm = Math.floor(Math.random() * Math.round(20 - 1 + 1));

      let items: Films[] = data.results;

      items = items.map((d: Films) => {
        d.release_date = new Date(d.release_date).toLocaleDateString('pt-BR');
        return d;
      });

      this.randomFilm = items[randomFilm];
    });
  }
  ngAfterViewInit(): void {}
  navigate(id: number) {
    this.router.navigate([`film/${id}`]);
  }
}
