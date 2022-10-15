import React from "react";

import { IconProps } from "../index";

const HamburgerMenu = (props: IconProps) => {
  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M2.00008 2.66667H26.0001C26.3537 2.66667 26.6928 2.52619 26.9429 2.27614C27.1929 2.02609 27.3334 1.68696 27.3334 1.33333C27.3334 0.979711 27.1929 0.640573 26.9429 0.390525C26.6928 0.140476 26.3537 0 26.0001 0H2.00008C1.64646 0 1.30732 0.140476 1.05727 0.390525C0.807224 0.640573 0.666748 0.979711 0.666748 1.33333C0.666748 1.68696 0.807224 2.02609 1.05727 2.27614C1.30732 2.52619 1.64646 2.66667 2.00008 2.66667V2.66667ZM26.0001 13.3333H2.00008C1.64646 13.3333 1.30732 13.4738 1.05727 13.7239C0.807224 13.9739 0.666748 14.313 0.666748 14.6667C0.666748 15.0203 0.807224 15.3594 1.05727 15.6095C1.30732 15.8595 1.64646 16 2.00008 16H26.0001C26.3537 16 26.6928 15.8595 26.9429 15.6095C27.1929 15.3594 27.3334 15.0203 27.3334 14.6667C27.3334 14.313 27.1929 13.9739 26.9429 13.7239C26.6928 13.4738 26.3537 13.3333 26.0001 13.3333ZM26.0001 6.66667H2.00008C1.64646 6.66667 1.30732 6.80714 1.05727 7.05719C0.807224 7.30724 0.666748 7.64638 0.666748 8C0.666748 8.35362 0.807224 8.69276 1.05727 8.94281C1.30732 9.19286 1.64646 9.33333 2.00008 9.33333H26.0001C26.3537 9.33333 26.6928 9.19286 26.9429 8.94281C27.1929 8.69276 27.3334 8.35362 27.3334 8C27.3334 7.64638 27.1929 7.30724 26.9429 7.05719C26.6928 6.80714 26.3537 6.66667 26.0001 6.66667Z"
        fill="#132742"
      />
    </svg>
  );
};

export default HamburgerMenu;
