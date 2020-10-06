const mysql = require("@db/mysql");

module.exports = async (ctx) => {
  const { description, id } = ctx.request.body;
  if ([description, id].some((item) => item === undefined)) {
    return ctx.returnError({ msg: "缺少参数" });
  }

  const data = await mysql("web_des").select().where("id", id);

  if (!data.length) {
    return ctx.returnError({ msg: "数据不存在" });
  }

  await mysql("web_des").select().where("id", id).update({ description });

  ctx.returnSuccess({
    msg: "修改成功",
  });
};
