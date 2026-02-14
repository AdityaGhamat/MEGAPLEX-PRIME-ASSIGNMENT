import server from "./app";
import env from "./modules/core/config/env";

server.start(env.PORT);
