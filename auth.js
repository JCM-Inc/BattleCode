const GoogleAuth = require('google-auth-library');

const auth = new GoogleAuth;
const CLIENT_ID = '106454631553-mles8i7ktt96qbvps7uoh2k9idop90e0.apps.googleusercontent.com';
const client = new auth.OAuth2(CLIENT_ID);
exports.tokenCheck = (token, cb) => {
  client.verifyIdToken(
    token,
    CLIENT_ID,
    function(e, login) {
      let payload = login.getPayload();
      let userid = payload['sub'];
      cb({
        email: payload.email,
      });
    },
  );
};

