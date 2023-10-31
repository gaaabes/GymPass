import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    pink: {
      500: "#960BA0",
      600: "#781180",
    },
    gray: {
      100: "#F2F2F2",
      200: "#E9EEF2",
      300: "#d3d7db",
      400: "#65708D",
      600: "#4A5568",
      700: "#8c8f91",
      900: "#171923",
    },
    lightBlue: {
      100: "#EBF2FF",
      200: "#F2F4F7",
    },
    darkBlue: {
      600: "#6272C6",
      800: "#1D364B",
      900: "#20203F",
    },
    black: {
      900: "#000000",
    },
    white: {
      100: "#FFFFFF",
    },
  },
})
