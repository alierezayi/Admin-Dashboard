// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function ThemeToggleButton() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: "background.default",
//         color: "text.primary",
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={colorMode.toggleColorMode}
//         color="inherit"
//       >
//         {theme.palette.mode === "dark" ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </Box>
//   );
// }
// export default ThemeToggleButton;

import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React from "react";
import { useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ColorModeContext } from "@/providers/ThemeProvider";

// export type ThemeToggleButtonProps = {
//   ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
// };

const ThemeToggleButton = () => {
  const mobileCheck = useMediaQuery("(min-width: 500px)");

  //   const {
  //     ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  //   } = props;

  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {mobileCheck && <Typography>{theme.palette.mode}</Typography>}

      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
