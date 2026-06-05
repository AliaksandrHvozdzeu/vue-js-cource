import type { Movie } from "@/types/movie";

export const HERO_BACKGROUND_URL =
  "https://www.figma.com/api/mcp/asset/90f5a17e-0166-46c5-b929-94db13166416";

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Pulp Fiction",
    year: 1994,
    genre: "Action & Adventure",
    genres: ["ALL", "CRIME"],
    posterUrl:
      "https://www.figma.com/api/mcp/asset/f8d391bd-b83c-4998-ae10-fc4037feca6a",
    runtime: "2h 34min",
    rating: 8.9,
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    year: 2003,
    genre: "Drama, Biography, Music",
    genres: ["ALL", "DOCUMENTARY"],
    posterUrl:
      "https://www.figma.com/api/mcp/asset/b7d641d8-f916-4979-b4ae-968e92bb303f",
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    year: 2004,
    genre: "Oscar winning Movie",
    genres: ["ALL", "CRIME"],
    posterUrl:
      "https://www.figma.com/api/mcp/asset/58379b71-7207-4ef1-993e-fc463af7d339",
  },
  {
    id: "4",
    title: "Avengers: War of Infinity",
    year: 2004,
    genre: "Action & Adventure",
    genres: ["ALL", "COMEDY"],
    posterUrl:
      "https://www.figma.com/api/mcp/asset/44edec57-a43c-4d86-bab1-d829618ca5d1",
  },
  {
    id: "5",
    title: "Inception",
    year: 2003,
    genre: "Action & Adventure",
    genres: ["ALL", "HORROR"],
    posterUrl:
      "https://www.figma.com/api/mcp/asset/f2d4e052-1c99-42ae-a458-a5278e8ad0ce",
  },
  {
    id: "6",
    title: "Reservoir dogs",
    year: 1994,
    genre: "Oscar winning Movie",
    genres: ["ALL", "CRIME"],
    posterUrl:
      "https://www.figma.com/api/mcp/asset/e058a0cf-a25f-422c-8a0b-7ab9b0b9da68",
  },
];

export function getMovieById(id: string): Movie | undefined {
  return mockMovies.find((movie) => movie.id === id);
}
