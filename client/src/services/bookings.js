import axios from 'axios';

const baseUrl = '/api/v1/bookings';

const getBookingsByMonth = async (month, year) => {
  const response = await axios.get(`${baseUrl}?month=${month}&year=${year}`);

  console.log(`Bookings of month ${month} `, response);
  return response;
};

const getCurMonthBookings = async () => {
  const date = new Date();
  const response = await getBookingsByMonth(
    date.getMonth(),
    date.getFullYear()
  );

  console.log(`Bookings of current month ${date.getMonth()} `, response);
  return response;
};

export default { getBookingsByMonth, getCurMonthBookings };
