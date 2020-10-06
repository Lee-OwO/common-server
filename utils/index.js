function getHost(ctx) {
  return ctx.header.host;
}

module.exports = {
  getHost,
};
