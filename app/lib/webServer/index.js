import express from "express";
import http from "http";
import https from "https";

import BoardRouter from "./routers/board";
import HomeRouter from "./routers/home";
import ControlRouter from "./routers/control";
import StatsRouter from "./routers/stats";

class HttpServer {
  constructor() {
    let app = express();

    app
      .use("/board", BoardRouter)
      .use("/home", HomeRouter)
      .use("/control", ControlRouter)
      .use("/stats", StatsRouter)
      .use((err, req, res, next) => {
        if (err) {
          if (err instanceof ArgumentError) {
            res.status(400).send(err);
          } else if (err instanceof HttpError) {
            res.status(err.status).send(err);
          } else {
            res.status(500).send(err);
          }
        } else res.status(404).send("NOT_FOUND");
      });
  }

  listen(httpPort, httpsPort, host, onStarted) {
    http.createServer(app).listen(httpPort, host, onStarted);
    // https
    //   .createServer(
    //     {
    //       cert: "",
    //       key: ""
    //     },
    //     app
    //   )
    //   .listen(httpsPort, host, onStarted);
  }
}
