const knex = require("knex");
const { mysql: config } = require("@root/config");

module.exports = knex({
  client: "mysql",
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pass,
    database: config.db,
    charset: config.char,
    multipleStatements: true,
  },
});
