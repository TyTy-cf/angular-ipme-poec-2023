import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../../service/http-client.service";
import {ICountry} from "../../model/i-country";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  title: string = 'Les pays du monde';
  countries: ICountry[] = [];
  continent: string | undefined;

  constructor(
    private httpService: HttpClientService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let url: string = 'https://restcountries.com/v3.1/all';
    this.activatedRoute.params.subscribe((params) => {
      if (params['continent']) {
        this.continent = params['continent'];
        url = 'https://restcountries.com/v3.1/region/' + this.continent;
        this.title = 'Les pays de ' + this.continent;
      }
    });
    this.httpService.getObject<ICountry[]>(url)
      .subscribe((response) => {
        this.countries = response;
      });
  }

}
