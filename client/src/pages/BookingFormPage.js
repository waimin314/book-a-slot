import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bookingService from '../services/bookings';
import Popup from './../components/Popup';

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
    <div className='lg:flex lg:flex-col lg:m-20 lg:items-center xl:m-40'>
      <div className={`${bookingStatus ? 'visible' : 'hidden'}`}>
        <Popup
          name={name}
          time={slot}
          date={selectedDate.toLocaleDateString()}
        ></Popup>
      </div>
      <p className='my-5 mx-10 text-xl'>
        You are booking for <strong>{slot}</strong> on{' '}
        <strong>{selectedDate.toLocaleDateString()}</strong>
      </p>
      <div className='mx-10 my-10'>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label className='block text-lg text-gray-700' htmlFor='fullname'>
              Full Name:
            </label>
            <input
              className='w-full border-b-2 border-gray-800 p-1  my-1 text-xl focus:border-indigo-600 focus:outline-none 
                          lg:w-auto'
              type='text'
              id='fullname'
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>
          <div className='mt-20 mb-10'>
            <label className='block text-lg text-gray-700' htmlFor='email'>
              Email:
            </label>
            <input
              className='w-full border-b-2 border-gray-800 p-1 my-1 text-xl focus:border-indigo-600 focus:outline-none 
                          lg:w-auto'
              type='email'
              id='email'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div
            className='flex flex-col
                          lg:flex-row'
          >
            <Link to='/'>
              <button
                className='w-full my-5 p-2 bg-red-600  text-white text-lg rounded-md 
                          lg:w-32 lg:p-3 lg:mr-4'
              >
                Back
              </button>
            </Link>
            <input
              className='w-full my-5 p-2 bg-indigo-600 text-white text-lg rounded-md 
                        lg:w-32 lg:p-3 lg:mx-20'
              type='submit'
              value='Book'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
