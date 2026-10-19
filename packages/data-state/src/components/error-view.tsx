import { memo } from "react";

import type { ErrorViewProps } from "../types";
import { StateViewContainer } from "./state-view-container";

export const ErrorView = memo(function ErrorView(props: ErrorViewProps) {
  return <StateViewContainer {...props} />;
});
