const mysql = require("@db/mysql");
const { getHost } = require("@utils");

module.exports = async (ctx) => {
  const { description, user = 1 } = ctx.request.body;
  const host = getHost(ctx);
  console.log(ctx, "=========");
  if (!description) {
    return ctx.returnError({ msg: "描述不能为空" });
  }
  await mysql("web_des").insert({ description, user_id: user, host });

  ctx.returnSuccess({
    msg: "新增成功",
  });
};
