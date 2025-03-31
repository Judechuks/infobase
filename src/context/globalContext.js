import { useContext } from "react";
import { AppContext } from "./index";

export const useGlobalContext = () => {
  return useContext(AppContext);
};
