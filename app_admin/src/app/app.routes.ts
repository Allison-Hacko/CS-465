import { Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';

export const routes: Routes = [
  { path: '', component: TripListing },
  { path: '**', redirectTo: '' }
];
