import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TripData } from '../trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input({ required: true }) trip!: TripData;
  imageError = false;
}
