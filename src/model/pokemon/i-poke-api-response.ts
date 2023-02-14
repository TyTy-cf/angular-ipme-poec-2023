import {IPokeApiResults} from "./i-poke-api-results";

export interface IPokeApiResponse {
  count: string;
  next: string;
  previous: string;
  results: IPokeApiResults[];
}
