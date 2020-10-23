import React from 'react';

export default function Slot({ timing, onSelect }) {
  return (
    <div
      className='w-32 p-2 m-2 bg-blue-300 text-center rounded-lg text-lg'
      onClick={() => (onSelect ? onSelect(timing.time) : {})}
    >
      {timing.time}
    </div>
  );
}
