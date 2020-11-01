import React from 'react';
import { Link } from 'react-router-dom';

export default function Popup({ name, email, time, date }) {
  return (
    <div className='h-screen px-12 w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 '>
      <div className='animate-slideIn lg:w-1/3'>
        <div className='w-full p-4 bg-indigo-600 rounded-t-3xl'>
          <p className='text-xl text-white text-center'>Booking Confirmed</p>
        </div>
        <div
          className='bg-white p-5 rounded-b-3xl 
                        lg:flex flex-col lg:justify-center lg:items-center'
        >
          <p className='text-xl'>
            Hi <strong>{name}</strong>. Your booking for <strong>{time}</strong>{' '}
            on <strong>{date}</strong> is confirmed! A confirmation email has
            been dispatched to <strong>{email}</strong>.
          </p>
          <Link to='/'>
            <button
              className='w-full mt-10 p-2 bg-red-600  text-white text-lg rounded-md 
                                lg:w-32 lg:p-3'
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
