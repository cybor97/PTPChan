import router from "express";

let homeRouter = router();

homeRouter.get(/\/|\/home|\/index/, (req, res) =>
  res.render(req.cookies.seenWelcome ? "board" : "welcome")
);
