export type MovieGenre = "ALL" | "DOCUMENTARY" | "COMEDY" | "HORROR" | "CRIME";

export type SortOption = "RELEASE DATE" | "TITLE";

export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  genres: MovieGenre[];
  posterUrl: string;
  runtime?: string;
  rating?: number;
  description?: string;
}
