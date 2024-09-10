import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(countries: any[], searchText: string): any[] {
    if (!searchText.trim()) {
      return countries;
    }
    return countries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
