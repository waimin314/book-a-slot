const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const api = supertest(app);
const helper = require('./test_helper');
const Booking = require('../models/booking');

beforeEach(async () => {
  await Booking.deleteMany({});
  const bookingObjects = helper.initialBookings.map(
    (booking) => new Booking(booking)
  );
  const promiseArr = bookingObjects.map((booking) => booking.save());
  await Promise.all(promiseArr);
});

describe('When there are already some bookings on DB', () => {
  test('bookings are returned as json', async () => {
    await api
      .get('/api/v1/bookings')
      .expect(200)
      .expect('Content-type', /application\/json/);
  });

  test('all bookings are returned', async () => {
    const response = await api.get('/api/v1/bookings');
    expect(response.body).toHaveLength(helper.initialBookings.length);
  });

  test('all bookings for the month are returned when a query is present', async () => {
    const response = await api.get('/api/v1/bookings?month=10&year=2020');
    response.body.forEach((booking) => {
      expect(booking.date).toMatch(/2020-11/);
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
