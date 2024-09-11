import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component'; // Import the details component

const routes: Routes = [
  { path: '', component: AppComponent }, // Home page route
  { path: 'country/:name', component: CountryDetailsComponent } // Route for country details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
