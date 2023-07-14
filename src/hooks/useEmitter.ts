/* eslint-disable @typescript-eslint/naming-convention */
import { useRef } from "react";

import mitt from "../helpers/emitter";
import type { AuxEmitter, AuxEventType } from "../model";

/**
 * @function useEmitter
 * @param {AuxEmitter} emitter
 */
const useEmitter = (emitter?: AuxEmitter) => {
  const _emitter = useRef(emitter ?? mitt<AuxEventType>());

  return _emitter.current;
};

export default useEmitter;
