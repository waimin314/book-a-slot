const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const api = supertest(app);
const helper = require('./test_helper');
const Booking = require('../models/booking');
const test_helper = require('./test_helper');
const { initialBookings } = require('./test_helper');

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
});

afterAll(() => {
  mongoose.connection.close();
});
