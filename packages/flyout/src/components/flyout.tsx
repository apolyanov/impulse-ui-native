import { memo, useMemo } from "react";

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
  const headerContent = useMemo(() => {
    const hasHeader = header !== null && header !== undefined;
    const hasTitle = title !== null && title !== undefined;

    if (hasHeader) {
      return <FlyoutHeader>{header}</FlyoutHeader>;
    }

    return hasTitle ? (
      <FlyoutHeader>
        <FlyoutTitle>{title}</FlyoutTitle>
      </FlyoutHeader>
    ) : null;
  }, [header, title]);

  const content = useMemo(
    () => (
      <>
        {placement === "bottom" ? <FlyoutHandle /> : null}
        {headerContent}
        {children}
        {placement === "top" ? <FlyoutHandle /> : null}
      </>
    ),
    [placement, headerContent, children],
  );

  return (
    <FlyoutRoot {...props} placement={placement}>
      {content}
    </FlyoutRoot>
  );
});
