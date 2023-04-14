import { css } from "@emotion/css";
import { MyStyles } from "./MyStyles";

export const myThemes = css`
  background: ${MyStyles.secundary[2]};
  color: ${MyStyles.primary[1]};
  padding: 2em;

 p {
    color: ${MyStyles.textos.parrafoColor};
    margin: 1em;
 }

 .myh3 {
  color:  ${MyStyles.textos.h3};
 }
`;

export const ThemeSizeInputs = css`
 min-height: 2em;
 padding-left: 0.2em;
 min-width: 15em;

   &::placeholder {
   color: ${MyStyles.secundary[2]};
 }
`;

