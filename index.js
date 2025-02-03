const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Accueil");
  } else if (req.url === "/patate") {
    res.end("Patate");
  } else {
    res.end("404");
  }
});

server.listen(process.env.PORT, () => {
  console.log("Le serveur est en écoute sur le port ${process.env.PORT}");
});
