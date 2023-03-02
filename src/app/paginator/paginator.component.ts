import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPokeApiResponse} from "../../model/pokemon/i-poke-api-response";
import {faArrowRight, faArrowLeft, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  faArrowRight: IconDefinition = faArrowRight;
  faArrowLeft: IconDefinition = faArrowLeft;

  @Input()
  iPokeApiResponse: IPokeApiResponse | undefined;

  @Output()
  urlToCall: EventEmitter<string> = new EventEmitter<string>();

}
