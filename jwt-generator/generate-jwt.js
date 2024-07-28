const jwt = require('jsonwebtoken');
const fs = require('fs');
const uuid = require('uuid-random');

// Fungsi untuk menghasilkan dan menandatangani JWT
function generate(privateKey, { id, name, email, avatar, appId, kid }) {
  const payload = {
    aud: 'jitsi',
    iss: 'chat',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (100 * 365 * 24 * 60 * 60), 
    nbf: Math.floor(Date.now() / 1000),
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
        id,
        avatar,
        email
      }
    },
    room: '*'
  };

  return jwt.sign(payload, privateKey, { algorithm: 'RS256', keyid: kid });
}

// Lee private key husi file "private.key"
const privateKey = fs.readFileSync('private.key', 'utf8');

// Generate JWT
const token = generate(privateKey, {
  id: uuid(), // Uza UUID hanesan ID uzuariu
  name: "", // Troka ho ita-nia naran uzuariu
  email: "", // Troka ho ita-nia email uzuariu
  avatar: "", // Troka ho URL-ita nia profile avatar 
  appId: "vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51", // Troka ho ita-nia AppID
  kid: "vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/7131dd" // Troka ho ita-nia API key
});

console.log(token); // Hakerek JWT iha consol
