import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AllSlots from './AllSlots';
import bookingService from '../services/bookings';

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [bookingsOfDate, setBookingsOfDate] = useState([]);

  useEffect(() => {
    const fetchCurMonth = async () => {
      await bookingService.getCurMonthBookings();
    };
    fetchCurMonth();
  }, []);

  const handleDateChange = (date) => {
    setDate(date);
    // console.log(bookingService.getBookingsByDate(date));
    setBookingsOfDate([...bookingService.getBookingsByDate(date)]);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <AllSlots timings={bookingsOfDate} />
    </div>
  );
}
