const debug = require("debug")("response");
const statusCode = require("@utils/responseStatusCode");

function returnSuccess(ctx, data) {
  ctx.body = {
    code: statusCode["SUCCESS"],
    msg: "success",
    data,
  };
}
function returnError(ctx, { type = "COMMON_ERROR", msg = "服务器繁忙" } = {}) {
  ctx.body = {
    code: statusCode[type],
    msg,
    data: {},
  };
}
module.exports = async function (ctx, next) {
  ctx.returnSuccess = returnSuccess.bind(null, ctx);
  ctx.returnError = returnError.bind(null, ctx);
  try {
    await next();
  } catch (e) {
    debug("Catch Error: %o", e);

    ctx.status = 500;
    // 输出详细的错误信息
    ctx.body = {
      code: 500,
      msg: "net error",
      error: e && e.message ? e.message : e.toString(),
    };
  }
};
