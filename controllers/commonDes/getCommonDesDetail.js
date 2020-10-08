const mysql = require("@db/mysql");

module.exports = async (ctx) => {
  const { id } = ctx.request.query;

  const data = await mysql("web_des").select("*").where("id", id).first();

  if (data) {
    ctx.returnSuccess(data);
  } else {
    ctx.returnError("没找到相关信息");
  }
};
