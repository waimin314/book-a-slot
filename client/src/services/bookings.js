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

  addToCache(response.data);

  return response;
};

const getBookingsOfDate = async (date) => {};

const addToCache = (bookings) => {
  bookings.forEach(({ date, start, end }) => {
    const parsedDate = new Date(date);
    const month = parsedDate.getMonth();
    const year = parsedDate.getFullYear();
    // check if year is already inside the cache
    if (!cachedBookings[year]) {
      cachedBookings[year] = [];
    }
    // check if month is already inside the cache
    if (!cachedBookings[year][month]) {
      cachedBookings[year][month] = [];
    }
    cachedBookings[year][month].push(`${start}-${end}`);
  });
};

export default { getBookingsByMonth, getCurMonthBookings };
