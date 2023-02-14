import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISteamishResponse} from "../../model/steamish/i-steamish-response";
import {sprintf} from "sprintf-js";

export abstract class AbstractRepositoryService<T> {

  protected constructor(
    protected httpClient: HttpClient,
    protected rawUrl: string,
    protected endPoint: string
  ) { }

  findAll(limit: number = 10, filter: string = ''): Observable<ISteamishResponse<T>> {
    const url: string = sprintf('%s%s?limit=%s&%s', this.rawUrl, this.endPoint, limit, filter);
    return this.httpClient.get<ISteamishResponse<T>>(url);
  }

  findOneBySlug(slug: string): Observable<T> {
    return this.httpClient.get<T>(sprintf('%s%s/%s', this.rawUrl, this.endPoint, slug));
  }

}
