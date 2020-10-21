import React from 'react';
import Slot from './Slot';

export default function AllSlots({ timings }) {
  return (
    <div>
      {console.log('AllSlots -> timings', timings)}
      {timings.map((timing) => (
        <Slot timing={timing} />
      ))}
    </div>
  );
}
