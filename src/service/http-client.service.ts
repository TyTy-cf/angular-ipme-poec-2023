import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KaamelotQuote} from "../model/kaamelot-quote";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getKaamelotQuote(): Observable<KaamelotQuote> {
    return this.httpClient.get<KaamelotQuote>('https://kaamelott.reiter.tf/quote/random');
  }

  getObject<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

}
