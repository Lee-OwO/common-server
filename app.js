const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const response = require("@root/middlewares/response");
const router = require("@root/routes");
const { historyApiFallback } = require("koa2-connect-history-api-fallback");

// error handler
onerror(app);
app.use(response);
app.use(historyApiFallback({ whiteList: ["/api"] }));
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// routes
app.use(router.routes());

module.exports = app;
