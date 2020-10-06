const mysql = require("@db/mysql");

module.exports = async (ctx) => {
  const { id } = ctx.request.body;

  const data = await mysql("web_des").select().where("id", id);

  if (!data.length) {
    return ctx.returnError({ msg: "数据不存在" });
  }
  await mysql("web_des").select().where("id", id).del();

  ctx.returnSuccess({
    msg: "删除成功",
  });
};
