const mysql = require("@db/mysql");

module.exports = async (ctx) => {
  const { page = 1, size = 10 } = ctx.request.query;

  const data = await mysql("web_des")
    .select("*")
    .limit(size)
    .offset((page - 1) * size);
  const count = await mysql("web_des").count({ num: "*" }).first();

  ctx.returnSuccess({
    list: data,
    page,
    total: count.num,
  });
};
