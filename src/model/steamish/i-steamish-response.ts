import {IGame} from "./i-game";

export interface ISteamishResponse<T> {
  itemsPerPage: number;
  page: number;
  total: number;
  totalPages: number;
  items: Array<T>;
}
