import {Component, OnInit} from '@angular/core';
import {Publisher} from "../../../model/steamish/publisher";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {PublisherRepositoryService} from "../../../service/steamish/publisher-repository.service";

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.scss']
})
export class PublisherFormComponent implements OnInit {

  title: string = 'Nouvel éditeur';
  publisher: Publisher = new Publisher();
  formGroupPublisher!: FormGroup;

  constructor(private publisherRepository: PublisherRepositoryService) {
  }

  ngOnInit(): void {
    this.formGroupPublisher = new FormGroup({
      name: new FormControl(
        this.publisher.name,
        [
          Validators.required,
        ]
      ),
      website: new FormControl(
        this.publisher.website,
        [
          Validators.required,
          Validators.pattern('^(http|https)://(.*)')
        ]
      ),
      country: new FormControl(
        this.publisher.country.slug,
        [
          Validators.required,
        ]
      ),
    });
  }

  get name(): FormControl {
    return this.formGroupPublisher.get('name') as FormControl;
  }

  get website(): FormControl {
    return this.formGroupPublisher.get('website') as FormControl;
  }

  get country(): FormControl {
    return this.formGroupPublisher.get('country') as FormControl;
  }

  onSubmit(): void {
    if (this.formGroupPublisher.valid) {
      this.publisher.name = this.name.value;
      this.publisher.website = this.website.value.toLowerCase();
      this.publisher.country.slug = this.country.value;
      this.publisherRepository.save(this.publisher).subscribe((publisher) => {
        console.log(publisher);
      });
    } else {
      alert('Petit garneman qui essaie de traffiquer mon form !');
    }
  }
}
