import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../../service/http-client.service";
import {ICountry} from "../../model/i-country";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  title: string = 'Les pays du monde';
  countries: ICountry[] = [];

  constructor(private httpService: HttpClientService) {
  }

  ngOnInit(): void {
    this.httpService.getObject<ICountry[]>('https://restcountries.com/v3.1/all')
      .subscribe((response) => {
        this.countries = response;
      });
  }

}
