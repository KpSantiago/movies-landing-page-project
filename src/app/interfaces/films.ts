export interface Films {
  id: number;
  release_date: string;
  title: string;
  poster_path: string;
  adult: boolean;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  production_companies: [
    { id: number; logo_path: string; name: string; origin_country: string }
  ];
  genres: [{ id: number; name: string }];
  imdb_id: string;
}
