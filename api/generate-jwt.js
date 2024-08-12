const jsonwebtoken = require("jsonwebtoken");
const uuid = require("uuid-random");
const express = require("express");

const app = express();
const port = 3000; // Declared port

// Middleware untuk parse JSON body
app.use(express.json()); 

// Mengambil kunci privat dari variabel lingkungan
const privateKey = process.env.JWT_PRIVATE_KEY;
const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

app.post("/api/generate-jwt", (req, res) => {
  const { room, name, email, avatar } = req.body;

  // Validate incoming data
  if (!room || !name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Function to generate JWT
  const generate = (privateKey, { id, name, email, avatar, kid }) => {
    const now = Math.floor(Date.now() / 1000);
    const exp = now + (60 * 60);
    const nbf = now;

    const payload = {
      aud: "jitsi",
      context: {
        user: { id, name, avatar, email, moderator: true },
        features: {
          livestreaming: true,
          recording: true,
          transcription: true,
          "outbound-call": true,
        },
      },
      iss: "chat",
      room: room,
      sub: appId,
      exp,
      nbf,
    };

    return jsonwebtoken.sign(payload, privateKey, {
      algorithm: "RS256",
      header: { kid },
    });
  };

  try {
    const token = generate(privateKey, {
      id: uuid(),
      name,
      email,
      avatar: avatar || '',
      kid: keyId,
    });

    console.log("Generated Token:", token);
    res.json({ token });
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server and listen on the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
