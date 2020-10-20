import axios from 'axios';

const baseUrl = '/api/v1/bookings';

const bookingsByMonth = {};

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
  console.log('getCurMonthBookings -> response', response);

  bookingsByMonth[date.getMonth()] = sanitize(response.data);
  console.log(bookingsByMonth);

  return response;
};

const sanitize = (bookings) => {
  return bookings.map((booking) => {
    return {
      date: booking.date,
      duration: `${booking.start}-${booking.end}`,
    };
  });
};

export default { getBookingsByMonth, getCurMonthBookings };
