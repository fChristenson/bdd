import * as express from "express";
import * as path from "path";

export const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/login", (req, res) => {
  if (req.body.name !== "foo" || req.body.password !== "bar")
    return res.redirect("/failed");

  res.redirect("/success");
});

app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

app.get("/failed", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "failed.html"));
});
