const fs = require("fs");
const path = require("path");

let https;
const env = process.env.NODE_ENV;
if (env === "production") {
  https = {
    key: fs.readFileSync("/root/.acme.sh/meizizi.me/meizizi.me.key"),
    cert: fs.readFileSync("/root/.acme.sh/meizizi.me/meizizi.me.cer"),
  };
}
module.exports = {
  env,
  https,
  port: 80,
  mysql: {
    host: "176.122.165.44",
    port: 3306,
    user: "meizizi",
    db: "common",
    pass: "nz134679258",
    char: "utf8mb4",
  },
  static: {
    host: "https:meizizi.me",
    imagePath: path.resolve(__dirname, "./public/static/img"),
  },
};
