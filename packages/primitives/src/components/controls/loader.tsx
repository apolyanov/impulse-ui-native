import { memo } from "react";

import type { ControlLoaderProps } from "../../types";
import { Spinner } from "../atoms/spinner";

export const ControlLoader = memo(function ControlLoader(
  props: ControlLoaderProps,
) {
  return <Spinner {...props} />;
});
