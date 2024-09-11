import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  regions: string[] = [];
  searchQuery: string = '';
  isDarkMode: boolean = false;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    // Fetch countries data from the service
    this.countryService.getCountries().subscribe((data: any[]) => {
      this.countries = data;
      this.filteredCountries = data;

      // Collect unique regions from the country data
      this.regions = [...new Set(
        data.map((country: any) => country.region)
          .filter((region: any): region is string => typeof region === 'string')
      )];
    });
  }

  // Toggles the dark mode for the app
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  // Filter countries by region
  filterByRegion(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedRegion = selectElement.value;

    // Filter countries based on the selected region
    this.filteredCountries = this.countries.filter(country => 
      selectedRegion === '' || country.region === selectedRegion
    );

    // If there's an active search query, apply it on the filtered list
    if (this.searchQuery) {
      this.filterByName();
    }
  }

  // Filter countries by name
  filterByName(event?: Event): void {
    if (event) {
      const inputElement = event.target as HTMLInputElement;
      this.searchQuery = inputElement.value;
    }

    // Filter countries based on the search query
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Navigate to the country details page
  navigateToDetails(countryName: string): void {
    this.router.navigate(['/country', countryName]);
  }
}
