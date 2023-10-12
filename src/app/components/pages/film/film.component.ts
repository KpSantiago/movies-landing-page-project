import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Films } from 'src/app/interfaces/films';
import { TmdbService } from 'src/app/services/tmdbService/tmdb.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit, AfterViewInit {
  @ViewChildren('star') starC!: QueryList<ElementRef>;
  @ViewChild('movie') movie!: ElementRef<HTMLElement>;

  imgUrl = environment.imgUrl;
  year!: string;
  film: Films = {} as Films;
  notError = true;
  eye = faEye;
  star = faStar;

  constructor(
    private tmdbService: TmdbService,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.acRoute.snapshot.paramMap.get('id'));
    this.tmdbService.getOneFilm(id).subscribe(
      (data) => {
        let items: Films = data;

        items.release_date = items.release_date = new Date(
          items.release_date!
        ).toLocaleDateString();

        this.film = items;
        if (items) {
          this.votes(items);
        }
        this.year = items.release_date.split('/')[2];
        this.moviebg(`${this.imgUrl}${this.film.backdrop_path}`);
      },
      (err) => {
        this.notError = false;
      }
    );
  }

  ngAfterViewInit(): void {}

  moviebg(url: string): void {
    this.movie.nativeElement.style.backgroundImage = `url(${url})`;
  }

  votes(film: Films) {
    if (window.document.querySelectorAll('.star') && film) {
      const vote_count = Math.round(film!.vote_average) / 2;

      for (let vote = 1; vote <= vote_count; vote++) {
        window.document.querySelectorAll('.star').forEach((i) => {
          if (i.className.split(' ')[0] == `star${vote}`) {
            i.classList.toggle('active');
          }
        });
      }
    }
  }
}
