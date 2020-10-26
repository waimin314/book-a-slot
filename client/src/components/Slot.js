import React, { useState } from 'react';

export default function Slot({ timing, onSelect }) {
  const handleOnClick = () => {
    onSelect && onSelect(timing.time);
  };

  return (
    <div
      className={`w-32 p-2 m-2 ${
        timing.booked ? 'bg-gray-400 text-gray-600' : 'bg-blue-300'
      } text-center rounded-lg text-lg`}
      onClick={handleOnClick}
    >
      {timing.time}
    </div>
  );
}
