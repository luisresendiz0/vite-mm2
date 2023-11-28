import { StateCreator } from "zustand";
import { Store } from "./store.type";


export type SliceCreator<T> = StateCreator<
  Store,
  [],
  [],
  T
>;
