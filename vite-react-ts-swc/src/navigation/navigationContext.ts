import { createContext } from "react";
import navValues from "./navValues";

const navigationContext = createContext({current: navValues.home});

export default navigationContext;