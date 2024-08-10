var jsonwebtoken = require("jsonwebtoken");
var uuid = require("uuid-random");
const express = require("express");
const fs = require("fs"); 

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const generate = (privateKey, { id, name, email, avatar, appId, kid }) => {
    const now = new Date();

    // Create JWT token
    const jwt = jsonwebtoken.sign(
      {
        aud: "jitsi",
        context: {
          user: {
            id,
            name,
            avatar,
            email,
            moderator: "true",
          },
          features: {
            livestreaming: "true",
            recording: "true",
            transcription: "true",
            "outbound-call": "true",
          },
        },
        iss: "chat",
        room: "*", // Make sure this is allowed by your Jitsi server.
        sub: appId,
        exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
        nbf: Math.round(Date.now() / 1000) - 10, // Token can be used immediately
      },
      privateKey,
      { algorithm: "RS256", header: { kid } }
    );
    return jwt;
  };

  const privateKey = fs.readFileSync("./private.key", "utf8");

  const token = generate(privateKey, {
    id: uuid(),
    name: "R J",
    email: "rj142872@gmail.com",
    avatar: "avatar",
    appId: "vpaas-magic-cookie-8bb988617ed14047acc207e7f35ddcaa",
    kid: "vpaas-magic-cookie-8bb988617ed14047acc207e7f35ddcaa/1d6875",
  });

  console.log(token);

  res.json({ token: token });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

