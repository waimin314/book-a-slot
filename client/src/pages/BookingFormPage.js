import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bookingService from '../services/bookings';

export default function FormView() {
  const { selectedDate, slot } = useLocation().state;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingStatus, setBookingStatus] = useState(false);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const booking = {
      name: name,
      email: email,
      date: selectedDate,
      start: slot.split('-')[0],
      end: slot.split('-')[1],
    };

    const response = await bookingService.makeBooking(booking);
    if (response.statusText === 'OK') {
      setBookingStatus(true);
    }
  };

  return (
    <div>
      You are booking for <strong>{slot}</strong> on{' '}
      <strong>{selectedDate.toLocaleDateString()}</strong>
      <form onSubmit={handleOnSubmit}>
        <label>
          Full Name:{' '}
          <input
            type='text'
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        <label>
          Email:{' '}
          <input
            type='email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <button>Back</button>
        <input type='submit' value='Book' />
      </form>
      <h3>{bookingStatus ? 'Booking confirmed!' : ''}</h3>
    </div>
  );
}
