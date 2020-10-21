import axios from 'axios';

const baseUrl = '/api/v1/bookings';

const cachedBookings = {};

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
  console.log(response.data);
  addToCache(response.data);
  console.log(cachedBookings);
  return response;
};

const getBookingsOfDate = async (date) => {};

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

export default { getBookingsByMonth, getCurMonthBookings };
