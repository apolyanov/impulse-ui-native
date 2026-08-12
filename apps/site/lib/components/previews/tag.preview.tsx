import { memo } from "react";

import { WebTag } from "../native-web";

export const TagPreview = memo(function TagPreview() {
  return (
    <div className="flex flex-wrap justify-center gap-xs">
      <WebTag>Stable</WebTag>
      <WebTag color="success" variant="soft">
        Success
      </WebTag>
      <WebTag color="warning" variant="outlined">
        Beta
      </WebTag>
      <WebTag closable variant="outlined">
        Closable
      </WebTag>
    </div>
  );
});
