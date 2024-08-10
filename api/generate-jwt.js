const jsonwebtoken = require("jsonwebtoken");
const uuid = require("uuid-random");
const express = require("express");
const fs = require("fs"); // Import the fs module to read files

const app = express();
const port = 3000;

// Middleware untuk parse JSON body
app.use(express.json()); // используйте для обработки JSON-запросов

// Kunci privat diambil dari file
const privateKey = fs.readFileSync("./private.key", "utf8");
const appId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51';
const keyId = 'vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/bcf313';

app.post("/generate-jwt", (req, res) => {
  // Mengambil input dari body
  const { name, email, avatar, room } = req.body;
  
  // Fungsi untuk menghasilkan JWT dengan parameter yang telah ditetapkan
  const generate = (privateKey, { id, name, email, avatar, appId, kid }) => {
    const now = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
    const exp = now + (60 * 60); // Token berlaku selama 1 jam
    const nbf = now; // Token dapat digunakan segera

    const payload = {
      aud: "jitsi",
      context: {
        user: {
          id,
          name,
          avatar,
          email,
          moderator: true, // Apakah pengguna adalah moderator
        },
        features: {
          livestreaming: true,
          recording: true,
          transcription: true,
          "outbound-call": true,
        },
      },
      iss: "chat",
      room: room, // Ruang meet yang bisa dikontrol
      sub: appId,
      exp, // Kapan token kadaluarsa
      nbf, // Kapan token dapat mulai digunakan
    };

    // Tanda tangani token
    return jsonwebtoken.sign(payload, privateKey, {
      algorithm: "RS256",
      header: { kid },
    });
  };

  // Menghasilkan token JWT
  const token = generate(privateKey, {
    id: uuid(),
    name,
    email,
    avatar,
    appId,
    kid: keyId, // KID, diperlukan untuk verifikasi
  });

  console.log("Generated Token:", token); // Logging token yang dihasilkan
  res.json({ token });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
