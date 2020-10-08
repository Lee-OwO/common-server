const mysql = require("@db/mysql");

module.exports = async (ctx) => {
  const { tag } = ctx.request.query;

  const data = await mysql("web_des").select("*").where("tag", tag).first();

  if (data) {
    ctx.returnSuccess(data);
  } else {
    ctx.returnError({
      msg: "没找到相关信息",
    });
  }
};
