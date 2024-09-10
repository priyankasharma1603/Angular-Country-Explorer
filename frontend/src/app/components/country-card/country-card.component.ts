// src/app/components/country-card/country-card.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  countries: any[] = []; // Replace with your actual type

  constructor(private router: Router) {}

  navigateToDetails(countryName: string): void {
    this.router.navigate(['/country-details', countryName]);
  }
}
