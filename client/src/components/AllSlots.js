import React, { useState } from 'react';
import Slot from './Slot';

export default function AllSlots({ timings }) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const handleOnSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const renderTimings = () => {
    return timings.map((timing) => {
      if (timing.booked) {
        return <Slot timing={timing} />;
      } else {
        return <Slot timing={timing} onSelect={handleOnSelect} />;
      }
    });
  };

  return (
    <div>
      <div>selected {selectedSlot}</div>
      {renderTimings()}
    </div>
  );
}
