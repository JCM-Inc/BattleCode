const google = require('googleapis');
require('dotenv').config();

const plus = google.plus('v1');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL,
);

// Retrieve tokens via token exchange explained above or set them:
oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE',
  // Optional, provide an expiry_date (milliseconds since the Unix Epoch)
  // expiry_date: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 7)
});

plus.people.get({
  key: API_KEY,
  userId: '+google',
}, (err, user) => {
  console.log(`Result: ${err ? err.message : user.displayName}`);
});
