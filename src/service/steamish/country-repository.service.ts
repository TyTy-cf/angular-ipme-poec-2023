import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractRepositoryService} from "./abstract-repository.service";
import {ICountry} from "../../model/steamish/i-country";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryRepositoryService extends AbstractRepositoryService<ICountry> {

  constructor(
    protected override httpClient: HttpClient,
  ) {
    super(httpClient, environment.apiSteamIsh, 'country');
  }

}
