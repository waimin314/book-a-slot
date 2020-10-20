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

describe('When retrieving a booking with ID', () => {
  test('a booking with valid id is returned', async () => {
    const bookingsAtStart = await helper.bookingsInDb();
    const firstBookingInDb = bookingsAtStart[0];
    const response = await api
      .get(`/api/v1/bookings/${firstBookingInDb.id}`)
      .expect(200)
      .expect('Content-type', /application\/json/);

    expect(response.body).toEqual(JSON.parse(JSON.stringify(firstBookingInDb)));
  });

  test('a non-existing id should return status 404', async () => {
    const nonExistingId = await helper.nonExistingId();
    await api.get(`/api/v1/bookings/${nonExistingId}`).expect(404);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
