import {Inject, Injectable} from '@angular/core';
import {AbstractRepositoryService} from "./abstract-repository.service";
import {IGame} from "../../model/steamish/i-game";
import {HttpClient} from "@angular/common/http";
import {Publisher} from "../../model/steamish/publisher";

@Injectable({
  providedIn: 'root'
})
export class PublisherRepositoryService extends AbstractRepositoryService<Publisher> {

  constructor(
    protected override httpClient: HttpClient,
    @Inject('rawUrl') protected override rawUrl: string
  ) {
    super(httpClient, rawUrl, 'publisher');
  }

}
