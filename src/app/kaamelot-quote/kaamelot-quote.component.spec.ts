import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaamelotQuoteComponent } from './kaamelot-quote.component';

describe('KaamelotQuoteComponent', () => {
  let component: KaamelotQuoteComponent;
  let fixture: ComponentFixture<KaamelotQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaamelotQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaamelotQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
