import { FrontendServer, MoopsyServer } from "@moopsyjs/server";
import * as path from "path";

export const server = new MoopsyServer(
  {
    verbose: false,
    port: 3001,
  },
  {}
);

new FrontendServer(server).mount(path.join(__dirname, '/../../../frontend'));
