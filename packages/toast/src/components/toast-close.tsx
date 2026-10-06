import { memo } from "react";

import type { ToastCloseProps } from "../types";
import { ToastAction } from "./toast-action";

export const ToastClose = memo(function ToastClose({
  children,
  ...props
}: ToastCloseProps) {
  return (
    <ToastAction {...props} closeOnPress>
      {children}
    </ToastAction>
  );
});
