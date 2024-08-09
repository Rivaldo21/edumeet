const jwt = require('jsonwebtoken');
const fs = require('fs');
const { v4: uuid } = require('uuid');

// Jalur absolut untuk kunci pribadi
const privateKey = fs.readFileSync(`${__dirname}/private.key`, 'utf8');

const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

const generateJWT = (room, name, email, avatar) => {
  const iat = Math.floor(Date.now() / 1000); // Waktu sekarang
  const exp = iat + (60 * 60); // Token berlaku selama 1 jam
  const nbf = iat + 1; // Token dapat digunakan segera

  const payload = {
    aud: 'jitsi',
    iss: 'chat',
    iat,
    exp,
    nbf, // Sertakan nbf dalam payload
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
        id: uuid(), // ID unik untuk pengguna
        avatar,
        email
      }
    },
    room // Sertakan room
  };

  const options = {
    algorithm: 'RS256',
    header: {
      kid: keyId
    }
  };

  return jwt.sign(payload, privateKey, options);
};


module.exports = (req, res) => {
  console.log("Request received:", req.body); // Logging request body
  const { room, name, email, avatar } = req.body;
  try {
    const token = generateJWT(room, name, email, avatar);
    res.json({ token });
  } catch (error) {
    console.error("Error generating token:", error); // Logging error
    res.status(500).send('Failed to generate token');
  }
};
