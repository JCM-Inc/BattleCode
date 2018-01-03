const GoogleAuth = require('google-auth-library');

const auth = new GoogleAuth;
const CLIENT_ID = '500724803395-pma9je3unef7t0ugokspsjq3vq9olu7d.apps.googleusercontent.com';
const client = new auth.OAuth2(CLIENT_ID);
exports.tokenCheck = (token, cb) => {
  client.verifyIdToken(
    token,
    CLIENT_ID,
    function (e, login) {
      if (e) {
        console.error(e);
      } else {
        const payload = login.getPayload();
        const userid = payload['sub'];
        cb({
          email: payload.email,
        });
      }
    },
  );
};

