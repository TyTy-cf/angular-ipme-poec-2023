import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamishHomeComponent } from './steamish-home.component';

describe('SteamishHomeComponent', () => {
  let component: SteamishHomeComponent;
  let fixture: ComponentFixture<SteamishHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamishHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamishHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
