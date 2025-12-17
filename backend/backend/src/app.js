const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("JeLa Dreams API is running");
});

// Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error(err));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(Serveur JeLa Dreams lancé sur le port ${PORT})
);
