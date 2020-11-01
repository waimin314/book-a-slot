import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Slot from './Slot';

describe('When rendering', () => {
  const bookedTiming = { time: '10:30-11:00', booked: true };
  const freeTiming = { time: '11:30-12:00', booked: false };

  test('Should render without error with at least "timing" props', () => {
    const component = render(<Slot timing={bookedTiming} />);
    expect(component.container).toHaveTextContent(bookedTiming.time);
  });

  test('Should render blue color background for availble slot', () => {
    const component = render(<Slot timing={freeTiming} />);
    const div = component.container.querySelector('.bg-blue-300');
    expect(div).toHaveTextContent(freeTiming.time);
  });

  test('Should render gray color background for booked slot', () => {
    const component = render(<Slot timing={bookedTiming} />);
    const div = component.container.querySelector('.bg-gray-400');
    expect(div).toHaveTextContent(bookedTiming.time);
  });
});
