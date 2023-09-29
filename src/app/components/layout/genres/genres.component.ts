import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements AfterViewInit {
  @Input() genreId!: number;
  @Input() genreName!: string;

  @ViewChild('circle') circle!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (this.genreId >= 1 && this.genreId <= 100) {
      this.circle.nativeElement.style.background = 'red';
    } else if (this.genreId >= 101 && this.genreId <= 150) {
      this.circle.nativeElement.style.background = '#52f';
    } else if (this.genreId >= 251 && this.genreId <= 300) {
      this.circle.nativeElement.style.background = '#0df';
    } else if (this.genreId >= 301 && this.genreId <= 350) {
      this.circle.nativeElement.style.background = '#0f7';
    } else if (this.genreId >= 351 && this.genreId <= 400) {
      this.circle.nativeElement.style.background = '#ff0';
    } else {
      this.circle.nativeElement.style.background = '#93a';
    }
  }
}
