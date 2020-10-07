const mysql = require("@db/mysql");
const { getHost } = require("@utils");
const { v4: uuidv4 } = require("uuid");

module.exports = async (ctx) => {
  const { description, user = 1 } = ctx.request.body;
  const host = getHost(ctx);

  if (!description) {
    return ctx.returnError({ msg: "描述不能为空" });
  }
  const id = uuidv4();
  await mysql("web_des").insert({ id, description, user_id: user, host });

  ctx.returnSuccess({
    msg: "新增成功",
  });
};
