import { useContext } from "react";
import { IconsContext } from "../constants";

export function useIcons() {
  const context = useContext(IconsContext);

  if (!context) {
    throw new Error("Should be used withing provider");
  }

  return context;
}
