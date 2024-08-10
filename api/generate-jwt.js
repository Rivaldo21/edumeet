const jsonwebtoken = require("jsonwebtoken");
const uuid = require("uuid-random");
const express = require("express");

const app = express();
const port = 3000;

// Middleware untuk parse JSON body
app.use(express.json()); // Untuk menangani JSON body

// Mengambil kunci privat dari variabel lingkungan
const privateKey = process.env.JWT_PRIVATE_KEY; // Kunci privat dari environment variable
const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

app.post("/api/generate-jwt", (req, res) => {
  const { room, name, email, avatar } = req.body;

  // Fungsi untuk menghasilkan JWT
  const generate = (privateKey, { id, name, email, avatar, appId, kid }) => {
    const now = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
    const exp = now + (60 * 60); // Token berlaku selama 1 jam
    const nbf = now; // Dapat segera digunakan

    const payload = {
      aud: "jitsi",
      context: {
        user: {
          id,
          name,
          avatar,
          email,
          moderator: true,
        },
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

  const token = generate(privateKey, {
    id: uuid(),
    name,
    email,
    avatar,
    appId,
    kid: keyId,
  });

  console.log("Generated Token:", token); // Output pada console
  res.json({ token }); // Mengirim token sebagai respons
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

