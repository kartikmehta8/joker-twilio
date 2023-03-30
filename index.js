const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
const client = require('twilio')(accountSid, authToken);

setInterval(async function() {

  var now = new Date();
  console.log('Script is running at:', now);

  const joke = await axios.get('https://v2.jokeapi.dev/joke/Dark?type=single');


  let message = await client.messages
    .create({
      body: joke.data.joke,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_NUMBER
    })

  console.log(message);

}, 24 * 60 * 60 * 1000);