import React from 'react';

export default function Slot({ timing, onSelect }) {
  return (
    <div
      style={{
        display: 'inline-block',
        width: 'auto',
        border: '1px solid black',
        backgroundColor: timing.booked ? 'grey' : 'white',
        color: timing.booked ? 'white' : 'black',
      }}
      onClick={() => (onSelect ? onSelect(timing.time) : {})}
    >
      {timing.time}
    </div>
  );
}
