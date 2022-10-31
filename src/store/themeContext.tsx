import React, { createContext } from "react";
import { PaletteOptions } from "@mui/material";

/* Theme Context Interface */
interface IThemeContext {
	themeMode: PaletteOptions;
	setThemeMode: (mode: string) => void;
}

const themeModeContext = createContext<IThemeContext>({
	themeMode: "dark" as PaletteOptions,
	setThemeMode: (mode) => {},
});
export default themeModeContext;
