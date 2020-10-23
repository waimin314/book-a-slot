import React from 'react';

export default function Slot({ timing, onSelect }) {
  return (
    <div onClick={() => (onSelect ? onSelect(timing.time) : {})}>
      {timing.time}
    </div>
  );
}
