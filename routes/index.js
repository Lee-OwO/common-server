const router = require("koa-router")({
  prefix: "/api",
});
const controllers = require("@root/controllers");

router.get("/demo", controllers.demo);

router.get("/commonDes", controllers.commonDes.getCommonDes);
router.post("/commonDes", controllers.commonDes.addCommonDes);
router.put("/commonDes", controllers.commonDes.updateCommonDes);
router.delete("/commonDes", controllers.commonDes.delCommonDes);

router.get("/commonDesDetail", controllers.commonDes.getCommonDesDetail);

module.exports = router;
