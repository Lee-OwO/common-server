const mysql = require("@db/mysql");
const { getHost } = require("@utils");
const { v4: uuidv4 } = require("uuid");

module.exports = async (ctx) => {
  const { description, user = 1 } = ctx.request.body;
  const host = getHost(ctx);

  if (!description) {
    return ctx.returnError({ msg: "描述不能为空" });
  }
  const tag = uuidv4();
  await mysql("web_des").insert({ tag, description, user_id: user, host });

  ctx.returnSuccess({
    msg: "新增成功",
  });
};
