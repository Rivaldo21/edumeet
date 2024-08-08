const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');
const { v4: uuid } = require('uuid');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const privateKey = fs.readFileSync('api/private.key', 'utf8');

const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

const generateJWT = (room, name, email, avatar) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + (100 * 365 * 24 * 60 * 60);

  const payload = {
    aud: 'jitsi',
    iss: 'chat',
    iat,
    exp,
    nbf: iat,
    sub: appId,
    context: {
      features: {
        livestreaming: true,
        'outbound-call': true,
        'sip-outbound-call': false,
        transcription: true,
        recording: true
      },
      user: {
        'hidden-from-recorder': false,
        moderator: true,
        name,
        id: uuid(),
        avatar,
        email
      }
    },
    room
  };

  const options = {
    algorithm: 'RS256',
    header: {
      kid: keyId
    }
  };

  return jwt.sign(payload, privateKey, options);
};

app.post('/api/generate-jwt', (req, res) => {
  console.log('Request received:', req.body);
  try {
    const { room, name, email, avatar } = req.body;
    const token = generateJWT(room, name, email, avatar);

    if (token) {
      res.json({ token });
    } else {
      res.status(500).send('Failed to generate token');
    }
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).send('Server error');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

