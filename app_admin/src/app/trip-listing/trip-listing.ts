import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip, TripData } from '../trip';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [FormsModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips: TripData[] = [];
  errorMessage = '';
  successMessage = '';
  showForm = false;
  saving = false;

  newTrip: TripData = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(private tripService: Trip) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: trips => {
        this.trips = trips;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Could not load trips. Check that Express and MongoDB are running.';
      }
    });
  }

  addTrip(): void {
    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.tripService.addTrip(this.newTrip).subscribe({
      next: () => {
        this.successMessage = 'Trip added successfully!';
        this.newTrip = {
          code: '', name: '', length: '', start: '',
          resort: '', perPerson: '', image: '', description: ''
        };
        this.showForm = false;
        this.saving = false;
        this.loadTrips();
      },
      error: error => {
        this.errorMessage = error.error?.message || 'Could not add trip. Check the information and try again.';
        this.saving = false;
      }
    });
  }
}
