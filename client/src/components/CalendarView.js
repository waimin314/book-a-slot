import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Slot from './Slot';
import bookingService from '../services/bookings';

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [bookingsOfDate, setBookingsOfDate] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');

  useEffect(() => {
    const fetchCurMonth = async () => {
      await bookingService.getCurMonthBookings();
    };
    fetchCurMonth();
    setBookingsOfDate([...bookingService.getBookingsByDate(date)]);
  }, []);

  const handleDateChange = (date) => {
    setDate(date);
    setSelectedSlot('');
    // console.log(bookingService.getBookingsByDate(date));
    setBookingsOfDate([...bookingService.getBookingsByDate(date)]);
  };

  const handleOnSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const renderAllSlots = () => {
    return bookingsOfDate.map((booking) => {
      if (booking.booked) {
        return <Slot timing={booking} />;
      } else {
        return <Slot timing={booking} onSelect={handleOnSelect} />;
      }
    });
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <div>Selected {selectedSlot}</div>
      {renderAllSlots()}
    </div>
  );
}
