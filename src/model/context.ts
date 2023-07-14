import type { ReactNode } from "react";
import type { AuxEmitter } from "./event";

export type AuxContextProps = {
  children: ReactNode;
  emitter: AuxEmitter;
};

export type AuxContextType = { emitter: AuxEmitter } | undefined;
