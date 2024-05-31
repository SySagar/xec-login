/**
 * @type {import("@mui/material").Components}
 */
const componentOverrides: any = {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "none",
          color: "white",
          backgroundColor: "#1F64FF",
          "&:hover": {
            backgroundColor: "#005AF0",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  };
  
  export default componentOverrides;