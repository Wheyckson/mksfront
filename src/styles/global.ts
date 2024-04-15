import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "#f3f3f3",
    color: "#000000",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Motserrat",
    fontWeight: 400,
  },

  button: {
    cursor: "pointer",
  },
});
