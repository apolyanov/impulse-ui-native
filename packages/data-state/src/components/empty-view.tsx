import { memo } from "react";

import type { EmptyViewProps } from "../types";
import { StateViewContainer } from "./state-view-container";

export const EmptyView = memo(function EmptyView(props: EmptyViewProps) {
  return <StateViewContainer {...props} />;
});
