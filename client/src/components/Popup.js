import React from 'react';
import { Link } from 'react-router-dom';

export default function Popup({ name, time, date }) {
  return (
    <div className='h-screen px-12 w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 '>
      <div className='animate-slideIn'>
        <div className='w-full p-4 bg-indigo-600 rounded-t-3xl'>
          <p className='text-xl text-white text-center'>Booking Confirmed</p>
        </div>
        <div className='bg-white p-5 rounded-b-3xl'>
          <p className='text-xl'>
            Hi <strong>{name}</strong>. Your booking for <strong>{time}</strong>{' '}
            on <strong>{date}</strong> is confirmed!.
          </p>
          <Link to='/'>
            <button className='w-full mt-10 p-2 bg-red-600  text-white text-lg rounded-md'>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
