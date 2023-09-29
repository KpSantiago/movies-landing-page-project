import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
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

  imgUrl = environment.imgUrl;
  year!: string;
  film: Films = {} as Films;
  eye = faEye;
  star = faStar;

  constructor(
    private tmdbService: TmdbService,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.acRoute.snapshot.paramMap.get('id'));
    this.tmdbService.getOneFilm(id).subscribe((data) => {
      let items: Films = data;

      items.release_date = items.release_date = new Date(
        items.release_date!
      ).toLocaleDateString();

      console.log(data);

      this.film = items;
      if (items) {
        this.votes(items);
      }
      this.year = items.release_date.split('/')[2];
    });
  }

  ngAfterViewInit(): void {}

  votes(film: Films) {
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
