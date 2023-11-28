import { AuthSlice } from "./auth.type";
import { ConfigSlice } from "./config.type";

export type Store = ConfigSlice & AuthSlice;