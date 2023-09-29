import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/layouts/cards/cards.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmsComponent } from './components/pages/films/films.component';
import { FilmComponent } from './components/pages/film/film.component';
import { GenresComponent } from './components/layout/genres/genres.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    HomeComponent,
    FilmsComponent,
    FilmComponent,
    GenresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
