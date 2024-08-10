const jwt = require('jsonwebtoken');
const fs = require('fs');
const { v4: uuid } = require('uuid');

// Jalur absolut untuk kunci pribadi
const privateKey = fs.readFileSync(`${__dirname}/private.key`, 'utf8');

const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

const generateJWT = (room, name, email, avatar) => {
  const now = Math.floor(Date.now() / 1000); // Waktu sekarang dalam detik
  const iat = now;
  const nbf = iat; // Kapan token mulai berlaku
  const exp = now + (60 * 60); // Token berlaku selama 1 jam

  const payload = {
    aud: 'jitsi', // Audience
    iss: 'chat', // Issuer
    iat, // Issued at
    exp, // Expires
    nbf, // Not before
    sub: appId, // Subject
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
        moderator: true, // Apakah pengguna adalah moderator
        name,
        id: uuid(), // ID unik untuk pengguna
        avatar,
        email
      }
    },
    room // Ruang yang hendak ditempati
  };

  const options = {
    algorithm: 'RS256', // Algoritma yang digunakan
    header: {
      kid: keyId // Key ID
    }
  };

  return jwt.sign(payload, privateKey, options); // Memberikan JWT ditandai
};

module.exports = (req, res) => {
  console.log("Request received:", req.body); // Log input request
  const { room, name, email, avatar } = req.body;
  try {
    const token = generateJWT(room, name, email, avatar);
    res.json({ token }); // Kirim token sebagai tanggapan JSON
  } catch (error) {
    console.error("Error generating token:", error); // Log error
    res.status(500).send('Failed to generate token'); // Kirim pesan error
  }
};
