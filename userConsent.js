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

// function handleClientLoad() {
//   // Loads the client library and the auth2 library together for efficiency.
//   // Loading the auth2 library is optional here since `gapi.client.init` function will load
//   // it if not already loaded. Loading it upfront can save one network request.
//   gapi.load('client:auth2', initClient);
// }

// function initClient() {
//   // Initialize the client with API key and People API, and initialize OAuth with an
//   // OAuth 2.0 client ID and scopes (space delimited string) to request access.
//   gapi.client.init({
//     apiKey: 'YOUR_API_KEY',
//     discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
//     clientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//     scope: 'profile'
//   }).then(function () {
//     // Listen for sign-in state changes.
//     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//     // Handle the initial sign-in state.
//     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//   });
// }
// f
