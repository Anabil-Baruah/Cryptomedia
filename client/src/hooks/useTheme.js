import { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";


function useTheme() {
    return useContext(ThemeContext);
  }

  export default useTheme;