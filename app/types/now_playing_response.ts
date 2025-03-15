import type { MoviesResponse } from "./movies_response";

export type NowPlayingMoviesResponse = MoviesResponse & {
  dates: {
    maximum: string;
    minimum: string;
  };
};
