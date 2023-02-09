import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  private _title: string = 'Angular Jour 1';
  item: string|undefined;
  age: number = 0;
  ranks: number[] = [
    12, 15, 18, 17, 19
  ];
  yob: number|undefined;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['yob']) {
        this.yob = params['yob'];
      }
    });
  }

  get title(): string {
    return this._title;
  }

  calculateAge() {
    if (this.yob) {
      this.age = (new Date()).getFullYear() - this.yob;
    }
  }

  // Correction compteur

  private _compteur: number = 0;

  get compteur(): number {
    return this._compteur;
  }

  set compteur(value: number) {
    this._compteur = value;
  }

  increment(value: number) {
    this._compteur += value;
  }
}
