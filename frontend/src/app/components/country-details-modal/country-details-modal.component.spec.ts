import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsModalComponent } from './country-details-modal.component';

describe('CountryDetailsModalComponent', () => {
  let component: CountryDetailsModalComponent;
  let fixture: ComponentFixture<CountryDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsModalComponent]
    });
    fixture = TestBed.createComponent(CountryDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
