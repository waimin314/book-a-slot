const bookingsRouter = require('express').Router();
const Booking = require('../models/booking');

bookingsRouter.get('/', async (req, res) => {
  const query = req.query;
  if (Object.keys(query).length !== 0) {
    const month = query.month;
    const year = query.year;
    const startDate = new Date(Number(year), Number(month), 1);
    const endDate = new Date(Number(year), Number(month) + 1, 0);

    const bookings = await Booking.find({
      date: { $gte: startDate, $lte: endDate },
    });
    return res.json(bookings);
  } else {
    const bookings = await Booking.find({});
    return res.json(bookings);
  }
});

bookingsRouter.get('/:id', async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (booking) return res.json(booking);
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
  console.log('date', body.date);

  const savedBooking = await booking.save();
  res.json(savedBooking);
});

module.exports = bookingsRouter;
