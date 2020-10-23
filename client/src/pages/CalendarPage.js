import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Slot from '../components/Slot';
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
    setBookingsOfDate([...bookingService.getBookingsByDate(new Date())]);
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
      <div>{renderAllSlots()}</div>
      <div>
        <Link
          to={{
            pathname: '/book',
            state: { selectedDate: date, slot: selectedSlot },
          }}
        >
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
}
