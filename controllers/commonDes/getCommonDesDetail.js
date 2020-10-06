const mysql = require("@db/mysql");

module.exports = async (ctx) => {
  const { id } = ctx.request.query;

  const data = await mysql("web_des").select("*").where("id", id).first();

  ctx.returnSuccess(data);
};
