import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header') header!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;

      if (scroll >= 40) {
        this.header.nativeElement.classList.add('active');
      } else {
        this.header.nativeElement.classList.remove('active');
      }
    });
  }
}
