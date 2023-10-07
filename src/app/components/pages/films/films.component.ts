import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
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
  @ViewChildren('star') starC!: QueryList<ElementRef>;
  @ViewChild('movie') movie!: ElementRef<HTMLElement>;

  imgUrl = environment.imgUrl;
  randomFilm: Films = {} as Films;
  randomFilmBg!: string;
  notError: boolean = true;
  filmsUpcoming!: Films[];
  filmsNowPlaying!: Films[];
  filmsTopRated!: Films[];
  filmsPopulars!: Films[];

  constructor(private tmdbService: TmdbService, private router: Router) {}
  ngOnInit(): void {
    this.tmdbService.upComingMovies().subscribe(
      (data) => {
        let items: Films[] = data.results;
        items = items.map((d: Films) => {
          d.release_date! = new Date(d.release_date!).toLocaleDateString(
            'pt-BR'
          );
          return d;
        });

        this.filmsUpcoming = items;
      },
      (error) => {
        this.notError = false;
      }
    );

    this.tmdbService.nowPlaying().subscribe(
      (data) => {
        let items: Films[] = data.results;
        items = items.map((d: Films) => {
          d.release_date! = new Date(d.release_date!).toLocaleDateString(
            'pt-BR'
          );
          return d;
        });

        this.filmsNowPlaying = items;
      },
      (error) => {
        this.notError = false;
      }
    );

    this.tmdbService.topRated().subscribe(
      (data) => {
        let items: Films[] = data.results;
        items = items.map((d: Films) => {
          d.release_date! = new Date(d.release_date!).toLocaleDateString(
            'pt-BR'
          );
          return d;
        });

        this.filmsTopRated = items;
      },
      (error) => {
        this.notError = false;
      }
    );

    this.tmdbService.populars().subscribe(
      (data) => {
        let items: Films[] = data.results;
        items = items.map((d: Films) => {
          d.release_date! = new Date(d.release_date!).toLocaleDateString(
            'pt-BR'
          );
          return d;
        });

        this.filmsPopulars = items;
      },
      (error) => {
        this.notError = false;
      }
    );

    this.tmdbService.randomFilm().subscribe(
      (data) => {
        const randomFilm = Math.floor(Math.random() * Math.round(20 - 1 + 1));

        let items: Films[] = data.results;

        items = items.map((d: Films) => {
          d.release_date = new Date(d.release_date).toLocaleDateString('pt-BR');
          return d;
        });
        this.randomFilm = items[randomFilm];
        this.votes(this.randomFilm);
        this.moviebg(`${this.imgUrl}${this.randomFilm.backdrop_path}`);
        console.log(this.randomFilm);
      },
      (error) => {
        this.notError = false;
      }
    );
  }
  ngAfterViewInit(): void {}

  moviebg(url: string) {
    this.movie.nativeElement.style.backgroundImage = `url(${url})`;
  }

  votes(film: Films) {
    if (this.starC) {
      const vote_count = Math.round(film!.vote_average) / 2;
      for (let vote = 1; vote <= vote_count; vote++) {
        this.starC.forEach((i: ElementRef) => {
          if (i.nativeElement.className.split(' ')[0] == `star${vote}`) {
            i.nativeElement.classList.toggle('active');
          }
        });
      }
    }
  }
  navigate(id: number) {
    this.router.navigate([`film/${id}`]);
  }
}
