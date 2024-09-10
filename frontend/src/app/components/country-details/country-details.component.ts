import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: any;
  languages: string = '';

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    // Get the 'name' parameter from the route
    const countryName = this.route.snapshot.paramMap.get('name');
    
    // Fetch the country details by name
    this.countryService.getCountries().subscribe((countries: any[]) => {
      this.country = countries.find(country => country.name === countryName);

      if (this.country && this.country.languages) {
        this.languages = this.country.languages.map((lang: any) => lang.name).join(', ');
      }
    });
  }
}
