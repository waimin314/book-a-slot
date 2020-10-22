import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FormView() {
  const { selectedDate, slot } = useLocation().state;

  return (
    <div>
      You are booking for <strong>{slot}</strong> on{' '}
      <strong>{selectedDate.toLocaleDateString()}</strong>
      <form>
        <label>
          Full Name: <input type='text' />
        </label>
        <label>
          Email: <input type='email' />
        </label>
        <button>Back</button>
        <input type='submit' value='Book' />
      </form>
    </div>
  );
}
