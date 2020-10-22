import React from 'react';
import Slot from './Slot';

export default function AllSlots({ timings }) {
  const renderTimings = () => {
    return timings.map((timing) => <Slot timing={timing} />);
  };

  return <div>{renderTimings()}</div>;
}
