import { memo } from "react";

import type { FlyoutProps } from "../types";
import { FlyoutContent } from "./content";
import { FlyoutHandle } from "./handle";
import { FlyoutHeader } from "./header";
import { FlyoutRoot } from "./root";
import { FlyoutTitle } from "./title";

export const FlyoutComponent = memo(function Flyout({
  children,
  title,
  header,
  placement = "bottom",
  ...props
}: FlyoutProps) {
  const showTitle = !header && title;

  return (
    <FlyoutRoot {...props} placement={placement}>
      {placement === "bottom" ? <FlyoutHandle placement={placement} /> : null}
      {header ? <FlyoutHeader>{header}</FlyoutHeader> : null}
      {showTitle ? (
        <FlyoutHeader>
          <FlyoutTitle>{title}</FlyoutTitle>
        </FlyoutHeader>
      ) : null}
      <FlyoutContent>{children}</FlyoutContent>
      {placement === "top" ? <FlyoutHandle placement={placement} /> : null}
    </FlyoutRoot>
  );
});
