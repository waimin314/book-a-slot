import React from 'react';

export default function Slot({ timing, onSelect, isSelected }) {
  const getColor = () => {
    if (timing.booked) {
      return 'bg-gray-400 text-gray-600';
    }
    if (isSelected) {
      return 'bg-indigo-600 text-white';
    }
    return 'bg-blue-300';
  };

  const handleOnClick = () => {
    !timing.booked && onSelect(timing.time);
  };

  return (
    <div
      className={`w-32 p-2 m-2 ${getColor()} text-center rounded-lg text-lg`}
      onClick={handleOnClick}
    >
      {timing.time}
    </div>
  );
}
