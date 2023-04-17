const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Project ID: d7cd64e1-0a9b-4bd8-9cc8-3f13fd7b5a66
// Private Key: 90c02205-706c-4fe1-a05a-6885cfdf20fc
const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "90c02205-706c-4fe1-a05a-6885cfdf20fc" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});


// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
//   return res.json({ username: username, secret: "sha256..." });
// });

app.listen(3030);