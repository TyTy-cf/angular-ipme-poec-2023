import { Component } from '@angular/core';
import {Publisher} from "../../../model/steamish/publisher";

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form-t-d.component.html',
  styleUrls: ['./publisher-form-t-d.component.scss']
})
export class PublisherFormTDComponent {

  publisher: Publisher = new Publisher();
  title: string = 'Nouvel éditeur';

  constructor() {
    // this.publisher.name = "J'ai déjà un nom moi !"
  }

  onSubmit(): void {
    console.log("Editeur dans le submit : ");
    console.log(this.publisher);
  }
}
