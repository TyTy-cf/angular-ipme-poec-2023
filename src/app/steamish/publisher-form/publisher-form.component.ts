import {Component, Inject, OnInit} from '@angular/core';
import {Publisher} from "../../../model/steamish/publisher";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PublisherRepositoryService} from "../../../service/steamish/publisher-repository.service";
import {catchError, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.scss']
})
export class PublisherFormComponent implements OnInit {

  title: string = 'Nouvel éditeur';
  publisher: Publisher = new Publisher();
  formGroupPublisher!: FormGroup;
  error: string|undefined;

  constructor(
    private publisherRepository: PublisherRepositoryService,
    private httpClient: HttpClient,
    @Inject('rawUrl') private rawUrl: string
  ) {
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

  isFieldOnError(key: string): boolean {
    const field: FormControl = this.formGroupPublisher.get(key) as FormControl;
    return (field.invalid && (field.touched || field.dirty));
  }

  onSubmit(): void {
    if (this.formGroupPublisher.valid) {
      this.publisher.name = this.name.value;
      this.publisher.website = this.website.value.toLowerCase();
      this.publisher.country.slug = this.country.value;
      console.log(this.publisher);
      this.publisherRepository
        .save(this.publisher)
        .pipe(
          catchError(err => {
            if (err instanceof HttpErrorResponse) {
              this.error = err.error.detail;
            }
            return throwError(err);
          })
        )
        .subscribe((publisher) => {
          console.log(publisher);
        });
    } else {
      alert('Petit garneman qui essaie de traffiquer mon form !');
    }
  }

  testLogin(): void {
    this.httpClient
      .post(
        this.rawUrl + 'login_check',
        {
          email: 'toto65@toto.fr',
          password: 'toto65'
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

