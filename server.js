const express = require("express");
const path = require("path");
const portfolio = require("./portfolio-data");

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/portfolio", (_req, res) => {
  res.json(portfolio);
});

app.get("/resume", (_req, res) => {
  res.download(path.join(__dirname, "Tushar_Resume.pdf"));
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Portfolio server running at http://${host}:${port}`);
  });
}

module.exports = app;
