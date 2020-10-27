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
      setBookingsOfDate(bookingService.getBookingsByDate(new Date()));
    };
    fetchCurMonth();
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
    <div
      className='flex flex-col items-center max-w-full 
                    lg:flex-row lg:px-10 lg:m-10 
                    xl:px-20 xl:m-20'
    >
      <div className='my-10 shadow-lg max-w-full'>
        <Calendar
          maxDate={new Date(2020, 11, 31)}
          onChange={handleDateChange}
          value={date}
        />
      </div>
      {/* <div className='block self-start my-2 mx-10 text-xl'>
        Selected{'  '}
        <strong>{selectedSlot}</strong>
      </div> */}

      <div>
        <div
          className='py-5 my-2 mx-10 shadow-tb 
                        lg:mt-24'
        >
          <div className='flex flex-wrap h-64 justify-center py-8 max-w-full overflow-y-scroll'>
            {renderAllSlots()}
          </div>
        </div>
        <div
          className='w-full px-10
                        lg:flex lg:justify-end'
        >
          <Link
            to={{
              pathname: '/book',
              state: { selectedDate: date, slot: selectedSlot },
            }}
          >
            <button
              className='w-full my-5 p-2 bg-indigo-600 text-white text-lg rounded-md shadow-md
                                lg:w-auto lg:p-3 lg:mr-4'
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
