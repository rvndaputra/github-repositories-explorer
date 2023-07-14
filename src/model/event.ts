import { Emitter } from "..//helpers/emitter";

export type AuxEmitter = Emitter<AuxEventType>;

export interface AuxEventType {
  "@search/submit": string;
}
