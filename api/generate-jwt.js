const jsonwebtoken = require("jsonwebtoken");
const uuid = require("uuid-random");
const express = require("express");

const app = express();
const port = 3000;

// Middleware untuk parse JSON body
app.use(express.json()); 

// Mengambil kunci privat dari variabel lingkungan
const privateKey = process.env.JWT_PRIVATE_KEY;
const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

app.post("/api/generate-jwt", (req, res) => {
  const { room, name, email, avatar } = req.body;

  // Fungsi untuk menghasilkan JWT
  const generate = (privateKey, { id, name, email, avatar, kid }) => {
    const now = Math.floor(Date.now() / 1000); 
    const exp = now + (60 * 60); 
    const nbf = now; 

    const payload = {
      aud: "jitsi",
      context: {
        user: {
          id,
          name,
          avatar,
          email,
          moderator: true, // Set sebagai boolean
        },
        features: {
          livestreaming: "true",
          recording: "true",
          transcription: "true",
          "outbound-call": "true",
        },
      },
      iss: "chat",
      room,
      sub: appId,
      exp,
      nbf,
    };

    return jsonwebtoken.sign(payload, privateKey, {
      algorithm: "RS256",
      header: { kid },
    });
  };

  const token = generate(privateKey, {
    id: uuid(),
    name,
    email,
    avatar,
    kid: keyId,
  });

  console.log("Generated Token:", token);
  res.json({ token }); 
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
