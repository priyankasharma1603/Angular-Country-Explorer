import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  countries: any[] = [];
  filteredCountries: any[] = [];
  regions: string[] = [];
  searchQuery: string = '';
  isDarkMode: boolean = false;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
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

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  filterByRegion(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedRegion = selectElement.value;

    this.filteredCountries = this.countries.filter(country => 
      selectedRegion === '' || country.region === selectedRegion
    );

    if (this.searchQuery) {
      this.filterByName();
    }
  }

  filterByName(event?: Event): void {
    if (event) {
      const inputElement = event.target as HTMLInputElement;
      this.searchQuery = inputElement.value;
    }

    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Navigate to the country details page
  navigateToDetails(countryName: string): void {
    this.router.navigate(['/country', countryName]);
  }
}
