const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const options = {
  auth: {
    api_user: `${process.env.SENDGRID_USERNAME}`,
    api_key: `${process.env.SENDGRID_PASSWORD}`,
  },
};

const client = nodemailer.createTransport(sendGridTransport(options));

const send = (booking) => {
  const email = {
    from: 'book.a.slot.test@gmail.com',
    to: booking.email,
    subject: 'Booking Confirmation',
    text: `Hi ${booking.name}. Your booking is confirmed`,
    html: `Hi <b>${booking.name}</b>, <br/>    
    Your booking for <b>${booking.start}-${booking.end}</b> 
    on <b>${booking.date.toLocaleDateString()}</b> is confirmed.`,
  };
  client.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
};

module.exports = { send };
