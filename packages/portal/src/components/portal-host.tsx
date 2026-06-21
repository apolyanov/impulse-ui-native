import { memo } from "react";

import { usePortalChildren } from "../hooks";
import { PortalHostProps } from "../types";

export const PortalHost = memo(function PortalHost(props: PortalHostProps) {
  return usePortalChildren(props.id, props.name);
});
