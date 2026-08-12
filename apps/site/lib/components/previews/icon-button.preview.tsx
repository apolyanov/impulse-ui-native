import { memo } from "react";

import { WebIconButton } from "../native-web";

export const IconButtonPreview = memo(function IconButtonPreview() {
  return (
    <div className="flex flex-wrap justify-center gap-xs">
      <WebIconButton icon="heart" label="Favorite" />
      <WebIconButton icon="bell" label="Notifications" variant="soft" />
      <WebIconButton icon="settings" label="Settings" variant="outlined" />
      <WebIconButton disabled icon="plus" label="Add" variant="outlined" />
    </div>
  );
});
