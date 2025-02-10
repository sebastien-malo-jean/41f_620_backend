// Importation des librairies
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { log } = require("console");

const server = express();
dotenv.config();

// Permission d'acces au dossier
const dossierPublic = path.join(__dirname, "public");
server.use(express.static(dossierPublic));

//fonctions middleWare

function authentification(req, res, next) {
  console.log("Authentification en cours...");
  next();
}
/*
 * Routes servant à récuperer tous les films de la base de données.
 */
// get
server.get("/", (req, res) => {
  const reponse = {
    msg: "Tiguidou",
  };
  return res.json(reponse);
});

server.get("/films", (req, res) => {
  return res.json({ msg: "ok films" });
});
server.get("/films/:id", (req, res) => {
  return res.json({ msg: "ok film id" });
});
// post
server.post("/films", (req, res) => {
  return res.json({ msg: "ok film post" });
});
server.post("/films/initialisation", (req, res) => {
  return res.json({ msg: "ok film initialisation" });
});
// put
server.put("/films/:id", (req, res) => {
  return res.json({ msg: "ok film" });
});
// delete
server.delete("/films/:id", (req, res) => {
  return res.json({ msg: "ok film id" });
});
// ressource 404
server.use((req, res) => {
  res.statusCode = 404;
  return res.json({ msg: "Ressource non trouvée." });
});

server.listen(process.env.PORT, () => {
  console.log(`Le serveur est en écoute sur le port ${process.env.PORT}`);
});
