export interface Films {
  id: number;
  release_date: string;
  title: string;
  poster_path: string;
  adult: boolean;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  genres: [{ id: number; name: string }];
}
