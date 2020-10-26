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
    setBookingsOfDate(bookingService.getBookingsByDate(new Date()));
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
    return bookingsOfDate.map((booking, i) => {
      return (
        <Slot
          timing={booking}
          key={i}
          onSelect={handleOnSelect}
          isSelected={selectedSlot === booking.time}
        />
      );
    });
  };

  return (
    <div className='flex flex-col items-center max-w-full'>
      <div className='my-10 shadow-lg'>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div className='block self-start my-2 mx-10 text-xl'>
        Selected{'  '}
        <strong>{selectedSlot}</strong>
      </div>

      <div className='py-5 my-2 mx-10 shadow-tb '>
        <div className='flex flex-wrap h-64 justify-center py-8 max-w-full overflow-y-scroll'>
          {renderAllSlots()}
        </div>
      </div>
      <div className='w-full px-10'>
        <Link
          to={{
            pathname: '/book',
            state: { selectedDate: date, slot: selectedSlot },
          }}
        >
          <button className='w-full my-5 p-2 bg-indigo-600 text-white text-lg rounded-md'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
