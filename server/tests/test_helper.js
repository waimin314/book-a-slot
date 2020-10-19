const Booking = require('../models/booking');

const initialBookings = [
  {
    name: 'Dedie Douthwaite',
    email: 'ddouthwaite0@slideshare.net',
    date: '2020-12-21T08:22:13Z',
    start: '10:00',
    end: '10:30',
  },
  {
    name: 'Franz Lehrian',
    email: 'flehrian1@disqus.com',
    date: '2020-11-11T14:18:32Z',
    start: '10:30',
    end: '11:00',
  },
  {
    name: 'Rockie Grzeszczyk',
    email: 'rgrzeszczyk2@wp.com',
    date: '2020-12-15T08:27:39Z',
    start: '11:00',
    end: '11:30',
  },
  {
    name: 'Marsiella Bassham',
    email: 'mbassham3@dedecms.com',
    date: '2020-10-15T02:03:46Z',
    start: '11:30',
    end: '12:00',
  },
  {
    name: 'Annelise Kibbe',
    email: 'akibbe4@harvard.edu',
    date: '2020-11-11T16:52:16Z',
    start: '12:00',
    end: '12:30',
  },
  {
    name: 'Mischa Lydon',
    email: 'mlydon5@miitbeian.gov.cn',
    date: '2020-11-16T11:54:57Z',
    start: '12:30',
    end: '13:00',
  },
  {
    name: 'Moreen Shorbrook',
    email: 'mshorbrook6@bloglovin.com',
    date: '2020-11-13T09:59:34Z',
    start: '13:00',
    end: '13:30',
  },
  {
    name: 'Dani Klimt',
    email: 'dklimt7@studiopress.com',
    date: '2020-12-20T01:51:29Z',
    start: '13:30',
    end: '14:00',
  },
  {
    name: 'Ransom Alvar',
    email: 'ralvar8@msu.edu',
    date: '2020-12-30T08:55:32Z',
    start: '14:00',
    end: '14:30',
  },
  {
    name: 'Hartley Thornton',
    email: 'hthornton9@gnu.org',
    date: '2020-10-17T13:14:35Z',
    start: '14:30',
    end: '15:00',
  },
];

const bookingsInDb = async () => {
  const bookings = await Booking.find({});
  return bookings.map((booking) => booking.toJSON());
};

module.exports = { initialBookings, bookingsInDb };
