import axios from "axios";
import { MoopsyClient } from '@moopsyjs/react';

export const client = new MoopsyClient({
  socketUrl: window.location.hostname === "localhost" ? "http://localhost:3001" : window.location.origin,
  axios,
});