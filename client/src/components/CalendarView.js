import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AllSlots from './AllSlots';
import bookingService from '../services/bookings';

export default function CalendarView() {
  const [date, onChange] = useState(new Date());

  useEffect(() => {
    const fetchCurMonth = async () => {
      await bookingService.getCurMonthBookings();
    };
    fetchCurMonth();
  });

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <AllSlots timings={['9:30-10:00']} />
    </div>
  );
}
