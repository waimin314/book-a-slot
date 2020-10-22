import React from 'react';
import Slot from './Slot';

export default function AllSlots({ timings }) {
  return (
    <div>
      {timings.map((timing) => (
        <Slot timing={timing} />
      ))}
    </div>
  );
}
