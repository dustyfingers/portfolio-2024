import { extendTheme } from "@chakra-ui/react";

export const colors = {};

export const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

const theme = extendTheme({
  fonts,
  colors,
});

export default theme;
