import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/interfaces/films';
import { TmdbService } from 'src/app/services/tmdbService/tmdb.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  imgUrl = environment.imgUrl;
  randomFilm: any;
  filmsUpcoming!: any;
  filmsNowPlaying!: any;
  filmsTopRated!: any;
  filmsPopulars!: any;

  constructor(private tmdbService: TmdbService) {}
  ngOnInit(): void {
    this.tmdbService.upComingMovies().subscribe((data) => {
      let items: Films[] = data.results;
      items = items.map((d: Films) => {
        d.release_date! = new Date(d.release_date!).toLocaleDateString('pt-BR');
        return d;
      });

      console.log(items);
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
      this.randomFilm = items[0];
    });

    this.tmdbService.populars().subscribe((data) => {
      let items: Films[] = data.results;
      items = items.map((d: Films) => {
        d.release_date! = new Date(d.release_date!).toLocaleDateString('pt-BR');
        return d;
      });

      this.filmsPopulars = items;
    });
  }
}
