import { queryClient } from "~/context/api_client_provider";
import type { MoviesResponse } from "~/types/movies_response";

class MoviesApiClient {
  private baseURL: string;
  private queryRequestOption: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      ["content-type"]: "application/json",
    },
  };

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetchMovies({
    cacheKey,
    endpoint,
    errMsgTitle,
  }: {
    cacheKey: string;
    endpoint: string;
    errMsgTitle: string;
  }) {
    let movieResponseData: MoviesResponse | Error = new Error(
      `Error loading ${errMsgTitle} movies`
    );
    try {
      const response = await queryClient.fetchQuery<MoviesResponse, Error>({
        queryKey: [cacheKey],
        queryFn: async () => {
          const response = await fetch(
            this.baseURL + endpoint,
            this.queryRequestOption
          );
          if (!response.ok) {
            throw new Error(`Error loading ${errMsgTitle} movies`);
          }
          return await response.json();
        },
        staleTime: 1000 * 60 * 60 * 24, // 1 day
      });

      movieResponseData = response;
    } catch (error) {
      console.error(error);
      movieResponseData = new Error(errMsgTitle);
    }
    return movieResponseData;
  }
}

export default MoviesApiClient;
