import { css } from "@linaria/core";

import { DARK_COLORS_CSS, LIGHT_COLORS_CSS } from "@/constants";

export const glboals = css`
  :global() {
    * {
      margin: 0;
    }

    :root {
      ${LIGHT_COLORS_CSS}
    }

    :root.dark {
      ${DARK_COLORS_CSS}
    }
  }
`;
