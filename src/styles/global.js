import { css } from "@emotion/react";

import { colors } from "./colors";
import { fonts } from "./typography";

export const global = css`
  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${fonts.primary};
    color: ${colors.gray.dark};
    background-color: ${colors.gray.bg_light};
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
`;
