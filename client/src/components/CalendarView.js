import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AllSlots from './AllSlots';

export default function CalendarView() {
  const [date, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <AllSlots timings={['9:30-10:00']} />
    </div>
  );
}
