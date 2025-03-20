import type { MoviesResponse } from "~/types/movies_response";

class MoviesApiClient {
  private baseURL: string;
  private queryRequestOption: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      ["content-type"]: "application/json",
    },
  };

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetchMovies({
    endpoint,
    errMsgTitle,
  }: {
    endpoint: string;
    errMsgTitle: string;
  }) {
    let movieResponseData: MoviesResponse | Error = new Error(
      `Error loading ${errMsgTitle} movies`
    );
    try {
      const response = await fetch(
        this.baseURL + endpoint,
        this.queryRequestOption
      );
      const responseJson = await response.json();

      if (!response.ok) {
        throw new Error(`Error loading ${errMsgTitle} movies`);
      }

      movieResponseData = responseJson;
    } catch (error) {
      console.error(error);
      movieResponseData = new Error(errMsgTitle);
    }
    return movieResponseData;
  }
}

export default MoviesApiClient;
