import { memo } from "react";

import { WebButton } from "../native-web";

export const ButtonPreview = memo(function ButtonPreview() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-xs">
      <WebButton size="small">Filled</WebButton>
      <WebButton size="small" variant="soft">
        Soft
      </WebButton>
      <WebButton disabled size="small" variant="outlined">
        Disabled
      </WebButton>
    </div>
  );
});
