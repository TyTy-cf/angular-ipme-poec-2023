import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherFormTDComponent } from './publisher-form-t-d.component';

describe('PublisherFormComponent', () => {
  let component: PublisherFormTDComponent;
  let fixture: ComponentFixture<PublisherFormTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherFormTDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherFormTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
