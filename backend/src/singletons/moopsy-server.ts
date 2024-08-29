import { MoopsyServer } from "@moopsyjs/server";

export const server = new MoopsyServer(
  {
    verbose: false,
    port: 3001,
  },
  {}
);
