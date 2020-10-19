const bookingsRouter = require('express').Router();
const Booking = require('../models/booking');

bookingsRouter.get('/', async (req, res) => {
  const bookings = await Booking.find({});
  return res.send(bookings);
});

bookingsRouter.get('/:id', async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (booking) return res.send(bookings);
  else return res.status(404).end();
});

bookingsRouter.post('/', async (req, res) => {
  const body = req.body;

  const booking = new Booking({
    name: body.name,
    email: body.email,
    date: body.date,
    start: body.start,
    end: body.end,
  });

  const savedBooking = await booking.save();
  res.json(savedBooking);
});

module.exports = bookingsRouter;
