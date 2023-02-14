import {Inject, Injectable} from '@angular/core';
import {AbstractRepositoryService} from "./abstract-repository.service";
import {IGame} from "../../model/steamish/i-game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameRepositoryService extends AbstractRepositoryService<IGame> {

  constructor(
    protected override httpClient: HttpClient,
    @Inject('rawUrl') protected override rawUrl: string
  ) {
    super(httpClient, rawUrl, 'game');
  }

}
