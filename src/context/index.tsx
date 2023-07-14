import type { VFC } from "react";
import { createContext, useContext, useMemo } from "react";

import type { AuxContextProps, AuxContextType } from "../model";

/**
 * @constant AuxContext
 */
const AuxContext = createContext<AuxContextType>(undefined);

/**
 * @function AuxProvider
 * @param {AuxContextprops} props
 */
const AuxProvider: VFC<AuxContextProps> = (props) => {
  const { children, emitter } = props;

  const value: AuxContextType = useMemo(() => {
    return { emitter };
  }, [emitter]);

  return <AuxContext.Provider value={value}>{children}</AuxContext.Provider>;
};

/**
 * @function useAuxContext
 */
const useAuxContext = () => {
  const context = useContext<AuxContextType>(AuxContext);

  if (context === undefined) {
    throw new Error("useAuxContext must be used within a AuxContext Provider");
  }

  return context;
};

export default AuxProvider;

export { AuxContext, AuxProvider, useAuxContext };
