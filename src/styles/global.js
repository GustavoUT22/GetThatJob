import { css } from "@emotion/react";

import { colors } from "./colors";
// import "./reset.css";
import { fonts } from "./typography";

export const global = css`
  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${fonts.primary};
    color: ${colors.gray.dark};
  }
`;
