import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../../service/http-client.service";
import {IPokeApiResponse} from "../../model/pokemon/i-poke-api-response";
import {Pokemon} from "../../model/pokemon/pokemon";
import {IPokeApiPokemon} from "../../model/pokemon/i-poke-api-pokemon";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss']
})
export class PokemonIndexComponent implements OnInit {

  iPokeApiResponse: IPokeApiResponse|undefined;
  pokemons: Pokemon[] = [];

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(url: string = 'https://pokeapi.co/api/v2/pokemon/'): void {
    this.pokemons = [];
    this.httpClientService
      .getObject<IPokeApiResponse>(url)
      .subscribe((data) => {
        this.iPokeApiResponse = data;
        for (const result of data.results) {
          this.httpClientService
            .getObject<IPokeApiPokemon>(result.url)
            .subscribe((pokemon) => {
              this.pokemons.push(
                new Pokemon(
                  pokemon.id,
                  result.name,
                  pokemon.sprites.other.home.front_default,
                  pokemon.sprites.other.home.front_shiny
                )
              );
              this.pokemons.sort((a, b) => a.id - b.id);
            });
        }
      });
  }
}
