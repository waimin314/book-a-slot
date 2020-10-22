import React from 'react';

export default function FormView({ selectedDate, slot }) {
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
