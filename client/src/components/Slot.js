import React from 'react';

export default function Slot({ timing }) {
  return (
    <div
      style={{
        display: 'inline-block',
        width: 'auto',
        border: '1px solid black',
        backgroundColor: timing.booked ? 'grey' : 'white',
        color: timing.booked ? 'white' : 'black',
      }}
    >
      {timing.time}
    </div>
  );
}
