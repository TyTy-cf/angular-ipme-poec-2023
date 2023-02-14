import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../../service/http-client.service";
import {catchError, throwError} from "rxjs";
import {KaamelotQuote} from "../../model/kaamelot-quote";

@Component({
  selector: 'app-kaamelot-quote',
  templateUrl: './kaamelot-quote.component.html',
  styleUrls: ['./kaamelot-quote.component.scss']
})
export class KaamelotQuoteComponent implements OnInit {

  error: string|undefined;
  quote: string|undefined;

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit(): void {
    this.httpClientService.getObject<KaamelotQuote>('https://kaamelott.reiter.tf/quote/random')
    .pipe(
      catchError(err => {
        this.error = err.message;
        return throwError(err);
      })
    )
    .subscribe((data) => {
      setTimeout(() => {
        this.quote = data.citation;
      }, 5000);
    });
  }

}
