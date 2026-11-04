import { memo } from "react";

import type { FlyoutProps } from "../types";
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
  const hasHeader = header !== null && header !== undefined;
  const showTitle = !hasHeader && title !== null && title !== undefined;

  return (
    <FlyoutRoot {...props} placement={placement}>
      {placement === "bottom" ? <FlyoutHandle /> : null}
      {hasHeader ? <FlyoutHeader>{header}</FlyoutHeader> : null}
      {showTitle ? (
        <FlyoutHeader>
          <FlyoutTitle>{title}</FlyoutTitle>
        </FlyoutHeader>
      ) : null}
      {children}
      {placement === "top" ? <FlyoutHandle /> : null}
    </FlyoutRoot>
  );
});
