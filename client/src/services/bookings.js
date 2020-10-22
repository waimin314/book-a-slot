import axios from 'axios';

const baseUrl = '/api/v1/bookings';

const cachedBookings = {};
const INTERVAL = 30;
const opening_hours = { start: '10:00', end: '21:00' };

const getBookingsByMonth = async (month, year) => {
  const response = await axios.get(`${baseUrl}?month=${month}&year=${year}`);

  return response;
};

const getCurMonthBookings = async () => {
  const date = new Date();
  const response = await getBookingsByMonth(
    date.getMonth(),
    date.getFullYear()
  );

  addToCache(response.data);

  return response;
};

const getBookingsByDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateOfMonth = date.getDate();
  if (
    !cachedBookings[year] ||
    !cachedBookings[year][month] ||
    !cachedBookings[year][month][dateOfMonth]
  ) {
    return populateSlots([]);
  } else {
    return populateSlots(cachedBookings[year][month][dateOfMonth]);
  }
};

const populateSlots = (bookedSlots) => {
  let allSlots = [];
  let slot = opening_hours.start;

  while (slot != opening_hours.end) {
    const endOfCurSlot = addMinutes(slot, INTERVAL);
    allSlots.push({ time: `${slot}-${endOfCurSlot}` });
    slot = endOfCurSlot;
  }

  return allSlots.map((s) => {
    return { time: s.time, booked: bookedSlots.includes(s.time) };
  });
};

const addMinutes = (currentTime, minutesToAdd) => {
  let [hours, minutes] = currentTime.split(':');

  hours = Number(hours);
  minutes = Number(minutes);
  minutes += minutesToAdd;
  hours += Math.floor(minutes / 60);
  minutes = minutes % 60;

  return `${hours}:${String(minutes).padStart(2, '0')}`;
};

const addToCache = (bookings) => {
  bookings.forEach(({ date, start, end }) => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth();
    const dateOfMonth = parsedDate.getDate();
    const duration = `${start}-${end}`;
    // check if year is already inside the cache
    if (!cachedBookings[year]) {
      cachedBookings[year] = [];
    }
    // check if month is already inside the cache
    if (!cachedBookings[year][month]) {
      cachedBookings[year][month] = [];
    }
    if (!cachedBookings[year][month][dateOfMonth]) {
      cachedBookings[year][month][dateOfMonth] = [];
    }
    cachedBookings[year][month][dateOfMonth].push(duration);
  });
};

export default { getBookingsByMonth, getCurMonthBookings, getBookingsByDate };
