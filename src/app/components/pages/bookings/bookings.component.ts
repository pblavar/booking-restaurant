import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';
import { BookingResumeComponent } from '../../booking/booking-resume/booking-resume.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule, BookingResumeComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  books: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.books = this.bookingService.getAllBooks();
  }
}
